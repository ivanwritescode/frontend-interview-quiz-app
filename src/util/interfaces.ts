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

interface IState {
    questionId: number;
    score: number;
    userAnswers: IUserAnswer[];
    isDone: boolean;
}

interface IUpdateQuestionIdAction {
    type: 'update_current_question_id';
    payload: number;
}

interface IScoreAction {
    type: 'update_score';
    payload: number;
}

interface IUserAnswersAction {
    type: 'update_user_answers';
    payload: string;
}

interface IIsDoneAction {
    type: 'update_is_done';
    payload: boolean;
}

interface IResetStateAction {
    type: 'reset_state';
}