import MovieCard from "../components/MovieCard"
import "../css/Home.css"
import { useState, useEffect } from "react"
import { searchMovies, getPopularMovies } from "../services/api";


function Home() {

    const [searchQuery, setSearchQuery] = useState(""); // will re-render component and update page
    const [movies, setMovies] = useState([]); // re-renders movie component
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // call a function when the array (i.e. a dependency) changes
    // empty array = call only once
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err);
                setError("failed to load movies")
            }
            finally {
                setLoading(false);
            }
        }

        loadPopularMovies()
    }, [])

    /*
    const movies = [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "Terminator", release_date: "1999"},
        {id: 3, title: "The Matrix", release_date: "1998"},
    ]
    */

    // const movies = getPopularMovies()
        // would work, but would be called everytime a user types a character into the search

    // handles search via API    
    const handleSearch = async (e) => {
        e.preventDefault() // makes sure the page doesnt refresh itself after submitting
        if(!searchQuery.trim()) { // .trim() removes white space from string
            return
        }
        if(loading) {
            return
        }
        setLoading(true);
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Failed to search movies...")
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text" 
                    placeholder="Search for movies..." 
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            
            {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className="loading">Loading...</div>) : (
                <div className="movies-grid">
                 {movies.map((movie) => 
                     (
                     // code below: conditionally render moviecard only if beginning of movie title begins with searchText
                     //movie.title.toLowerCase().startsWith(searchQuery) && (
                         <MovieCard movie={movie} key={movie.id} />
                     )
                 )}
                </div>
            )
            }
           
        </div>
    )
}

export default Home
/*  NOTES

Dynamic Rendering
    .map function goes through all movie values, and then passes it thru the arrow function
    then, it will return the creation of moviecards
    
    when using .map, you need to use a key so that React knows which items needs updates.

State
    Once something is updated, the component will change and re-render itself to show the new state.
    Ex inside of input: onChange={(e) => setSearchQuery(e.target.value)}
          we take whatever the user puts in for e, and then set the search query's state to it
          i.e. this updates user input

APIs

    Using tmdb, need to get an API key (which they have for free)
    create a new folder called services, and create file called api.js
    To use the API, you would need to import the API functions from api.js into the page/component

useEffect
    add side effects to functions/components and define when they should run
    helpful for when you want things to run once (ex: loading up a component)


handling a search via API
    do the async await function thing, and call the functions from api.js

Prop drilling
    taking state and pass it through props (a context)

Contexts
    allows state to be globally available to anything within the provided context
    helps us to know which movies are selected as favorites on home page AND favorites page
*/