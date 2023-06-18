export const interviewquestions = [
    {
        id: 0,
        type: "multipleChoice",
        question: "What is JSX in React?",
        options: [
            "Java Syntax Extension",
            "JavaScript Extension",
            "JSX is not related to React",
            "JavaScript XML"
        ],
        correctAnswer: "JavaScript XML",
        explanation: "JSX stands for JavaScript XML. It is an extension to JavaScript syntax that allows you to write HTML-like code within your JavaScript code. JSX is primarily used in React, a popular JavaScript library for building user interfaces. With JSX, you can write components in a more declarative and intuitive way, combining JavaScript logic and HTML structure together. JSX code is transpiled into regular JavaScript code that can be understood and executed by browsers. It provides a convenient and efficient way to build dynamic and interactive UI components in React."
    },
    {
        "id": 1,
        "type": "multipleChoice",
        "question": "What is React?",
        "options": [
            "A database management system",
            "A JavaScript framework for building user interfaces",
            "A programming language",
            "A version control system"
        ],
        "correctAnswer": "A JavaScript framework for building user interfaces",
        "explanation": "React is a JavaScript library used for building user interfaces in web applications. It allows developers to create reusable UI components and efficiently update and render them based on data changes."
    },
    {
        "id": 2,
        "type": "multipleChoice",
        "question": "What is the purpose of the virtual DOM in React?",
        "options": [
            "To improve performance by reducing direct manipulation of the actual DOM",
            "To facilitate server-side rendering of React components",
            "To provide a simulation environment for testing React components",
            "To handle asynchronous data fetching in React applications"
        ],
        "correctAnswer": "To improve performance by reducing direct manipulation of the actual DOM",
        "explanation": "The virtual DOM in React is an abstraction of the actual DOM. React uses it to efficiently update and render components by minimizing direct manipulation of the real DOM, resulting in better performance and a smoother user experience."
    },
    {
        "id": 3,
        "type": "multipleChoice",
        "question": "What are React hooks?",
        "options": [
            "Special CSS classes used in React for styling",
            "Functions that enable routing in React applications",
            "Tools for managing state and side effects in functional components",
            "Libraries for handling form validation in React"
        ],
        "correctAnswer": "Tools for managing state and side effects in functional components",
        "explanation": "React hooks are functions that allow developers to manage state and side effects in functional components. They provide a way to use stateful logic in functional components, replacing the need for class components in many cases."
    },
    {
        "id": 4,
        "type": "multipleChoice",
        "question": "What is the purpose of the useState hook in React?",
        "options": [
            "To fetch data from an API",
            "To handle user input in forms",
            "To control component lifecycle events",
            "To manage and update component state"
        ],
        "correctAnswer": "To manage and update component state",
        "explanation": "The useState hook in React is used to add state to functional components. It allows you to declare and update state variables within a functional component, enabling the component to react to changes and re-render as necessary."
    },
    {
        "id": 5,
        "type": "multipleChoice",
        "question": "What is JSX in React?",
        "options": [
            "Java Syntax Extension",
            "JavaScript XML",
            "JavaScript Extension",
            "JSX is not related to React"
        ],
        "correctAnswer": "JavaScript XML",
        "explanation": "JSX stands for JavaScript XML. It is an extension to JavaScript syntax that allows you to write HTML-like code within your JavaScript code. JSX is primarily used in React to define the structure and appearance of components."
    },
    {
        "id": 6,
        "type": "multipleChoice",
        "question": "What is the purpose of the useEffect hook in React?",
        "options": [
            "To create reusable custom hooks",
            "To implement routing in React applications",
            "To handle form validation in React applications",
            "To handle side effects and perform cleanup in functional components"
        ],
        "correctAnswer": "To handle side effects and perform cleanup in functional components",
        "explanation": "The useEffect hook in React is used to handle side effects in functional components. Side effects may include data fetching, subscriptions, or manually changing the DOM. It allows you to perform certain actions after React has rendered and updated the DOM. Additionally, the useEffect hook can also be used to clean up resources and perform actions before the component is unmounted or updated."
    },
]