import React, {useContext} from 'react'
import {MovieContext} from './MovieContext'
import axios from 'axios'

const MovieList = () => {
    const [dataMovie, setDataMovie, inputDataMovie, setInputDataMovie] = useContext(MovieContext)

    const editForm = (event) => {
        let idDataMovie = parseInt(event.target.value)
        let idataMovie = dataMovie.find(x=> x.id === idDataMovie)
        setInputDataMovie({
            title: idataMovie.title,
            description: idataMovie.description,
            year: idataMovie.year,
            duration: idataMovie.duration,
            genre: idataMovie.genre,
            rating: idataMovie.rating,
            image_url: idataMovie.image_url,
            id: idDataMovie.id
        })
    }

    const deleteMovie = (event) => {
        let idDataMovie = parseInt(event.target.value)
        let newDataMovie = dataMovie.filter(el => el.id !== idDataMovie)

        axios.delete(`http://backendexample.sanbercloud.com/api/movies/${idDataMovie}`)
        .then(res=> {
            console.log(res)
        })
        setDataMovie([...newDataMovie])
    }

    return(
        <>  
            <h1 style={{paddingTop: '80px'}} className='center'>Tabel Daftar List Movie</h1>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Year</th>
                    <th>Duration</th>
                    <th>Genre</th>
                    <th>Rating</th>
                    <th>Action</th>
                </tr>
                {
                    dataMovie !== null && dataMovie.map((el, idx) => {
                        return (
                            <tr key={el.id}>
                                <td>{idx + 1}</td>
                                <td>{el.title} </td>
                                <td>{el.description} </td>
                                <td>{el.year} </td>
                                <td>{el.duration} </td>
                                <td>{el.genre} </td>
                                <td>{el.rating} </td>
                                <td>
                                    <button value={el.id} onClick={editForm}>Edit</button>
                                    <button value={el.id} onClick={deleteMovie}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}

            </table>
        </>
    )   
}

export default MovieList;