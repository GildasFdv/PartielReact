import { Movie } from "../services/ApiClient";

type MovieDetailBannerProps = {
    movie: Movie;
};

export default function MovieDetailBanner({ movie }: MovieDetailBannerProps) {
    return (
        <div className="banner" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}` }}>
            <div className="content saveMe">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                <div className="right">
                    <div className="top">
                        <div className="score">${movie.vote_average}</div>
                        <div className="title-date">
                            <h1>{movie.original_title || movie.title} ([Année])</h1>
                            <span>{new Date(movie.release_date || movie.first_air_date).toLocaleDateString()} - [Genre cinématographiques] - [Durée]</span>
                        </div>
                    </div>
                    <div className="synopsis">
                        <h2>Synopsis</h2>
                        <p>
                            {movie.overview}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}