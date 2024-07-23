import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"; // Assume you have a Navbar component
import Contacts from "./Contacts";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <div className=' min-h-screen'style={{ padding: '20px' }}>
                <Outlet />
            </div>
            <Contacts/>
        </div>
    );
};

export default Layout;