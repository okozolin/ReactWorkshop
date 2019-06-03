import React from 'react';

const  ShowItem = ({movie}) => (
    // autoreturn to arrow function
    // destructerung the object es6 and taking only the movies
    <>
        <div>
            <img onClick={console.log(movie.id)} src={movie.url}/>
        </div>
        </>
    );
// const  ShowItem = (props) => {
//     const {movie} = props
//     return (
//         <div>
//             <img onClick={console.log(movie.id)} src={movie.url}/>
//         </div>
//     );
// }
export default ShowItem;


