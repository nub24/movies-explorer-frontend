export const movieFilter = (searchQuery, moviesArr) => {
    return moviesArr.filter((movie) => movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()))
}