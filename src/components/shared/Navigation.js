import React from 'react';
import {Link} from 'react-router-dom';


const Navigation = () => {
    return (
        <div>
            <ul>
                <li><Link to="/movieIndex">movie index</Link></li>
                <li><Link to="/moviedetails">movie details</Link></li>
                <li><Link to="/favorites">favorites</Link></li>
            </ul>
        </div>
    );
}
export default Navigation;

