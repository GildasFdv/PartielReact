import { useQuery } from "@tanstack/react-query";
import useApiClient from "../services/ApiClientProvider";
import { useMemo } from "react";

export default function SearchContainer() {
    const apiClient = useApiClient();
    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ["trend"],
        queryFn: () => apiClient.getDataByTrending('all', 'day')
    });

    const backgroundImage = useMemo(() => {
        if (isSuccess && data && data.length > 0) {
            const first = data[0];

            return "https://image.tmdb.org/t/p/w500" + first.backdrop_path || first.poster_path;
        }
        return "./thor.jpg";
    }, [isSuccess, data]);

    return (
        <div className="search-container saveMe" style={{ background: `url(${backgroundImage})` }}>
            <input type="text" placeholder="Rechercher un film" />
            <button type="submit"><i className="fas fa-search"></i></button>
        </div>
    );
}