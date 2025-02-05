import { useQuery } from "@tanstack/react-query";
import useApiClient from "../services/ApiClientProvider";
import MovieCard from "./MovieCard";

export default function Popular() {
    const apiClient = useApiClient();
    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ["tvcategory"],
        queryFn: () => apiClient.getDataByTvCategory()
    });

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
                        isLoading &&
                        <div>Loading...</div>
                    }
                    {
                        isSuccess && data &&
                        data.filter((m, i) => i < 4).map((m, i) => <MovieCard movie={m} key={i} />)
                    }
                </div>
            </div>
        </div>
    );
}