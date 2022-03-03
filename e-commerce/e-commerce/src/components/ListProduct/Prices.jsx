import React from "react";

const Prices =({price})=>{
  
  return (
    <div className="Prices">
      <div className="Prices-title">
        <h3>Prices</h3>
      </div>
      <div className="Prices-range">
        <div > ≤ 1</div>
        <div> $1-80</div>
        <div> $80-160</div>
        <div> $160-240</div>
        <div>≥ $4,980</div>
      </div>
      <form >
        <label>
          <span />$
          <input type="number" />
        </label>
        <span />
        to
        <span />$
        <label>
          <input type="number" />
        </label>
        <button type="submit" className>
          Go
        </button>
      </form>
    </div>
  );
}

export default Prices;
