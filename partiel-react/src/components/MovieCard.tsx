import { Link } from "react-router";
import { Movie } from "../services/ApiClient";

type MovieCardProps = {
    movie: Movie;
};

export default function MovieCard({ movie } : MovieCardProps) {
    console.log(movie);
    return (
        <div className="movie">
            <Link to={`/detail/${movie.id}/${movie.media_type || "tv"}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                <div className="score">
                    <p>{movie.vote_average}</p>
                </div>
                <h5>{movie.title}</h5>
                <p>{new Date(movie.release_date || movie.first_air_date).toLocaleDateString()}</p>
            </Link>
        </div>
    );
}