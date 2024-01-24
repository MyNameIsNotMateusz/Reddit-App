import RESOURCES from "../data/resources";
import ROUTES from "../app/routes";
import styles from "../styles/Categories.css";
import { NavLink } from "react-router-dom";

const Categories = () => {
 return (
  <div className="category-menu">
  <ul>
    <li>
      <NavLink className="navLink navLinkHome" to={ROUTES.homeRoute()}>
      <img src={RESOURCES.home} />
        Home
      </NavLink>
    </li>
    <button className="categoriesSeparator" />
    <li>
      <NavLink className="navLink navLinkPopular" to={ROUTES.popularRoute()}>
      <img src={RESOURCES.increase} />
        Popular
      </NavLink>
    </li>
    <li>
      <NavLink className="navLink navLinkLol" to={ROUTES.selectedTopicRoute("LeagueOfLegends")}>
      <img src={RESOURCES.LeagueOfLegendsIcon} />
        League of Legends
      </NavLink>
    </li>
    <li>
      <NavLink className="navLink navLinkLol" to={ROUTES.selectedTopicRoute("NBA")}>
      <img src={RESOURCES.nba} />
        NBA
      </NavLink>
    </li>
    <li>
      <NavLink className="navLink navLinkLol" to={ROUTES.selectedTopicRoute("PremierLeague")}>
      <img src={RESOURCES.premierleague} />
        Premier League
      </NavLink>
    </li>
    <li>
      <NavLink className="navLink navLinkLol" to={ROUTES.selectedTopicRoute("Tesla")}>
      <img src={RESOURCES.tesla} />
        Tesla
      </NavLink>
    </li>
    <li>
      <NavLink className="navLink navLinkLol" to={ROUTES.selectedTopicRoute("SpaceX")}>
      <img src={RESOURCES.spaceX} />
        SpaceX
      </NavLink>
    </li>
    <li>
      <NavLink className="navLink navLinkLol" to={ROUTES.selectedTopicRoute("Bitcoin")}>
      <img src={RESOURCES.bitcoin} />
        Bitcoin
      </NavLink>
    </li>
    <li>
      <NavLink className="navLink navLinkLol" to={ROUTES.selectedTopicRoute("DojaCat")}>
      <img src={RESOURCES.dojacat} />
        Doja Cat
      </NavLink>
    </li>
    <li>
      <NavLink className="navLink navLinkLol" to={ROUTES.selectedTopicRoute("KimKardashian")}>
      <img src={RESOURCES.kimkardashian} />
        Kim Kardashian
      </NavLink>
    </li>
  </ul>
</div>
 )
};

export default Categories;