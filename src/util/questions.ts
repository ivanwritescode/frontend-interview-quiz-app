export const interviewquestions = {
    "questions": [
        {
            "id": 1,
            "type": "multipleChoice",
            "question": "What is JSX in React?",
            "options": [
                "JavaScript XML",
                "Java Syntax Extension",
                "JavaScript Extension",
                "JSX is not related to React"
            ],
            "correctAnswer": "JavaScript XML"
        },
        {
            "id": 2,
            "type": "fillInTheBlanks",
            "question": "React uses a virtual ____ to update the real DOM efficiently.",
            "correctAnswer": "DOM"
        },
        {
            "id": 3,
            "type": "trueFalse",
            "question": "React is a JavaScript framework.",
            "correctAnswer": true
        },
        {
            "id": 4,
            "type": "codeSnippet",
            "question": "Write a simple functional component in React.",
            "code": "function Greeting() {\n  return <h1>Hello, World!</h1>;\n}",
            "language": "javascript",
            "correctAnswer": "function Greeting() {\n  return <h1>Hello, World!</h1>;\n}"
        },
        {
            "id": 5,
            "type": "multipleChoice",
            "question": "Which lifecycle method is called after a component is rendered for the first time?",
            "options": [
                "componentDidMount",
                "componentDidUpdate",
                "componentWillMount",
                "componentWillUpdate"
            ],
            "correctAnswer": "componentDidMount"
        }
    ]
}