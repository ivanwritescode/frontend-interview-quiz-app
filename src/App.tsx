import { useEffect, useReducer } from 'react'
import './App.css'
import Explanation from './components/Explanation'
import Question from './components/Question'
import QuestionsNavigation from './components/QuestionsNavigation'
import QuizTitle from './components/QuizTitle'
import Result from './components/Question/Result'

import reducer from './util/reducer'
import { interviewquestions } from './util/questions'
import { initialState } from './util/constants'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // for debugging
  const log = () => {
    const currentQuestion = interviewquestions[state.questionId];
    console.table({
      "Selected Option": state.userAnswers[state.questionId]?.value,
      "Correct Answer": currentQuestion.correctAnswer,
      "Is Correct": getIsAnswerCorrect()
    });
  };

  const getIsQuestionAnswered = () => {
    return state
      .userAnswers
      .some(userAnswer =>
        userAnswer.id === state.questionId)
  };

  const getAnswerToCurrentQuestion = () => {
    return state
      .userAnswers
      .filter(answer =>
        answer.id === state.questionId)[0]
  };

  const getIsAnswerCorrect = () => {
    if (!getIsQuestionAnswered()) return;

    const currentCorrectAnswer = interviewquestions[state.questionId].correctAnswer;
    const currentUserAnswer = getAnswerToCurrentQuestion().value;
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
    if (getIsQuestionAnswered() && getIsAnswerCorrect())
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
              selectedAnswer={getAnswerToCurrentQuestion() || { id: 0, userAnswer: "" }}
              currentPosition={state.questionId}
              maxCount={interviewquestions.length}
              onNextClicked={onNextClicked}
              onPrevClicked={onPrevClicked}
              onFinishClicked={onFinishClicked}
              onAnswerSelected={onAnswerSelected} />
            <Explanation
              explanationText={interviewquestions[state.questionId].explanation}
              isShown={getIsQuestionAnswered()} />
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
