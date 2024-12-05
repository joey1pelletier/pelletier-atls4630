import { useState } from 'react';

export default function SepButton() {

    const [count, setCount] = useState(0);

    function buttonClick() {
        setCount(count + 1);
    }

    
    return (
        <>
        <button onClick={buttonClick}>Sep Button Counter: {count}</button>
        </>

    );
}