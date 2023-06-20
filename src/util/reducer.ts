import { initialState } from "./constants";
import { IState } from "./interfaces";
import { Action } from "./types";

export default function reducer(state: IState, action: Action): IState {
  let updatedState: IState = { ...state };

  switch (action.type) {
    case "update_current_question_id":
      updatedState = { ...state, questionId: action.payload };
      break;

    case "update_score":
      updatedState = { ...state, score: action.payload };
      break;

    case "update_user_answers":
      const isExistingAnswer = state.userAnswers.find(answer => answer.id === state.questionId);
      if (isExistingAnswer) {
        let updatedAnswer = state.userAnswers.map((answer) => {
          if (answer.id === state.questionId) {
            return {
              ...answer,
              userAnswer: action.payload,
            }
          }
          return answer;
        });
        updatedState = { ...state, userAnswers: updatedAnswer }
      } else {
        updatedState = {
          ...state, userAnswers: [
            ...state.userAnswers,
            {
              id: state.questionId,
              userAnswer: action.payload
            },
          ]
        }
      }
      break;

    case "update_is_done":
      updatedState = { ...state, isDone: action.payload }
      break;

    case "reset_state":
      return initialState;

    default:
      throw new Error('Unknown action type');
  }

  return updatedState;
}