import { useEffect, useState } from 'react'
import './App.css'
import Explanation from './components/Explanation'
import Question from './components/Question'
import QuestionsNavigation from './components/QuestionsNavigation'
import QuizTitle from './components/QuizTitle'
import { interviewquestions } from './util/questions'

function App() {
  const [questionId, setQuestionId] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);

  // for debugging
  const log = () => {
    const currentQuestion = interviewquestions[questionId];
    console.table({
      "Selected Option": selectedAnswer,
      "Correct Answer": currentQuestion.correctAnswer,
      "Is Correct":  getIsAnswerCorrect()
    });
  };

  const getIsAnswerCorrect = () => {
    const currentQuestion = interviewquestions[questionId];
    return currentQuestion.correctAnswer === selectedAnswer;
  };
  
  const onNextClicked = () => {
    setQuestionId((questionId: number) => questionId + 1)
  };

  const onPrevClicked = () => {
    setQuestionId((questionId: number) => questionId - 1)
  };

  const onAnswerSelected = (value: string) => {
    setSelectedAnswer(value);
  };

  useEffect(() => {
    if (getIsAnswerCorrect())
      setScore((prevScore) => prevScore + 1);
    log(); // log answer information everytime selected answer is updated
  }, [selectedAnswer]);

  useEffect(() => {
    console.log("SCORE: ", score); // log score everytime it changes
  }, [score]);
  
  useEffect(() => {
    setSelectedAnswer(''); // clear selected everytime the question changes
  }, [questionId])

  return (
    <main>
      <div className="container">
        <QuizTitle title='React Interview Questions' />
        <Question
          question={interviewquestions[questionId]}
          selectedAnswer={selectedAnswer}
          currentPosition={questionId}
          maxCount={interviewquestions.length}
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
