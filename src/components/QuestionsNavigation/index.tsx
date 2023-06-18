interface iQuestionsNavigationProps {
    currentQuestionNumber: number;
    numberOfQuestions: number;
}

// TODO: add a skip functionality
const generateNavControlItems = (currentPosition: number, maxValue: number) => {
    const jsxElements = [];
    for (let i = 1; i <= maxValue; i++) {
        let className = "";
        if (i < currentPosition)
            className = "done"
        else if (i === currentPosition)
            className = "active"

        jsxElements.push(<li key={`navcontrolitem-${i}`}><a className={className} href="#">{i}</a></li>);
    }
    return jsxElements;
};

const QuestionsNavigation = ({ currentQuestionNumber, numberOfQuestions }: iQuestionsNavigationProps) => {
    return (
        <section className="questions-nav-section">
            <p className="question-context">
                <a href="#"><span className="question-num">{`Question ${currentQuestionNumber}/${numberOfQuestions}`}</span></a>
                <a href="#"><span className="question-help">Need Help?</span></a>
            </p>
            <div className="d-flex">
                <ul className="question-nums-list">
                    {generateNavControlItems(currentQuestionNumber, numberOfQuestions)}
                </ul>
            </div>
        </section>
    )
}

export default QuestionsNavigation;
