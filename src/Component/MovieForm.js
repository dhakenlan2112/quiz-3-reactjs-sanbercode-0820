import React, {useContext} from 'react'
import {MovieContext} from './MovieContext'
import axios from 'axios'

const MovieForm = () => {
    const [dataMovie, setDataMovie, inputDataMovie, setInputDataMovie] = useContext(MovieContext)

    const submitForm = (event) => {
        event.preventDefault()

        let title = inputDataMovie.title
        let description = inputDataMovie.description
        let year = inputDataMovie.year.toString()
        let duration = inputDataMovie.duration.toString()
        let genre = inputDataMovie.genre
        let rating = inputDataMovie.rating.toString()
        let image_url = inputDataMovie.image_url

        if (inputDataMovie.id === null) {
            axios.post(`http://backendexample.sanbercloud.com/api/movies`, {
                title,
                description,
                year,
                duration,
                genre,
                rating,
                image_url
            }).then(res => {
                setDataMovie([
                    ...dataMovie,{
                    id: res.data.id,
                    title,
                    description,
                    year,
                    duration,
                    genre,
                    rating,
                    image_url
                }])
            }) 
        } else {
            axios.put(`http://backendexample.sanbercloud.com/api/movies/${inputDataMovie.id}`, {
                title,
                description,
                year,
                duration,
                genre,
                rating,
                image_url
            }).then(() => {
                let idataMovie = dataMovie.find(el => el.id === inputDataMovie.id)
                idataMovie.title = title
                idataMovie.description = description
                idataMovie.year = year
                idataMovie.duration = duration
                idataMovie.genre = genre
                idataMovie.rating = rating
                idataMovie.image_url = image_url
                setDataMovie([...dataMovie])
            })
        }
        setInputDataMovie({
            title: "",
            description: "",
            year: 0,
            duration: 0,
            genre: "",
            rating: 0,
            image_url: "",
            id: null
        })
    }

    const changeInputTitle = (event) => {
        var value = event.target.value
        setInputDataMovie({...inputDataMovie, title: value})
    }
    const changeInputDescription = (event) => {
        var value = event.target.value
        setInputDataMovie({...inputDataMovie, description: value})
    }
    const changeInputYear = (event) => {
        var value = event.target.value
        setInputDataMovie({...inputDataMovie, year: value})
    }
    const changeInputDuration = (event) => {
        var value = event.target.value
        setInputDataMovie({...inputDataMovie, duration: value})
    }
    const changeInputGenre = (event) => {
        var value = event.target.value
        setInputDataMovie({...inputDataMovie, genre: value})
    }
    const changeInputRating = (event) => {
        var value = event.target.value
        setInputDataMovie({...inputDataMovie, rating: value})
    }

    const changeInputImage = (event) => {
        var value = event.target.value
        setInputDataMovie({...inputDataMovie, image_url: value})
    }

    return (
        <>
        <div className="container">
        <h1> Movie Form</h1>
        <form onSubmit={submitForm}>
            <div className="label">Title</div>
            <input type="text" value={inputDataMovie.title} onChange={changeInputTitle} /><br/>

            <div className="label">Description</div>
            <textarea type="textarea" value={inputDataMovie.description} onChange={changeInputDescription} /><br/>

            <div className="label">Year</div>
            <input type="number" value={inputDataMovie.year} onChange={changeInputYear} /><br/>

            <div className="label">Duration</div>
            <input type="number" value={inputDataMovie.duration} onChange={changeInputDuration} /><br/> 

            <div className="label">Genre</div>
            <input type="text" value={inputDataMovie.genre} onChange={changeInputGenre} /><br/>

            <div className="label">Rating</div>
            <input type="number" value={inputDataMovie.rating} onChange={changeInputRating} /><br/>

            <div className="label">Image Url</div>
            <input type="text" value={inputDataMovie.image_url} onChange={changeInputImage} /><br/>

            <button>Submit</button>
        </form>
        </div>
        </>
    )
}

export default MovieForm;