import { useState } from 'react'

import './css/App.css'
import MovieCard from './components/MovieCard'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import {Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar'
import { MovieProvider } from './contexts/MovieContext'

function App() {
    return (
       /* <>
            <Home />
        </>
        */
        <MovieProvider>
            <NavBar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/favorites" element={<Favorites />}/>
                </Routes>
            </main>
        </MovieProvider>
        
    );
}



export default App

/*  NOTES

Conditional Rendering
    Can have js variables and things above return statement

    regular if statement: {movieNumber === 1 && <MovieCard movie={{title: "Joey's Film", release_date: "2024"}}/>}
        this says, if movieNumber is equal to 1, display this movie

    if/else statement: 
        {movieNumber === 1 ? (
                // First set of braces = declaring variable, 2nd set of yellow braces = object to pass
                <MovieCard movie={{title: "Joey's Film", release_date: "2024"}}/>  
           ) : (
                <MovieCard movie={{title: "Joe's Film", release_date: "2022"}}/>
        )}

        if movieNumber is 1, display Joey's film, else, display joe's film

*/