import './App.css'

function App() {
  return (
    <main>
      <div className="container">
        <h1 className="quiz-title">Quiz Title</h1>
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
        <section className="explanation-section">
          <h2 className="section-title">Explanation</h2>
          <p className="explanation-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
        <section className="questions-nav-section">
          <p className="question-context">
            <a href="#"><span className="question-num">Question 11/20</span></a>
            <a href="#"><span className="question-help">Need Help?</span></a>
          </p>
          <div className="d-flex">
            <ul className="question-nums-list">
              <li><a className="done" href="#">1</a></li>
              <li><a className="done" href="#">2</a></li>
              <li><a className="done" href="#">3</a></li>
              <li><a className="done" href="#">4</a></li>
              <li><a className="done" href="#">5</a></li>
              <li><a className="done" href="#">6</a></li>
              <li><a className="done" href="#">7</a></li>
              <li><a className="done" href="#">8</a></li>
              <li><a className="done" href="#">9</a></li>
              <li><a className="done" href="#">10</a></li>
              <li><a className="active" href="#">11</a></li>
              <li><a href="#">12</a></li>
              <li><a href="#">13</a></li>
              <li><a href="#">14</a></li>
              <li><a href="#">15</a></li>
              <li><a href="#">16</a></li>
              <li><a href="#">17</a></li>
              <li><a href="#">18</a></li>
              <li><a href="#">19</a></li>
              <li><a href="#">20</a></li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
