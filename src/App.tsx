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
  const [isExplanationShown, setIsExplanationShown] = useState(false);
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

  // might be temporary workaround to make states update immediately
  const cleanup = () => {
    setIsExplanationShown(false);
    setSelectedAnswer('');
  };

  const getIsAnswerCorrect = () => {
    const currentQuestion = interviewquestions[questionId];
    return currentQuestion.correctAnswer === selectedAnswer;
  };
  
  const onNextClicked = () => {
    setQuestionId((questionId: number) => questionId + 1);
    cleanup();
  };

  const onPrevClicked = () => {
    setQuestionId((questionId: number) => questionId - 1);
    cleanup();
  };

  const onAnswerSelected = (value: string) => {
    setSelectedAnswer(value);
  };

  useEffect(() => {
    if (getIsAnswerCorrect())
      setScore((prevScore) => prevScore + 1);
    setIsExplanationShown(true);
    log(); // log answer information everytime selected answer is updated
  }, [selectedAnswer]);

  useEffect(() => {
    console.log("SCORE: ", score); // log score everytime it changes
  }, [score]);
  
  useEffect(() => {
    cleanup();
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
        <Explanation
          explanationText={interviewquestions[questionId].explanation}
          isShown={isExplanationShown} />
        <QuestionsNavigation
          currentQuestionNumber={questionId + 1}
          numberOfQuestions={interviewquestions.length} />
      </div>
    </main>
  )
}

export default App
