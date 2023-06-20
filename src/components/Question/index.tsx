import { IQuestion, IUserAnswer } from "../../util/interfaces";
import Actions from "./Actions";
import QuestionDisplay from "./QuestionDisplay"
import Selections from "./Selections";

interface IQuestionProps {
  question: IQuestion;
  selectedAnswer: IUserAnswer | null;
  currentPosition: number;
  areAllQuestionsAnswered: boolean;
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
  areAllQuestionsAnswered,
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
        areAllQuestionsAnswered={areAllQuestionsAnswered}
        currentPosition={currentPosition}
        maxCount={maxCount}
        onNext={onNextClicked}
        onPrev={onPrevClicked}
        onFinish={onFinishClicked} />
    </section>
  )
}

export default Question;
