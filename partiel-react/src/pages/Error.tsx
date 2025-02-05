import { Link } from "react-router";

export default function Error() {
    return (
        <div>
            <h2>Page Introuvable</h2>
            <Link to="/">Retour à l'accueil</Link>
        </div>
    );
}