import React, { useState } from "react";

function Count() {
  const [timer, setTimer] = useState(0);

  const increment = () => {
    setTimer(timer + 1);
  };

  return (
    <>
      <div className="box">
        <h1>{timer}</h1>
        <button onClick={increment}>Increment</button>
      </div>
    </>
  );
}

export default Count;
