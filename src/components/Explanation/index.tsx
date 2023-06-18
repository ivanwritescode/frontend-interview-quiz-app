interface IExplanationProps {
  explanationText: string
}

const Explanation = ({ explanationText }: IExplanationProps) => {
  return (
    <section className="explanation-section">
      <h2 className="section-title">Explanation</h2>
      <p className="explanation-text">{explanationText}</p>
    </section>
  )
}

export default Explanation;
