import { reactive } from "vue";

export const store = reactive({
    toSearch: [{
        type: "Film",
        url: "/search/movie",
        list: []

    },
    {
        type: "TV Show",
        url: "/search/tv",
        list: []
    }],
    wordToSearch: "",
    apiURL: "https://api.themoviedb.org/3",
    apiKey: "8dccd71fac77f7e772cd2318a37f630e",
    apiPopularFilm: "https://api.themoviedb.org/3/movie/popular?api_key=8dccd71fac77f7e772cd2318a37f630e",
    loading: true,
});