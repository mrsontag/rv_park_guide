import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const ViewPark = props => {
    const [ park, setPark ] = useState({});

    useEffect(() => {
        Axios.get("http://localhost:8000/api/parks/" + props.id)
        .then(res => {
            console.log(res);
            setPark(res.data);
        })
        .catch(err => console.log(err));
    }, [])

    return(
        <div>
            <h2>Park information for: { park.name }</h2>
            Zip Code: { park.zip_code }
            <h3>Spaces:</h3>
            <ul>
                { typeof(park.spaces) !== "undefined" && park.spaces.map((space, index) => {
                    return (<li key={index}>{space.space_number}: {space.rv_allowed ? "RVs permitted (" + space.rv_maxlength + ")" : "No RVs"} </li>)
                })}
            </ul>
        </div>
    )
}

export default ViewPark;