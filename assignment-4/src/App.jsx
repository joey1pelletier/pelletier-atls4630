import { useState } from 'react'

import Human from './Human'

import './App.css'
import HumanItems from './HumanItems'

export default function App() {
  
  return (
    <>
      <h1>Humans and their things!</h1>
      <Human name="Joey Pelletier" age="21" hobby="fencing"/>
      <h2>Click the button to see what items I have!</h2>
      <HumanItems item1="iPhone" item2="AirPods" />
      <Human name="Peter" age="50" hobby="being a family guy"/>
      <h2>Click the button to see what items I have!</h2>
      <HumanItems item1="beers from the clam" item2="white shirt and green pants" />
    </>
  )
}

