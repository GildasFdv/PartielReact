import { Link } from "react-router";

export default function MobileNav() {
    return (
        <nav className="nav-list-mobile" id="mobileNav">
            <Link to="/">Movies</Link>
            <div id="barr">
                <div className="tt">
                    <div id="top-bar" className="bar"></div>
                    <div id="middle-bar" className="bar"></div>
                    <div id="bottom-bar" className="bar"></div>
                </div>
            </div>
            <div className="mobile-nav-content" id="menu-nav">
                <ul>
                    <li>
                        <Link to="/">Films</Link>
                    </li>
                    <li>
                        <Link to="series">Séries</Link>
                    </li>
                    <li>
                        <Link to="popular">Populaires</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}