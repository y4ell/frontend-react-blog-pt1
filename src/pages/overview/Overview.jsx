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
                    <h3><Link to={blogpost.title}>{blogpost.title}</Link> ({blogpost.author})</h3>
                    <p>{blogpost.comments} reacties - {blogpost.shares} keer gedeeld</p>

                </li>
            )})}
            </article>


    {/*// Deze pagina moet de totale hoeveelheid posts op het platform weergeven (een nummeriek getal) en een lijst van alle blogs. Deze geef je weer in het volgende format:*/}
    {/*//*/}
    {/*//De Smaken van Italië (Anna de Kok)*/}
    {/*// 12 reacties - 8 keer gedeeld*/}
    {/*// De titels zijn links die de gebruiker doorlinkt naar de detailpagina van deze post.*/}

</div>

    )

}

export default Overview