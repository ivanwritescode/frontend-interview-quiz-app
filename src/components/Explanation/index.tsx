interface IExplanationProps {
  text: string
}

const Explanation = ({ text }: IExplanationProps) => {
  return (
    <section className="explanation-section">
      <h2 className="section-title">Explanation</h2>
      <p className="explanation-text">{text}</p>
    </section>
  )
}

export default Explanation;
