import { useEffect, useReducer } from 'react'
import './App.css'
import Explanation from './components/Explanation'
import Question from './components/Question'
import QuestionsNavigation from './components/QuestionsNavigation'
import QuizTitle from './components/QuizTitle'
import { interviewquestions } from './util/questions'
import Result from './components/Question/Result'

const initialState: IState = {
  questionId: 0,
  score: 0,
  userAnswers: [],
  isDone: false,
}

function reducer(state: IState, action: Action): IState {
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

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // for debugging
  const log = () => {
    const currentQuestion = interviewquestions[state.questionId];
    console.table({
      "Selected Option": state.userAnswers[state.questionId]?.userAnswer,
      "Correct Answer": currentQuestion.correctAnswer,
      "Is Correct": getIsAnswerCorrect()
    });
  };

  const getIsAnswerCorrect = () => {
    if (!state.userAnswers[state.questionId]) return;
    const currentCorrectAnswer = interviewquestions[state.questionId].correctAnswer;
    const currentUserAnswer = state.userAnswers[state.questionId].userAnswer;
    return currentCorrectAnswer === currentUserAnswer;
  };

  const onNextClicked = () => {
    dispatch({ type: "update_current_question_id", payload: state.questionId + 1 })
  };

  const onPrevClicked = () => {
    dispatch({ type: "update_current_question_id", payload: state.questionId - 1 })
  };

  const onFinishClicked = () => {
    dispatch({ type: "update_is_done", payload: true })
  };

  const onAnswerSelected = (value: string) => {
    dispatch({ type: "update_user_answers", payload: value })
  };

  const onNavClick = (questionId: number) => {
    dispatch({ type: "update_current_question_id", payload: questionId })
  };

  const onTryAgainClicked = () => {
    dispatch({ type: "reset_state" })
  };

  useEffect(() => {
    if (state.userAnswers[state.questionId] && getIsAnswerCorrect())
      dispatch({ type: "update_score", payload: state.score + 1 })
    log(); // log answer information everytime selected answer is updated
  }, [state.userAnswers]);

  useEffect(() => {
    console.log("SCORE: ", state.score); // log score everytime it changes
  }, [state.score]);

  return (
    <main>
      <div className="container">
        {!state.isDone
          ? <div className="grid-container">
            <QuizTitle title='React Interview Questions' />
            <Question
              question={interviewquestions[state.questionId]}
              selectedAnswer={state.userAnswers.filter((answer) => answer.id === state.questionId)[0] || { id: 0, userAnswer: "" }}
              currentPosition={state.questionId}
              maxCount={interviewquestions.length}
              onNextClicked={onNextClicked}
              onPrevClicked={onPrevClicked}
              onFinishClicked={onFinishClicked}
              onAnswerSelected={onAnswerSelected} />
            <Explanation
              explanationText={interviewquestions[state.questionId].explanation}
              isShown={state.userAnswers.some(userAnswer => userAnswer.id === state.questionId)} />
            <QuestionsNavigation
              currentQuestionNumber={state.questionId + 1}
              numberOfQuestions={interviewquestions.length}
              userAnswers={state.userAnswers}
              onNavClick={onNavClick} />
          </div>
          : <Result
            score={state.score}
            numberOfQuestions={interviewquestions.length}
            onTryAgainClicked={onTryAgainClicked} />}
      </div>
    </main>
  )
}

export default App
