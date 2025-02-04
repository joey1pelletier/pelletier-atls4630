import { useState } from 'react';

export default function ConquerFear() {

    const [buttonText, setButtonText] = useState('CONQUER YOUR FEARS');

    const buttonClick = () => {
        setButtonText('Break Limit Button clicked');
    };

    
    return (
        <>
        <button onClick={buttonClick}>{buttonText}</button>
        </>

    );
}