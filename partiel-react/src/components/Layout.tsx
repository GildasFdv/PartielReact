import { Link, Outlet } from "react-router";

export default function Layout() {
    return (
        <div>
            <nav>
                <Link to="/">Movies</Link>
                <Link to="popular">Popular</Link>
                <Link to="series">Series</Link>
            </nav>
            <Outlet />
        </div>
    );
}