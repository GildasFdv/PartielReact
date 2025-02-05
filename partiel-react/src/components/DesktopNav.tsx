import { Link } from "react-router";

export default function DesktopNav() {
    return (
        <nav className="desktop-nav">
            <Link to="/">
                <i className="fas fa-film" aria-hidden="true"></i>
            </Link>
            <ul>
                <li>
                    <Link to="/">Movies</Link>
                </li>
                <li>
                    <Link to="/series">Series</Link>
                </li>
                <li>
                    <Link to="/popular">Popular</Link>
                </li>
            </ul>
        </nav>
    );
}