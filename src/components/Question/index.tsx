import Actions from "./Actions";
import QuestionDisplay from "./QuestionDisplay"
import Selections from "./Selections";

interface IQuestionProps {
  question: IQuestion
  selectedAnswer: string;
  onNextClicked: () => void;
  onPrevClicked: () => void;
  onAnswerSelected: (answerValue: string) => void;
}

const Question = ({ question, selectedAnswer, onNextClicked, onPrevClicked, onAnswerSelected }: IQuestionProps) => {
  return (
    <section className="question-section">
      <QuestionDisplay number={question.id + 1} content={question.question} />
      <Selections
        options={question.options}
        correctAnswer={question.correctAnswer}
        selectedAnswer={selectedAnswer}
        onAnswerSelected={onAnswerSelected} />
      <Actions onNext={onNextClicked} onPrev={onPrevClicked} />
    </section>
  )
}

export default Question;
