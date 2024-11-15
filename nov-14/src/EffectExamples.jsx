import { useEffect, useState } from 'react'

export default function EffectExamples() {
    const [ counter1, setCounter1 ] = useState(0);
    const [ counter2, setCounter2 ] = useState(0);
    
    const [text, setText] = useState('')

    useEffect(() => {
        function setDebouncedText() {
            //setSearchText(text)
        }

        const timeoutId = setTimeout(setDebouncedText, 250)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [ text ] )

    useEffect(() => {
        console.log('this is my effect');

        return () => {
            console.log('this is my unmount effect');
        }
    }, [ counter1 ])

    return (
        <>
        <button onClick={() => setCounter1(c => c + 1)}>Counter 1: </button>

        <input type="text" value={text} onChange={e => setText(e.value)} />
        </>
    )
}