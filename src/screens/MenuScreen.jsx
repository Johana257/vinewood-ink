export default function MenuScreen({ onStart }) {
  return (
    <div className="screen">
      <h1>Vinewood Ink</h1>
      <p>You're the newest artist at the shop. Make it count.</p>
      <button onClick={onStart}>Start Shift</button>
    </div>
  );
}