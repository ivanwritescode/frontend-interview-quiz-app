import Option from "./Option";

interface IQuestionProps {
  question: IQuestion
  selectedAnswer: string;
  onNextClicked: () => void
  onPrevClicked: () => void
  onAnswerSelected: (answerValue: string) => void
}

const Question = ({ question, selectedAnswer, onNextClicked, onPrevClicked, onAnswerSelected }: IQuestionProps) => {
  const getIsCorrect = (optionValue: string) => {
    return question.correctAnswer === optionValue;
  };

  const getIsSelected = (optionValue: string) => {
    return optionValue === selectedAnswer;
  };

  const handleNextClicked = () => {
    onNextClicked();
  }

  const handlePrevClicked = () => {
    onPrevClicked();
  }

  const getAnswerItemClass = (optionName: string) => {
    const className = "answer-item";
    const isSelected = getIsSelected(optionName)
    const isCorrect = getIsCorrect(optionName)
    if (isSelected && isCorrect)
      return `${className} correct`
    else if (isSelected && !isCorrect)
      return `${className} wrong`
    return className;
  };

  return (
    <section className="question-section">
      <div className="question">
        <h2 className="question-num">Question {question.id + 1}</h2>
        <p className="question-text">{question.question}</p>
      </div>
      <div className="answer">
        {question.options.map((option, i) =>
          <Option
            key={i}
            id={i.toString()}
            className={getAnswerItemClass(option)}
            value={option}
            isSelected={getIsSelected(option)}
            onChange={onAnswerSelected} />
        )}
      </div>
      <div className="action">
        <button className="btn" onClick={handlePrevClicked}>Prev</button>
        <button className="btn" onClick={handleNextClicked}>Next</button>
      </div>
    </section>
  )
}

export default Question;
