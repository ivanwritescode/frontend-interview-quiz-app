import { ChangeEvent } from "react";

interface IOptionProps {
    id: string;
    className: string;
    value: string;
    isSelected: boolean;
    onChange: (option: string) => void;
}

const Option = ({id, className, value, isSelected, onChange}: IOptionProps) => {
  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    const optionValue = event.target.value;
    onChange(optionValue);
  }

    return (
        <label className={className}>
            <input
                type="radio"
                name={`option-${id}`}
                value={value}
                checked={isSelected}
                onChange={handleOptionChange}
                id={id} />
            <span>{value}</span>
        </label>
    )
}

export default Option;
