import { reactive } from "vue";

export const store = reactive({
    films: [],
    TvShows: [],
    wordToSearch: "",
    apiToSearch: ["https://api.themoviedb.org/3/search/movie?api_key=8dccd71fac77f7e772cd2318a37f630e", "https://api.themoviedb.org/3/search/tv?api_key=8dccd71fac77f7e772cd2318a37f630e"],
    apiPopularFilm: "https://api.themoviedb.org/3/movie/popular?api_key=8dccd71fac77f7e772cd2318a37f630e",
    apiSearchFilm: "https://api.themoviedb.org/3/search/movie?api_key=8dccd71fac77f7e772cd2318a37f630e",
    apiSearchTVShow: "https://api.themoviedb.org/3/search/tv?api_key=8dccd71fac77f7e772cd2318a37f630e",
    loading: true,
});