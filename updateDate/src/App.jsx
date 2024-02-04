import React, {useState} from "react";
import {CiSquareMinus, CiSquarePlus} from "react-icons/ci";
import "./App.css";

function App() {
  const [stepNumber, setStepNumber] = useState(1);
  const [countNumber, setCountNumber] = useState(0);
  const todayisDate = new Date();
  todayisDate.setDate(todayisDate.getDate() + countNumber);

  const handleStepMinus = (e) => {
    e.preventDefault();
    setStepNumber((c) => c - 1);
  };

  const handleStepPlus = (e) => {
    e.preventDefault();
    setStepNumber((c) => c + 1);
  };

  const handleCountPlus = (e) => {
    e.preventDefault();
    setCountNumber((c) => c + stepNumber);
  };

  const handleCountMinus = (e) => {
    e.preventDefault();
    setCountNumber((c) => c - stepNumber);
  };

  return (
    <div>
      <div className="stepDiv">
        <CiSquareMinus
          onClick={handleStepMinus}
          className="stepButton"
        />
        <span>Step: {stepNumber}</span>
        <CiSquarePlus
          onClick={handleStepPlus}
          className="stepButton"
        />
      </div>
      <div className="countDiv">
        <CiSquareMinus
          onClick={handleCountMinus}
          className="countButton"
        />
        <span>Count: {countNumber}</span>
        <CiSquarePlus
          onClick={handleCountPlus}
          className="countButton"
        />
      </div>
      <p className="dateDiv">
        <span>
          {countNumber === 0
            ? "Today is "
            : countNumber > 0
            ? `${countNumber} days from today is `
            : `${Math.abs(countNumber)} days ago was `}
        </span>
        <span>{todayisDate.toDateString()}</span>
      </p>
    </div>
  );
}

export default App;
