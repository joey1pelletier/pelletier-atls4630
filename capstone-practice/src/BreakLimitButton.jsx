import { useState } from 'react';

export default function BreakLimitButton() {

    const [buttonText, setButtonText] = useState('break your limits');

    const buttonClick = () => {
        setButtonText('Break Limit Button clicked');
    };

    
    return (
        <>
        <button onClick={buttonClick}>{buttonText}</button>
        </>

    );
}