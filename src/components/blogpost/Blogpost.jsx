import React from 'react';
import {useParams} from 'react-router-dom';
import './Blogpost.css';


function Blogpost() {
    const { postId } = useParams()

    return (
        <h1>pagina van {postId} </h1>
    )

}

export default Blogpost