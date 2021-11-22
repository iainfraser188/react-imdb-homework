import React from "react";
import Movie from "./movie";

const MovieList = ({movies}) => {
    const movieNodes = movies.map(movie => {
        return(
            <>
                <Movie url={movie.url} key={movie.id}>
                    {movie.name}
                </Movie>
                <br/>
            </>
        );
    });
    return(
        <>
            {movieNodes}
        </>
    )
}

export default MovieList;