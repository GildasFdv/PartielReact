import MovieCard from "./MovieCard";

export default function Popular() {
    return (
        <div className="wrapper-pop">
            <div className="populaires-container container">
                {/* <!-- Ici les films/séries populaires--> */}
                <div className="title-filter saveMe" id="title-category">
                    <h2>Séries TV</h2>

                    <button className="active" id="top_rated">Mieux notées</button>
                    <button id="popular">Populaires</button>
                </div>
                <div className="grid-tendances" id="populaires">
                    {
                        new Array(4).fill(0).map(() => <MovieCard />)
                    }
                </div>
            </div>
        </div>
    );
}