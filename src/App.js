import './App.css';
import { useState } from 'react';

function App() {
  // Constants
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(0);

  // Functions
  function handleSubmit(e) {
    e.preventDefault();
    let bloodAlcoholLevel = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - (burning * time);

    if (gender === "male") {
      bloodAlcoholLevel = gramsLeft / (weight * 0.7);
    } else {
      bloodAlcoholLevel = gramsLeft / (weight * 0.6);
    }

    if (bloodAlcoholLevel < 0) {
      bloodAlcoholLevel = 0;
    }

    setResult(bloodAlcoholLevel);

  }

  // Printing the app
  return (
    <div className="container mt-5 mb-3">
      <h1>Alcometer</h1>
      <span className="text-muted">Calculating blood alcohol level</span>
      <div className="mt-3 mb-3">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Weight</label>
            <input className="form-control" type="number" name="weight" value={weight} onChange={e => setWeight(e.target.value)}></input>
            <div className="form-text">Your body weight in kilograms</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Bottles</label>
            <select className="form-select" name="bottles" value={bottles} onChange={e => setBottles(e.target.value)}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <div className="form-text">How many bottles (0.33 litres) you've consumed</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Time</label>
            <select className="form-select" name="time" value={time} onChange={e => setTime(e.target.value)}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <div className="form-text">How many hours it has been since your</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Gender</label>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gender" id="male" value="male" onChange={e => setGender(e.target.value)} defaultChecked></input>
              <label className="form-label" htmlFor="male">Male</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gender" id="female" value="female" onChange={e => setGender(e.target.value)}></input>
              <label className="form-label" htmlFor="female">Female</label>
            </div>
          </div>
          <button className="btn btn-secondary">Calculate</button>
        </form>
        <div className="alert mt-3">Your blood alcohol level is {result.toFixed(1)}</div>
      </div>
    </div>
  );
}

export default App;
