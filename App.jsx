import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [result, setResult] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) {
      alert("Please enter height and weight");
      return;
    }

    // Convert feet to meters
    const heightInMeters = height * 0.3048;

    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setResult("Underweight");
    } else if (bmiValue < 24.9) {
      setResult("Normal");
    } else if (bmiValue < 29.9) {
      setResult("Overweight");
    } else {
      setResult("Obese");
    }
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>

      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <input
        type="number"
        placeholder="Height (feet)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <button onClick={calculateBMI}>Calculate BMI</button>

      {bmi && (
        <div className="result">
          <h2>BMI: {bmi}</h2>
          <h3 className={result.toLowerCase()}>
              Status: {result}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
