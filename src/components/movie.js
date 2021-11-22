import React from "react";

const Movie = ({url, children}) => {
    return(
        <a href={url}>{children}</a>
    );
}

export default Movie;