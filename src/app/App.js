import { BrowserRouter, Routes, Route } from "react-router-dom";
import COMPONENTS from "../data/components";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Reddit-App" element={<COMPONENTS.AppLayout />}>
                    <Route path="/Reddit-App" element={<COMPONENTS.Home />} />
                    <Route path="popular" element={<COMPONENTS.PopularPosts />} />
                    <Route path="LeagueOfLegends" element={<COMPONENTS.LeagueOfLegends />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;