import { useState } from 'react';
import MyButton from './MyButton'

export default function SharedDataButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <MyButton count={count} onClick={handleClick} />
        </div>
    );
}