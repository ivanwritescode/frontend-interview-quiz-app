interface IQuizTitleProps {
    title: string
}

const QuizTitle = ({ title }: IQuizTitleProps) =>
    <h1 className="quiz-title">{title}</h1>

export default QuizTitle;
