/**
 * Layout.js
 * 
 * Description: Layout of App with page and sidebar
 * Author: Colton Hagan
 * Created: 5/31/2023
 */

import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./index.scss";

const Layout = () => {
    return (
        <div className="App">
            <Sidebar />
            <div className="page">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
