import React from 'react';
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom'
import blogposts from '../../constants/data.json';
import './Blogpost.css';
import formatDate from "../../helpers/formatDate.js";


function Blogpost() {
    const { postId } = useParams();
    const postInfo = blogposts.find((post) => {return post.id.toString() === postId});
    console.log(postInfo)
    document.title = "Blogpost " + postId;

    return (
        <>
            <h1>{postInfo.title} ({postInfo.readTime} minuten)</h1>
            <h2>{postInfo.subtitle}</h2>
            <cite>Geschreven door {postInfo.author} op {formatDate(postInfo.created)}</cite>
            <p>{postInfo.content}</p>
            <p>{postInfo.comments} reacties - {postInfo.shares} keer gedeeld</p>
            <p><Link to={`/posts`}>Terug naar de overzichtspagine</Link></p>
        </>
    )

}

export default Blogpost