interface IQuestionProp {
    number: number;
    content: string;
}

const QuestionDisplay = ({ number, content }: IQuestionProp) => {
    return (
        <div className="question">
            <h2 className="question-num">Question {number}</h2>
            <p className="question-text">{content}</p>
        </div>
    )
}

export default QuestionDisplay;
