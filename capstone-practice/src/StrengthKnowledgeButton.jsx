import { useState } from 'react';

export default function StrengthKnowledgeButton() {

    const [buttonText, setButtonText] = useState('strengthen your knowledge');

    const buttonClick = () => {
        setButtonText('Strengthen Knowledge Button clicked');
    };

    
    return (
        <>
        <button onClick={buttonClick}>{buttonText}</button>
        </>

    );
}