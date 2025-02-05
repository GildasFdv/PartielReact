import { Link } from "react-router";

export default function MovieCard() {
    return (
        <div className="movie">
            <Link to="details/id/id/movie/movie">
                <img src="https://image.tmdb.org/t/p/w500/3rTNq7sgAoAKNK8axPYA6MoBO83.jpg"/>
                <div className="score">
                    <p>68%</p>
                </div>
                <h5>보고타: 마지막 기회의 땅</h5>
                <p>31/12/2024</p>
            </Link>
        </div>
    );
}