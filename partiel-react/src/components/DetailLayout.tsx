import { Link, Outlet } from "react-router";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function DetailLayout() {
    return (
        <div>
            <DesktopNav />
            <MobileNav />
            <Outlet />
        </div>
    );
}