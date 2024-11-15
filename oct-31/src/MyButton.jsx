import { useState } from 'react';
import './index.css';
export default function MyButton({isSpecial, text}) {
    const className = isSpecial ? 
        'my-special-button' :
        'my-button'

    const [count, setCount] = useState(0);
    const [expanded, setExpanded] = useState(false);

    const stateArray = useState(0);
    const count1 = stateArray[0];
    const setCount1 = stateArray[1];

    function handleButtonClicked() {
        console.log(`${className} clicked`);
        setCount(count + 1);
        // NO: count = count + 1
    }

    return (
        <button
            className={className} 
            onClick={handleButtonClicked}
        >
            {text}, count: {count}
        </button>
    );
}