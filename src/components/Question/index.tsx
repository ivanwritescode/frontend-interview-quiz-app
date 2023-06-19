import Actions from "./Actions";
import QuestionDisplay from "./QuestionDisplay"
import Selections from "./Selections";

interface IQuestionProps {
  question: IQuestion;
  selectedAnswer: IUserAnswer;
  currentPosition: number;
  maxCount: number;
  onNextClicked: () => void;
  onPrevClicked: () => void;
  onFinishClicked: () => void;
  onAnswerSelected: (answerValue: string) => void;
}

const Question = ({
  question,
  selectedAnswer,
  currentPosition,
  maxCount,
  onNextClicked,
  onPrevClicked,
  onFinishClicked,
  onAnswerSelected,
}: IQuestionProps) => {
  return (
    <section className="question-section">
      <QuestionDisplay number={question.id + 1} content={question.question} />
      <Selections
        options={question.options}
        correctAnswer={question.correctAnswer}
        selectedAnswer={selectedAnswer}
        onAnswerSelected={onAnswerSelected} />
      <Actions
        currentPosition={currentPosition}
        maxCount={maxCount}
        onNext={onNextClicked}
        onPrev={onPrevClicked}
        onFinish={onFinishClicked} />
    </section>
  )
}

export default Question;
