import { useState, useRef } from 'react'
import RefVsState from './RefVsState'
import StopWatch from './StopWatch'
import WidthOfElement from './WidthOfElement'
import EffectExamples from './EffectExamples'

export default function App() {
  const [ showEffectExamples, setShowEffectExamples ] = useState(true);

  let effectExamples = null
  /*
  if (showEffectExamples) {
    effectExamples = <EffectExamples />
  }
  else {

  }
  */
  
  return (
   <>
    <RefVsState />
    <StopWatch />
    <WidthOfElement />
    <button onClick={() => setShowEffectExamples(!showEffectExamples) }></button>
    {/* showEffectExamples ? <EffectExamples /> : null*/ }
    { showEffectExamples && <EffectExamples /> }
   </>
    
  )
}


