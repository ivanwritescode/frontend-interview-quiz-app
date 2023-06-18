import { ChangeEvent, useState } from "react";

interface IQuestionProps {
  question: IQuestion
  onNextClicked: () => void
  onPrevClicked: () => void
}

const Question = ({ question, onNextClicked, onPrevClicked }: IQuestionProps) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  }

  const getAnswerItemClass = (isChecked: boolean) => {
    let className = "answer-item";
    return isChecked ? `${className} checked` : className;
  };

  return (
    <section className="question-section">
      <div className="question">
        <h2 className="question-num">Question {question.id + 1}</h2>
        <p className="question-text">{question.question}</p>
      </div>
      <div className="answer">
        {question.options.map((option, i) =>
          <label key={i} className={getAnswerItemClass(selectedOption === `option${i}`)}>
            <input
              type="radio"
              name={`option${i}`}
              value={`option${i}`}
              checked={selectedOption === `option${i}`}
              onChange={handleOptionChange}
              id={i.toString()} />
            <span>{option}</span>
          </label>
        )}
      </div>
      <div className="action">
        <button className="btn" onClick={onPrevClicked}>Prev</button>
        <button className="btn" onClick={onNextClicked}>Next</button>
      </div>
    </section>
  )
}

export default Question;
