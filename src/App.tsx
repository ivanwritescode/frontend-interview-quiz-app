import { useEffect, useState } from 'react'
import './App.css'
import Explanation from './components/Explanation'
import Question from './components/Question'
import QuestionsNavigation from './components/QuestionsNavigation'
import QuizTitle from './components/QuizTitle'
import { interviewquestions } from './util/questions'

function App() {
  const [questionId, setQuestionId] = useState(0);
  const [score, setScore] = useState(0);

  const onNextClicked = () => {
    if (questionId + 1 > interviewquestions.length - 1)
      return;
    setQuestionId((questionId: number) => questionId + 1)
  };

  const onPrevClicked = () => {
    if (questionId - 1 < 0)
      return;
    setQuestionId((questionId: number) => questionId - 1)
  };

  const onAnswerSelected = (isCorrect: boolean) => {
    if (isCorrect)
      setScore((prevScore) => prevScore + 1)
  };

  useEffect(() => {
    console.log("SCORE: ", score);
  }, [score]);

  return (
    <main>
      <div className="container">
        <QuizTitle title='React Interview Questions' />
        <Question
          question={interviewquestions[questionId]}
          onNextClicked={onNextClicked}
          onPrevClicked={onPrevClicked}
          onAnswerSelected={onAnswerSelected} />
        <Explanation explanationText={interviewquestions[questionId].explanation} />
        <QuestionsNavigation
          currentQuestionNumber={questionId + 1}
          numberOfQuestions={interviewquestions.length} />
      </div>
    </main>
  )
}

export default App
