import { Link, Outlet } from "react-router";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Footer from "./Footer";
import SearchContainer from "./SearchContainer";

export default function Layout() {
    return (
        <div>
            <DesktopNav />
            <MobileNav />
            <SearchContainer />
            <Outlet />
            <Footer />
        </div>
    );
}