export type Movie = {
    backdrop_path: string;
    id: number;
    title: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: "movie"; // Peut être spécifié comme une chaîne spécifique si toujours "movie"
    adult: boolean;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    release_date: string; // Format ISO 8601 (YYYY-MM-DD)
    first_air_date: string; // Format ISO 8601 (YYYY-MM-DD)
    video: boolean;
    vote_average: number;
    vote_count: number;
};

export class ApiClient
{
    apiKey: string;

    constructor(apiKey: string)
    {
        this.apiKey = apiKey;
    }

    getDataByTrending(type: string, filter: string = "day") : Promise<Movie[]>
    {
        return fetch(`https://api.themoviedb.org/3/trending/${type}/${filter}?api_key=${this.apiKey}`)
            .then(response => response.json())
            .then(data => data.results);
    }

    getDataByTvCategory(category: string = "top_rated"): Promise<Movie[]> {
        return fetch(`https://api.themoviedb.org/3/tv/${category}?api_key=${this.apiKey}&language=fr-FR&page=1`)
            .then(response => response.json())
            .then(data => data.results);
    }
}