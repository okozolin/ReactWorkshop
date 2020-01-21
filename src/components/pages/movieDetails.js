import React from 'react';
import Navigation from "../shared/Navigation";
import ShowItem from "../shared/ShowItem";

const  MovieDetails = (props) => {
    console.log("inside MovieDetails", props)
    return (
        <div>
        <h1>Movie details</h1>
        <Navigation/>

        <ShowItem url={props.url} id={props.id}></ShowItem>
        </div>
    );
}
export default MovieDetails;


