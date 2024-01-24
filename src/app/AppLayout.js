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
      <div className="logo-search-bar">
        <div className="logo">
          <img
            className="logo-img"
            src={RESOURCES.redditLogo}
            alt="Logo Reddit" />
        </div>
        <div className="menu">
          <button>
          <img onClick={showCategories} src={RESOURCES.menu} alt="menu" />
          </button>
        </div>
        <form>
          <input
            type="text"
            placeholder="search anything" />
          <button
            type="submit"
            className="form-button">
            <img
              src={RESOURCES.searchButton}
              alt="search button" />
          </button>
        </form>
        <div className="resume-container">
          <a className="download-link" href={RESOURCES.cv} download>
            <button className="resume">
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