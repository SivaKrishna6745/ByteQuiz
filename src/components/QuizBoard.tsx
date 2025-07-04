import React from 'react';
import { quizData } from '../data/quiz';
import FlashCard from './FlashCard';

const QuizBoard = () => {
    return (
        <ul>
            {quizData.map((quizItem) => (
                <FlashCard key={quizItem.id} question={quizItem.question} />
            ))}
        </ul>
    );
};

export default QuizBoard;
