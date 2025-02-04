import {createContext, useState, useContext, useEffect} from "react"

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

// will provide state to any components that are wrapped around it. Kind of similar to how BrowserRouter surrounds App in main.jsx
export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    // will get favorite
    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) {
            setFavorites(JSON.parse(storedFavs))
        }
    }, [])


    // stores favorite into favorites array and local storage
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) => {
        // gives us previous values, and then adds movie
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId) => {
        // sets favorite movies to all but the movie we want to remove
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        // .some() tells us if some things are true
        // checks all movie IDs on favorites to see if true, else, false
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites, addToFavorites, removeFromFavorites, isFavorite
    }

    // will access any values of above
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}

// Children is a reserved prop when you write a component and children is anything that's inside of the component you rendered

// we need to have the following operations for favorites for 
    // adding a favorite movie
    // removing a favorite movie
    // check if something is favorite

// then wrap movieContext around App.jsx