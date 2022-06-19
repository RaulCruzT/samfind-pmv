import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Home from "../components/Home";
import Detail from "../components/Detail";

const RoutesComponent = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
        </Routes>
    </BrowserRouter>
);

export default RoutesComponent;