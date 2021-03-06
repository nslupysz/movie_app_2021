import React from "react";
import PropTypes from "prop-types";

function Movie({id, year, title, summary, poster}) {
    return(
        <div>
            <img src={poster} alt={title} title={title}/>
            
            <div>
            <h1>{title}</h1>
            <h3>{year}</h3>
            <h4>{summary}</h4>
            </div>

        </div>
)}  


Movie.propTypes = {
    id:PropTypes.number,
    year:PropTypes.number,
    title:PropTypes.string,
    summary:PropTypes.string,
    poster:PropTypes.string,
};

export default Movie;