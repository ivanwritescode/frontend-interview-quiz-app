export interface IQuestion {
    id: number;
    type: string;
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
}

export interface IUserAnswer {
    id: number;
    value: string;
}

export interface IState {
    questionId: number;
    score: number;
    userAnswers: IUserAnswer[];
    isDone: boolean;
}

export interface IUpdateQuestionIdAction {
    type: 'update_current_question_id';
    payload: number;
}

export interface IScoreAction {
    type: 'update_score';
    payload: number;
}

export interface IUserAnswersAction {
    type: 'update_user_answers';
    payload: string;
}

export interface IIsDoneAction {
    type: 'update_is_done';
    payload: boolean;
}

export interface IResetStateAction {
    type: 'reset_state';
}