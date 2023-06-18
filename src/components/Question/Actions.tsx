interface IActionsProp {
    currentPosition: number;
    maxCount: number;
    onNext: () => void;
    onPrev: () => void;
}

const Actions = ({
    currentPosition,
    maxCount,
    onNext,
    onPrev,
}: IActionsProp) => {
    const getIsNextDisabled = () =>
        currentPosition >= maxCount - 1;

    const getIsPrevDisabled = () =>
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
            <button className="btn" onClick={handlePrevClicked} disabled={getIsPrevDisabled()}>Prev</button>
            <button className="btn" onClick={handleNextClicked} disabled={getIsNextDisabled()}>Next</button>
        </div>
    )
}

export default Actions;
