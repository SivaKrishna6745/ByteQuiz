import React, { useState } from 'react';

type FlashCardProps = {
    question: string;
    answer?: string;
    category?: string;
};

const FlashCard = ({ question, answer }: FlashCardProps) => {
    const [isFlipped, setIsFlipped] = useState<boolean>(false);
    const toggleFlip = () => {
        setIsFlipped(!isFlipped);
    };
    return (
        <li
            className={`flashcard mb-6  text-lg text-gray-900 p-4 rounded-lg hover:shadow-xl ${
                isFlipped ? 'flipped' : ''
            }`}
            onClick={toggleFlip}
        >
            <div className={`flashcard-front flex justify-center items-center`}>{question}</div>
            <div className={`flashcard-back flex justify-center items-center`}>{answer}</div>
        </li>
    );
};

export default FlashCard;
