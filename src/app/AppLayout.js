import { NavLink, Outlet } from "react-router-dom";
import ROUTES from "./routes";

const AppLayout = () => {

    return (
        <div>
            <nav>
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
            </nav>
            <Outlet />
        </div>
    )
};

export default AppLayout;