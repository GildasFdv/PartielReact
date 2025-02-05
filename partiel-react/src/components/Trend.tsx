import { useQuery } from "@tanstack/react-query";
import MovieCard from "./MovieCard";
import useApiClient from "../services/ApiClientProvider";

export default function Trend() {
    const apiClient = useApiClient();
    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ["trend"],
        queryFn: () => apiClient.getDataByTrending('all', 'day')
    });
    
    return (
        <div className="wrapper">
            <div className="tendances-container container">
                {/* <!--  Ici les films tendances --> */}
                <div className="title-filter" id="title-tendances">
                    <h2>Tendances</h2>
                    <button className="active" id="day">Aujourd'hui</button>
                    <button id="week">Cette semaine</button>
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