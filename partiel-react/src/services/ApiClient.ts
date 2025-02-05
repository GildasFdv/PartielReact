class ApiClient
{
    apiKey: string;

    constructor(apiKey: string)
    {
        this.apiKey = apiKey;
    }

    getDataByTrending(type: string, filter: string)
    {
        // https://api.themoviedb.org/3/trending/all/day?api_key=7c51ce5f51b2a0e2bb3bf45b2afaa9ae
        return fetch(`https://api.themoviedb.org/3/trending/${type}/${filter}?api_key=${this.apiKey}`)
            .then(response => response.json())
            .then(data => data.results);
    }
}