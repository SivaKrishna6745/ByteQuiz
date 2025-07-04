export type QuizItem = {
    id: string;
    question: string;
    answer: string;
    category?: string;
};

export const quizData: QuizItem[] = [
    {
        id: 'q1',
        question: 'What hook is used for side effects in React?',
        answer: 'useEffect',
        category: 'Hooks',
    },
    {
        id: 'q2',
        question: 'How can you memoize a value in React?',
        answer: 'useMemo',
        category: 'Performance',
    },
    {
        id: 'q3',
        question: 'What is JSX?',
        answer: 'A syntax extension for JavaScript, used with React to describe UI elements.',
        category: 'Core Concepts',
    },
    {
        id: 'q4',
        question: 'What is a component in React?',
        answer: 'A reusable piece of the UI.',
        category: 'Core Concepts',
    },
    {
        id: 'q5',
        question: 'What are the types of components in React?',
        answer: 'Functional and Class components.',
        category: 'Core Concepts',
    },
    {
        id: 'q6',
        question: 'What is a state in React?',
        answer: 'An object that holds dynamic data within a component.',
        category: 'State Management',
    },
    {
        id: 'q7',
        question: 'What is the difference between state and props?',
        answer: 'State is managed within the component, props are passed to the component.',
        category: 'State Management',
    },
    {
        id: 'q8',
        question: 'How do you handle events in React?',
        answer: 'By passing an event handler function as a prop.',
        category: 'Core Concepts',
    },
    {
        id: 'q9',
        question: 'What is the virtual DOM?',
        answer: 'An in-memory representation of the real DOM.',
        category: 'Architecture',
    },
    {
        id: 'q10',
        question: 'Name a few commonly used hooks.',
        answer: 'useState, useEffect, useContext.',
        category: 'Hooks',
    },
];
