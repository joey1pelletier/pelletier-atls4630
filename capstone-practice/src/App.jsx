import { useState } from 'react'
import './App.css'
import BreakLimitButton from './BreakLimitButton'
import StrengthKnowledgeButton from './StrengthKnowledgeButton'
import TrackJourneyButton from './TrackJourneyButton'

function App() {
  
  return (
    <>
      <h1>limit break</h1>
      <BreakLimitButton />
      <StrengthKnowledgeButton />
      <TrackJourneyButton />
    </>
  )
}

export default App
