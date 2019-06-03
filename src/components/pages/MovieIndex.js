import React from 'react';
import {Link} from 'react-router-dom';

const MovieIndex = (props) => {
    return (
        <div>
            <h1>Movies index</h1>
            <Link to="/moviedetails">movie</Link>
        </div>
    );
}
export default MovieIndex;


