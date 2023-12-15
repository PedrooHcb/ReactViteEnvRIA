import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "../Components/Home";
import ItemList from "../Components/ItemList";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Home" element={<Home />}></Route>
                <Route path="/ItemList" element={<ItemList/>}></Route>
            </Routes>
        </Router>
    );
}