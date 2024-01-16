import React from 'react';
import './NewPost.css';
import {useState} from "react";
import { Link } from 'react-router-dom';
import calculateReadingTime from "../../helpers/calculateReadingTime.js";


function NewPost() {
    function handleSubmit (e) {
        e.preventDefault();
        console.log({
            ...formState,
            shares: 0,
            comments: 0,
            created: new Date().toISOString(),
            readTime: calculateReadingTime(formState.message),
        })
    }


    const [formState, setFormState] = useState({
        title: '',
        subtitle: '',
        author: '',
        message: '',
    });

    function handleChange(e) {
        const changedFieldName = e.target.name;

        setFormState({
            ...formState,
            [changedFieldName]: e.target.value,
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="Title">
                Titel:</label>
            <input
                type="text"
                id="form-title"
                name="title"
                value={formState.title}
                onChange={handleChange}/>
            <br/>
            <label htmlFor="Subtitle">
                Subtitel:</label>
            <input
                type="text"
                id="form-subtitle"
                name="subtitle"
                value={formState.subtitle}
                onChange={handleChange}/>
            <label htmlFor="Author">
                Auteur:</label>
            <input
                type="text"
                id="form-author"
                name="author"
                value={formState.author}
                onChange={handleChange}/>
            <label htmlFor="Message">
                Bericht:
            </label>
            <textarea
                name="message"
                id="message-field"
                rows="4" cols="40"
                minLength="300"
                maxLength="2000"
                value={formState.notes}
                onChange={handleChange}></textarea>

            <button type="submit">Posten</button>

        </form>
    )
    // Bouw een formulier met de volgende velden:
    //
    //     Titel
    // Subtitel
    // Auteur
    // Bericht
    // Alle velden moeten verplicht worden ingevuld. De blogpost moet minimaal 300 en maximaal 2000 karakters lang zijn.
    //     Als er niet aan deze voorwaarden is voldaan, kan de post niet worden verzonden.
}

export default NewPost