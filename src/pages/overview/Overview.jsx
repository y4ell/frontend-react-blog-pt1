import React from 'react';
import blogposts from './../../constants/data.json';
import { Link } from 'react-router-dom'
import './Overview.css';

function Overview() {
    return (
<div>
        <h2>Er zijn {blogposts.length} posts op het platform.</h2>
            <article>
                {blogposts.map((blogpost) => {
            return (
                <li key={blogpost.title}>
                    <h3><Link to={`/posts/${blogpost.id}`}>{blogpost.title}</Link> ({blogpost.author})</h3>
                    <p>{blogpost.comments} reacties - {blogpost.shares} keer gedeeld</p>
                </li>
            )})}
            </article>


</div>

    )

}

export default Overview