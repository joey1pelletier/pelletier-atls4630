import { useRef, useState } from 'react'

export default function StopWatch() {
    const [ elapsedTime, setElapsedTime ] = useState(0);
    const intervalIdRef = useRef(null)
    const isRunningRef = useRef(false)

   // let intervalId = null

    function start() {
        if (isRunningRef.current) return
        intervalIdRef.current = setInterval(() => {
            setElapsedTime((et) => et + 1);
        }, 1)
        isRunningRef.current = true;
        console.log(intervalIdRef.current)
    }

    function stop() {
        
        clearInterval(intervalIdRef.current)
        isRunningRef.current = false;
    }
    return (
        <div>
            <span>Timer: {elapsedTime}</span>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
        </div>
    )
}