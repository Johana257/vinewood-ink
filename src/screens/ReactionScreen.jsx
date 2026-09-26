export default function ReactionScreen({ result, onNext }) {
  return (
    <div className="screen">
      <h2>{result.client.name}</h2>
      <img src={result.image} alt="finished tattoo" className="result-thumb" />
      <p className="review">"{result.review}"</p>
      <p className="tip">Tip: ${result.tip}</p>
      <button onClick={onNext}>Continue</button>
    </div>
  );
}