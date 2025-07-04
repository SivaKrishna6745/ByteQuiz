import React from 'react';

type FlashCardProps = {
    question: string;
    answer?: string;
    category?: string;
};

const FlashCard = ({ question }: FlashCardProps) => {
    return <li>{question}</li>;
};

export default FlashCard;
