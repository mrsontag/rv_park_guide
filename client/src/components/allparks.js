import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router';

const AllParks = props => {
    const [ parks, setParks ] = useState({});

    useEffect(() => {
        Axios.get("http://localhost:8000/api/parks/")
        .then(res => {
            console.log(res);
            setParks(res.data);
        })
        .catch(err => console.log(err));
    }, [])

    return(
        <div>
            <h2>LGBT RV Parks</h2>
            <ul>
                { parks.length > 0 && parks.map((park, index) => {
                    return (<li key={index}><Link to={"/park/" + park._id}>{park.name}: {park.zip_code} ( Spaces: {park.spaces.length }) </Link></li>)
                })}
            </ul>
        </div>
    )
}

export default AllParks;