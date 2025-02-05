import { useQuery } from "@tanstack/react-query";
import useApiClient from "../services/ApiClientProvider";
import { useParams } from "react-router";
import { useEffect } from "react";
import MovieDetailBanner from "./MovieDetailBanner";
import Actor from "./Actor";

export default function MovieDetails() {
    const { id, type } = useParams();
    const apiClient = useApiClient();
    const { data: movie, isLoading: movieIsLoading, isSuccess: movieIsSuccess } = useQuery({
        queryKey: ["movie", id],
        queryFn: () => apiClient.getMovieById(id!, type!),
        enabled: !!id && !!type
    });
    const { data: credits, isLoading: creditsIsLoading, isSuccess: creditsIsSuccess } = useQuery({
        queryKey: ["credits", id],
        queryFn: () => apiClient.getCreditsById(id!, type!),
        enabled: !!id && !!type
    });

    return (
        <div className="focus-container">
            {
                movieIsLoading &&
                <div>Loading...</div>
            }
            {
                movieIsSuccess && movie &&
                <MovieDetailBanner movie={movie} />
            }
            {
                creditsIsLoading &&
                <div>Loading...</div>
            }
            {
                creditsIsSuccess && credits &&
                <div className="casting">
                    <h2>Casting</h2>
                    <div className="actors">
                        {
                            credits.cast.slice(0, 4).map((actor, i) => (<Actor actor={actor} key={i} />))
                        }
                    </div>
                </div>
            }
        </div>
    );
}