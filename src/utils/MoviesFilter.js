const MoviesFilter = (movies, search) => {
    const moviesIsFiltered = movies.filter((item) => {
        return (
            (item?.nameRU?.toLowerCase().includes(search?.key?.toLowerCase().trim()) || item?.nameEN?.toLowerCase().includes(search?.key?.toLowerCase().trim()))
            && (search.short ? item.duration <= 40 : true)
        );
    });
    
    return moviesIsFiltered;
}

export default MoviesFilter;