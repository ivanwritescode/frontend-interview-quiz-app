interface IQuestion {
    id: number;
    type: string;
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
}

interface IUserAnswer {
    id: number;
    userAnswer: string;
}