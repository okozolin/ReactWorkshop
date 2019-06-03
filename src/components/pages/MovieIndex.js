import React, {useState} from 'react';
import Navigation from "../shared/Navigation";
import {apiRequest} from "../../services/api";

const MovieIndex = (props) => {
    const [movies, setMovies ]= useState([])

    apiRequest().then( data => setMovies(data))
    return (
        <div>
            <h1>Movies index</h1>
            { movies.map( movie => (
                <pre>
                    {JSON.stringify(movie, 1, 1)}
                </pre>
                )
            ) }
            <Navigation/>
        </div>
    );
}
export default MovieIndex;


