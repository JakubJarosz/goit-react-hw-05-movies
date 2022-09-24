import axios from "axios";

export const fetchMostPopularMovies = async () => {
    return axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=994ef3d99cac621026dd12f16abee44b");

}

export const fetchFromKey = async (searchQuery) => {
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=994ef3d99cac621026dd12f16abee44b&language=en-US&query=${searchQuery}&page=1&include_adult=false`)
}

export const fetchFromLinkClick = async (id) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=994ef3d99cac621026dd12f16abee44b&language=en-US`)
}


export const fetchCredits = async (id) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=994ef3d99cac621026dd12f16abee44b&language=en-US`)
}

export const fetchReview = async (id) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=994ef3d99cac621026dd12f16abee44b&language=en-US&page=1`)
}


export default {
    fetchMostPopularMovies,
    fetchFromKey,
    fetchFromLinkClick,
    fetchCredits,
    fetchReview
}