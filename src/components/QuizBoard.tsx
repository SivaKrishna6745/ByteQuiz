import React from 'react';
import { quizData } from '../data/quiz';
import FlashCard from './FlashCard';

const QuizBoard = () => {
    return (
        <ul className="bg-slate-200/5 backdrop-blur-sm p-8 rounded-lg shadow-lg columns-3 md:columns-2 sm:columns-1 gap-x-8">
            {quizData.map((quizItem) => (
                <FlashCard key={quizItem.id} question={quizItem.question} answer={quizItem.answer} />
            ))}
        </ul>
    );
};

export default QuizBoard;
