import { useState } from 'react'
import './App.css'
import ConquerFear from './ConquerFear'
import ExploreResources from './ExploreResources'
import FearsConquered from './FearsConquered'

function App() {
  
  return (
    <>
      <h1>LIMIT BREAK</h1>
      <div className="main-buttons">
        <div className="conquer-button">
          <ConquerFear />
        </div>

        <div className="explore-button">
          <ExploreResources />
        </div>

        <div className="conquered-button">
          <FearsConquered />
        </div>
        
      </div>
      
    </>
  )
}

export default App
