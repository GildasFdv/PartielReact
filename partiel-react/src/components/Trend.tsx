import { useQuery } from "@tanstack/react-query";
import MovieCard from "./MovieCard";
import useApiClient from "../services/ApiClientProvider";
import { useState } from "react";

type Filter = 'day' | 'week';

export default function Trend() {
    const [filter, setFilter] = useState<Filter>('day');

    const apiClient = useApiClient();
    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ["trend", filter],
        queryFn: () => apiClient.getDataByTrending('all', filter),
    });
    
    return (
        <div className="wrapper">
            <div className="tendances-container container">
                {/* <!--  Ici les films tendances --> */}
                <div className="title-filter" id="title-tendances">
                    <h2>Tendances</h2>
                    <button className={filter == "day" ? "active" : ""} id="day" onClick={() => setFilter('day')}>Aujourd'hui</button>
                    <button className={filter == "week" ? "active" : ""} id="week" onClick={() => setFilter('week')}>Cette semaine</button>
                </div>
                <div className="grid-tendances" id="tendances">
                    {
                        isLoading &&
                        <div>Loading...</div>
                    }
                    {
                        isSuccess && data &&
                        data.filter((m, i) => i < 4).map((m, i) => <MovieCard movie={m} key={i}/>)
                    }
                </div>
            </div>
        </div>
    );
}