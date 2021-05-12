const API_KEY = process.env.API_KEY;

export default {
    fetchTrending: {
        title: 'Najpopularniejsze',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated: {
        title: 'Najwyżej oceniane',
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies: {
        title: 'Akcja',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedyMovies: {
        title: 'Komedie',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorrorMovies: {
        title: 'Horrory',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchMysteryMovies: {
        title: 'Kryminały',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    fetchSciFiMovies: {
        title: 'Sci-fi',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`
    }
};