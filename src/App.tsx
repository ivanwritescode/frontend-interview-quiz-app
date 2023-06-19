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
  const [userAnswers, setUserAnswers] = useState<IUserAnswer[]>([]);

  // for debugging
  const log = () => {
    const currentQuestion = interviewquestions[questionId];
    console.table({
      "Selected Option": userAnswers[questionId]?.userAnswer,
      "Correct Answer": currentQuestion.correctAnswer,
      "Is Correct": getIsAnswerCorrect()
    });
  };

  const getIsAnswerCorrect = () => {
    if (!userAnswers[questionId]) return;
    const currentCorrectAnswer = interviewquestions[questionId].correctAnswer;
    const currentUserAnswer = userAnswers[questionId].userAnswer;
    return currentCorrectAnswer === currentUserAnswer ;
  };

  const onNextClicked = () => {
    setQuestionId((questionId: number) => questionId + 1);
  };

  const onPrevClicked = () => {
    setQuestionId((questionId: number) => questionId - 1);
  };

  const onAnswerSelected = (value: string) => {
    updateAnswers(value);
  };

  const onNavClick = (questionId: number) => {
    setQuestionId(questionId);
  };

  const updateAnswers = (value: string) => {
    const existingAnswer = userAnswers.find(answer => answer.id === questionId);
    if (existingAnswer) {
      const updatedAnswer = userAnswers.map(answer => {
        if (answer.id === questionId) {
          return {
            ...answer,
            userAnswer: value,
          }
        }
        return answer;
      });
      setUserAnswers(updatedAnswer)
    } else {
      setUserAnswers((prevAnswers) => [
        ...prevAnswers,
        {
          id: questionId,
          userAnswer: value
        },
      ]);
    }
  };

  useEffect(() => {
    if (userAnswers[questionId] && getIsAnswerCorrect())
      setScore((prevScore) => prevScore + 1);
    log(); // log answer information everytime selected answer is updated
  }, [userAnswers]);

  useEffect(() => {
    console.log("SCORE: ", score); // log score everytime it changes
  }, [score]);

  return (
    <main>
      <div className="container">
        <QuizTitle title='React Interview Questions' />
        <Question
          question={interviewquestions[questionId]}
          selectedAnswer={userAnswers[questionId] || { id: 0, userAnswer: "" }}
          currentPosition={questionId}
          maxCount={interviewquestions.length}
          onNextClicked={onNextClicked}
          onPrevClicked={onPrevClicked}
          onAnswerSelected={onAnswerSelected} />
        <Explanation
          explanationText={interviewquestions[questionId].explanation}
          isShown={userAnswers.some(userAnswer => userAnswer.id === questionId)} />
        <QuestionsNavigation
          currentQuestionNumber={questionId + 1}
          numberOfQuestions={interviewquestions.length}
          onNavClick={onNavClick}
          />
      </div>
    </main>
  )
}

export default App
