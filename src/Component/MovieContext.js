import React, {useState, createContext, useEffect} from 'react'
import axios from 'axios'

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [dataMovie, setDataMovie] = useState(null)
    
    useEffect(() => {
        if (dataMovie === null) {
            axios.get(`http://backendexample.sanbercloud.com/api/movies`)
            .then(res => {
                setDataMovie(res.data)
            })
        }
    }, [dataMovie]);

    const [inputDataMovie, setInputDataMovie] = useState({
        title: "",
        description: "",
        year: 2020,
        duration: 0,
        genre: "",
        rating: 0,
        image_url: "",
        id: null
    })

    return(
        <MovieContext.Provider value={[dataMovie, setDataMovie, inputDataMovie, setInputDataMovie]}>
            {props.children}
        </MovieContext.Provider>
    )

}