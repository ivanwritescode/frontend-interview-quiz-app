import {
    IIsDoneAction,
    IResetStateAction,
    IScoreAction,
    IUpdateQuestionIdAction,
    IUserAnswersAction
} from "./interfaces";

export type Action = IUpdateQuestionIdAction
    | IScoreAction
    | IUserAnswersAction
    | IIsDoneAction
    | IResetStateAction;