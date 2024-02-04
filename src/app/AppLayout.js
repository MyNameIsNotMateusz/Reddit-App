import { Outlet } from "react-router-dom";
import RESOURCES from "../data/resources";
import "../styles/AppLayout.css";
import COMPONENTS from "../data/components";
import { useState } from "react";

const AppLayout = () => {

  //This feature adds an "open" class that shows the category bar on devices that are less than 720px wide.
  const showCategories = () => {
    const categories = document.querySelector(".category-menu");
    categories.classList.toggle('open');
  }

  //The searchPost variable stores the current search string.
  const [searchPost, setSearchPost] = useState("");

  return (
    <div className="container">
      <div className="container__nav">
        <div className="container__nav-logo">
          <img
            src={RESOURCES.redditLogo}
            alt="Logo Reddit" />
        </div>
        <div className="container__nav-menu">
          <button>
            <img onClick={showCategories} src={RESOURCES.menu} alt="menu" />
          </button>
        </div>
        <form>
          <input
            type="text"
            placeholder="search anything"
            onChange={(e) => setSearchPost(e.target.value)} />
          <div>
            <button
              type="submit">
              <img
              src={RESOURCES.searchButton}
              alt="search button" />
            </button>
          </div>
        </form>
        <div className="container__nav-resume">
          <a href={RESOURCES.cv} download>
            <button>
              Get Resume
            </button>
          </a>
        </div>
      </div>
      <COMPONENTS.Categories />
      <div className="posts-container">
        <Outlet context={searchPost} />
      </div>
    </div>
  )
};

export default AppLayout;