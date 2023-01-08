import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function RainTankCalculator() {
  const [capacity, setCapacity] = useState(0);
  const [fillRate, setFillRate] = useState(0);
  const [fillTime, setFillTime] = useState(0);
  const [percentFull, setPercentFull] = useState(0);

  function calculatePercentFull() {
    setPercentFull((fillRate * fillTime) / capacity * 100);
  }

  function getFillStatus() {
    if (percentFull >= 100) {
      return 'alert-danger';
    } else if (percentFull >= 80) {
      return 'alert-warning';
    } else {
      return 'alert-success';
    }
  }

  return (
    <div className="container mt-5">
      <h1>Lietaus rezervuaro užpildymas</h1>
      <form>
        <div className="form-group">
          <label htmlFor="capacity">Rezervuaro talpa (l)</label>
          <input
            type="number"
            className="form-control"
            id="capacity"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="fillRate">Rezervuaro pildymo greititis (l/val.)</label>
          <input
            type="number"
            className="form-control"
            id="fillRate"
            value={fillRate}
            onChange={(e) => setFillRate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="fillTime">Laikas kiek rezervuaras bus pildomas (val.)</label>
          <input
            type="number"
            className="form-control"
            id="fillTime"
            value={fillTime}
            onChange={(e) => setFillTime(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={calculatePercentFull}
        >
          Skaičiuoti
        </button>
      </form>
      {percentFull > 0 && (
        <div
          className={`alert mt-3 ${getFillStatus()}`}
          role="alert"
        >
          {percentFull >= 100
            ? 'Talpa yra perpildyta!'
            : `Talpa yra ${percentFull.toFixed(2)}% pilna.`}
        </div>
      )}
    </div>
  );
}

export default RainTankCalculator;
