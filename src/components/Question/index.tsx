const Question = () => {
    return (
        <section className="question-section">
          <div className="question">
            <h2 className="question-num">Question 11</h2>
            <p className="question-text">Which lifecycle method is called after a component is rendered for the first time?</p>
          </div>
          <div className="answer">
            <label className="answer-item">
              <input type="radio" name="option1" onChange={() => {}} id="" />
                <span>componentDidMount</span>
            </label>
            <label className="answer-item">
              <input type="radio" name="option2" onChange={() => {}} id="" />
                <span>componentDidUpdate</span>
            </label>
            <label className="answer-item">
              <input type="radio" name="option3" onChange={() => {}} id="" />
                <span>componentWillMount</span>
            </label>
            <label className="answer-item">
              <input type="radio" name="option4" onChange={() => {}} id="" />
                <span>componentWillUpdate</span>
            </label>
          </div>
          <div className="action">
            <button className="btn">Prev</button>
            <button className="btn">Next</button>
          </div>
        </section>
    )
}

export default Question;
