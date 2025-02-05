import { useQuery } from "@tanstack/react-query";
import useApiClient from "../services/ApiClientProvider";
import MovieCard from "./MovieCard";
import { useState } from "react";

type Filter = 'top_rated' | 'popular';

export default function Popular() {
    const [filter, setFilter] = useState<Filter>('top_rated');

    const apiClient = useApiClient();
    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ["tvcategory", filter],
        queryFn: () => apiClient.getDataByTvCategory(filter)
    });

    return (
        <div className="wrapper-pop">
            <div className="populaires-container container">
                {/* <!-- Ici les films/séries populaires--> */}
                <div className="title-filter saveMe" id="title-category">
                    <h2>Séries TV</h2>

                    <button className={filter == "top_rated" ? "active" : ""} id="top_rated" onClick={() => setFilter('top_rated')}>Mieux notées</button>
                    <button className={filter == "popular" ? "active" : ""} id="popular" onClick={() => setFilter('popular')}>Populaires</button>
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