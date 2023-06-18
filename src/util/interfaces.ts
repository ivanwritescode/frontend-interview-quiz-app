interface IQuestion {
    id: number;
    type: string;
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
}