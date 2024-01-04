import React, { useState } from "react";
import './Form.modle.css'

const Form = () => {
    const [title, setTitle] = useState('')
    const [openingTitle, setOpeningTitle] = useState('')
    const [releaseDate, setReleseDate] = useState('')
    const [newMovie, setNewMovie] = useState([]);

    const titleHandler = (e) => {
        setTitle(e.target.value)
    }
    const titleHandleChange = (e) => {
        setOpeningTitle(e.target.value)
    }
    const dateHandler = (e) => {
        setReleseDate(e.target.value)
    }

    const handleAddMovie = (e) => {
        e.preventDefault();
        const newMovieObject = {
            name: title,
            openingTitle: openingTitle,
            date: releaseDate
        }
        setNewMovie((prevMovies) => [...prevMovies, newMovieObject]);
        console.log(newMovie);
        setTitle('')
        setOpeningTitle('')
        setReleseDate('')
    };
    return (
        <>
            <form>
                <label>
                    Title:
                    <input type="text" value={title} onChange={titleHandler} />
                </label><br />
                <label>
                    Opening Title:
                    <input type="text" value={openingTitle} onChange={titleHandleChange} />
                </label><br />
                <label>
                    Release Date:
                    <input type="date" value={releaseDate} onChange={dateHandler} />
                </label><br />
                <button onClick={handleAddMovie}>Add Movie</button>
            </form>
        </>
    )
}

export default Form;