interface IOptionProp {
    options: string[];
    correctAnswer: string;
    selectedAnswer: IUserAnswer;
    onAnswerSelected: (answer: string) => void;
}

import Option from "./Option";

const Selections = ({ options, correctAnswer, selectedAnswer, onAnswerSelected }: IOptionProp) => {
    const getAnswerItemClass = (optionName: string) => {
        const className = "answer-item";
        const isSelected = getIsSelected(optionName)
        const isCorrect = getIsCorrect(optionName)
        if (isSelected && isCorrect)
            return `${className} correct`
        else if (isSelected && !isCorrect)
            return `${className} wrong`
        return className;
    };

    const getIsSelected = (optionValue: string) => {
        return optionValue === selectedAnswer.userAnswer;
    };

    const getIsCorrect = (optionValue: string) => {
        return correctAnswer === optionValue;
    };

    return (
        <div className="answer">
            {options.map((option, i) =>
                <Option
                    key={i}
                    id={i.toString()}
                    className={getAnswerItemClass(option)}
                    value={option}
                    isSelected={getIsSelected(option)}
                    isDisabled={selectedAnswer.userAnswer !== ""}
                    onChange={onAnswerSelected} />
            )}
        </div>
    )
}

export default Selections;
