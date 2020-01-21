import React from 'react';

const  ShowItem = ({url, id}) => (
        // autoreturn to arrow function
        // destructerung the object es6 and taking only the movies
        <>
            <div>
                <img onClick={console.log(id)} src={url} alt=""/>
            </div>
        </>
    );
// const  ShowItem = (props) => {
//     const {url, id} = props
//     // console.log("insideShowitem id, url", id, url)
//
//     return (
//         <div>
//             <img onClick={console.log(id)} src={url}/>
//         </div>
//     );
// }
export default ShowItem;


