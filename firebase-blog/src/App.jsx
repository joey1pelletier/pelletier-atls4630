import { useState } from 'react'
import './App.css'
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import Login from './pages/Login'
import {signOut} from "firebase/auth"

import { auth } from './firebase-config'

function App() {
  const [isAuth, setIsAuth] = useState(false);
  

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = "/login"
    })
  }


  return (
    <>
       <nav>
          <Link to="/"> Home </Link>
          <Link to="/createpost"> Create Post </Link>
          {!isAuth ? (
            <Link to="/login"> Login </Link>
            
          )  :  ( 
            <>
            <button onClick={signUserOut}>Log Out</button>
            </>
          )}
        </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
      </Routes>
    </>
  )
}

export default App
