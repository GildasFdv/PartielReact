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

export type CastMember = {
    adult: boolean;
    gender: number; // 1 pour féminin, 2 pour masculin, 0 pour non spécifié
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null; // Peut être null si aucune image n'est disponible
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
};

export type Credits = {
    cast: CastMember[];
};

export class ApiClient {
    apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    getDataByTrending(type: string, filter: string = "day"): Promise<Movie[]> {
        return fetch(`https://api.themoviedb.org/3/trending/${type}/${filter}?api_key=${this.apiKey}`)
            .then(response => response.json())
            .then(data => data.results);
    }

    getDataByTvCategory(category: string = "top_rated"): Promise<Movie[]> {
        return fetch(`https://api.themoviedb.org/3/tv/${category}?api_key=${this.apiKey}&language=fr-FR&page=1`)
            .then(response => response.json())
            .then(data => data.results);
    }

    getMovieById(id: string, type: string): Promise<Movie> {
        return fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=${this.apiKey}&language=fr-FR`)
            .then(response => response.json());
    }

    getCreditsById(id: string, type: string): Promise<Credits> {
        return fetch(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${this.apiKey}`)
            .then(response => response.json());
    }
}