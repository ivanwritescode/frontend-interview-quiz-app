interface IQuestionProps {
  question: IQuestion
  onNextClicked: () => void
  onPrevClicked: () => void
}

const Question = ({ question, onNextClicked, onPrevClicked }: IQuestionProps) => {
  return (
    <section className="question-section">
      <div className="question">
        <h2 className="question-num">Question {question.id + 1}</h2>
        <p className="question-text">{question.question}</p>
      </div>
      <div className="answer">
        {question.options.map((option, i) =>
          <label key={i} className="answer-item">
            <input type="radio" name={`option${i}`} onChange={() => { }} id={i.toString()} />
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
