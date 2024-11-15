import { useState } from 'react';

export default function TrackJourneyButton() {

    const [buttonText, setButtonText] = useState('track your journey');

    const buttonClick = () => {
        setButtonText('Track Your Journey Button clicked');
    };

    
    return (
        <>
        <button onClick={buttonClick}>{buttonText}</button>
        </>

    );
}