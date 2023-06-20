import { IUserAnswer } from "../../util/interfaces";

interface iQuestionsNavigationProps {
    currentQuestionNumber: number;
    numberOfQuestions: number;
    userAnswers: IUserAnswer[];
    onNavClick: (id: number) => void;
}

const QuestionsNavigation = ({
    currentQuestionNumber,
    numberOfQuestions,
    userAnswers,
    onNavClick
}: iQuestionsNavigationProps) => {
    const getIsAnswered = (id: number) =>
        userAnswers.some(answer => answer.id === id)

    const generateNavControlItems = (currentPosition: number, maxValue: number) => {
        const jsxElements = [];
        for (let i = 1; i <= maxValue; i++) {
            let className = "";
            if (getIsAnswered(i - 1))
                className = "done"
            else if (i === currentPosition)
                className = "active"

            jsxElements.push(<li key={`navcontrolitem-${i}`}><button onClick={() => { onNavClick(i - 1) }} className={className}>{i}</button></li>);
        }
        return jsxElements;
    };

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
