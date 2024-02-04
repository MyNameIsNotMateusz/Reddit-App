import { BrowserRouter, Routes, Route } from "react-router-dom";
import COMPONENTS from "../data/components";

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Reddit-App" element={<COMPONENTS.AppLayout />}>
                    <Route path="/Reddit-App" element={<COMPONENTS.Home />} />
                    <Route path="LeagueOfLegends" element={<COMPONENTS.LeagueOfLegends />} />
                    <Route path="NBA" element={<COMPONENTS.NBA />} />
                    <Route path="PremierLeague" element={<COMPONENTS.PremierLeague />} />
                    <Route path="Tesla" element={<COMPONENTS.Tesla />} />
                    <Route path="SpaceX" element={<COMPONENTS.SpaceX />} />
                    <Route path="Bitcoin" element={<COMPONENTS.Bitcoin />} />
                    <Route path="DojaCat" element={<COMPONENTS.DojaCat />} />
                    <Route path="KimKardashian" element={<COMPONENTS.KimKardashian />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;