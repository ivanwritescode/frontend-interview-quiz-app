interface IExplanationProps {
  explanationText: string;
  isShown: boolean;
}

const Explanation = ({ explanationText, isShown }: IExplanationProps) => {
  return (
    <section className={`explanation-section ${isShown ? "" : "hidden"}`}>
      <h2 className="section-title">Explanation</h2>
      <p className="explanation-text">{explanationText}</p>
    </section>
  )
}

export default Explanation;
