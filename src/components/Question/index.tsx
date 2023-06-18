import { ChangeEvent, useEffect, useState } from "react";

interface IQuestionProps {
  question: IQuestion
  onNextClicked: () => void
  onPrevClicked: () => void
  onAnswerSelected: (isCorrect: boolean) => void
}

const Question = ({ question, onNextClicked, onPrevClicked, onAnswerSelected }: IQuestionProps) => {
  const [selectedOption, setSelectedOption] = useState('');

  const getIsCorrect = (optionValue: string) => {
    return question.correctAnswer === optionValue;
  };

  const getIsSelected = (optionValue: string) => {
    return optionValue === selectedOption;
  };

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    const optionValue = event.target.value;
    setSelectedOption(optionValue);
  }

  const handleNextClicked = () => {
    setSelectedOption('');
    onNextClicked();
  }

  const handlePrevClicked = () => {
    setSelectedOption('');
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

  useEffect(() => {
    onAnswerSelected(getIsCorrect(selectedOption));

    // for debugging
    console.table({
      "Selected Option": selectedOption,
      "Correct Answer": question.correctAnswer,
      "Is Correct": getIsCorrect(selectedOption)
    })
  }, [selectedOption]);

  return (
    <section className="question-section">
      <div className="question">
        <h2 className="question-num">Question {question.id + 1}</h2>
        <p className="question-text">{question.question}</p>
      </div>
      <div className="answer">
        {question.options.map((option, i) =>
          <label key={i} className={getAnswerItemClass(option)}>
            <input
              type="radio"
              name={`option${i}`}
              value={option}
              checked={getIsSelected(option)}
              onChange={handleOptionChange}
              id={i.toString()} />
            <span>{option}</span>
          </label>
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
