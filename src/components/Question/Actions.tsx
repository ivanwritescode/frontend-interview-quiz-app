interface IActionsProp {
    areAllQuestionsAnswered: boolean;
    currentPosition: number;
    maxCount: number;
    onNext: () => void;
    onPrev: () => void;
    onFinish: () => void;
}

const Actions = ({
    areAllQuestionsAnswered,
    currentPosition,
    maxCount,
    onNext,
    onPrev,
    onFinish,
}: IActionsProp) => {
    const getIsEndOfCollection = () =>
        currentPosition >= maxCount - 1;

    const getIsStartOfCollection = () =>
        currentPosition <= 0;

    const handleNextClicked = () => {
        if (currentPosition > maxCount - 1)
            return;
        onNext();
    };

    const handlePrevClicked = () => {
        if (currentPosition < 0)
            return;
        onPrev();
    };

    return (
        <div className="action">
            <button className="btn" onClick={handlePrevClicked} disabled={getIsStartOfCollection()}>Prev</button>
            {getIsEndOfCollection() || areAllQuestionsAnswered
                ? <button className="btn" onClick={onFinish} disabled={!areAllQuestionsAnswered}>Finish!</button>
                : <button className="btn" onClick={handleNextClicked}>Next</button>}
        </div>
    )
}

export default Actions;
