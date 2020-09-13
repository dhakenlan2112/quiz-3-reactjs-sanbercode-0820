import React, { useContext } from 'react'
import { MovieContext } from './MovieContext'
import axios from 'axios'

const Home = () => {
    const [dataMovie, setDataMovie, inputDataMovie, setInputDataMovie] = useContext(MovieContext)

    return (
        <>
        {
        dataMovie !== null && dataMovie.map((el, idx) => {
            return (
                <div>
                    <div className="movie">
                        <div className="title"><h1>{el.title}</h1></div>
                        <div className="info" >
                            <img className="image" src={`${el.image_url}`} />
                            <div>
                                <span>Rating: {el.rating}</span><br/>
                                <span>Duration: {el.duration}</span><br/>
                                <span>Genre: {el.genre}</span>
                            </div>
                        </div>
                        <div className="desc">
                            <p>{el.description}</p>
                        </div>
                    </div>
                </div>
            )
        })}
        </>
    )
}

export default Home;