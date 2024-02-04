import { NavLink, Outlet } from "react-router-dom";
import ROUTES from "./routes";
import RESOURCES from "../data/resources";
import styles from "../styles/AppLayout.css";
import Categories from "../components/Categories";
import COMPONENTS from "../data/components";

const AppLayout = () => {

  const showCategories = () => {
    const categories = document.querySelector(".category-menu");
    categories.classList.toggle('open');
  }

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
            placeholder="search anything" />
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
      <button className="separator" />
      <COMPONENTS.Categories />
      <div className="posts-container">
        <Outlet />
      </div>
    </div>
  )
};

export default AppLayout;