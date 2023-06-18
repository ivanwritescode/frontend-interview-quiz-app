interface IActionsProp {
    onNext: () => void;
    onPrev: () => void;
}

const Actions = ({ onNext, onPrev }: IActionsProp) => {
    return (
        <div className="action">
            <button className="btn" onClick={onNext}>Prev</button>
            <button className="btn" onClick={onPrev}>Next</button>
        </div>
    )
}

export default Actions;
