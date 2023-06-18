import { useState } from 'react'
import './App.css'
import Explanation from './components/Explanation'
import Question from './components/Question'
import QuestionsNavigation from './components/QuestionsNavigation'
import QuizTitle from './components/QuizTitle'
import { interviewquestions } from './util/questions'

function App() {
  const [questionId, setQuestionId] = useState(0);

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

  return (
    <main>
      <div className="container">
        <QuizTitle title='React Interview Questions' />
        <Question question={interviewquestions[questionId]} onNextClicked={onNextClicked} onPrevClicked={onPrevClicked} />
        <Explanation text={interviewquestions[questionId].explanation} />
        <QuestionsNavigation />
      </div>
    </main>
  )
}

export default App
