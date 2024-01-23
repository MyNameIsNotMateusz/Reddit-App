import { NavLink, Outlet } from "react-router-dom";
import ROUTES from "./routes";
import RESOURCES from "../data/resources";
import styles from "../styles/AppLayout.css";

const AppLayout = () => {

  return (
    <div className="container">
      <div className="logo-search-bar">
        <div className="logo">
          <img
            className="logo-img"
            src={RESOURCES.redditLogo}
            alt="Logo Reddit" />
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
        <div>
          <a href={RESOURCES.cv} download>
            <button className="resume">
              Get Resume
            </button>
          </a>
        </div>
      </div>
      <button className="separator" />
      {/* 
      <div className="category-menu">
        <ul>
          <li>
            <NavLink to={ROUTES.homeRoute()}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.popularRoute()}>
              Popular
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.selectedTopicRoute("LeagueOfLegends")}>
              League of Legends
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="posts-container">
        <Outlet />
      </div> */}
    </div>
  )
};

export default AppLayout;