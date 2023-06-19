interface IResultProp {
    score: number;
    numberOfQuestions: number;
    onTryAgainClicked: () => void;
}

const Result = ({ score, numberOfQuestions, onTryAgainClicked }: IResultProp) => {
    return (
        <div className="result-container">
            <p>You scored {score} out of {numberOfQuestions}</p>
            <button className="btn btn-primary" onClick={onTryAgainClicked}>try again!</button>
        </div>
    )
}

export default Result;
