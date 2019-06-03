import React from 'react';
import Navigation from "../shared/Navigation";
import ShowItem from "../shared/ShowItem";

const  MovieDetails = (props) => {
    return (
        <div>
        <h1>Movie details</h1>
        <Navigation/>

        {/*<ShowItem url="https://via.placeholder.com/600/92c952" id={props.id}></ShowItem>*/}
        <ShowItem url={props.url} id={props.id}></ShowItem>
        </div>
    );
}
export default MovieDetails;


