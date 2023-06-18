import './App.css'
import Explanation from './components/Explanation'
import Question from './components/Question'
import QuestionsNavigation from './components/QuestionsNavigation'
import QuizTitle from './components/QuizTitle'

function App() {
  return (
    <main>
      <div className="container">
        <QuizTitle />
        <Question />
        <Explanation />
        <QuestionsNavigation />
      </div>
    </main>
  )
}

export default App
