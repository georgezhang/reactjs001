import React, { useState, useRef, } from "react";

export default () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(()=>{
        console.log(`I am a stall count: ${count}`);
        setCount(count+1);
      }, 1000);
    }
  };

  const endTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setCount(0);
  };

  return (
    <div>
      <h5>计数：{count}</h5>
      <button onClick={startTimer}>开始</button>
      <button onClick={endTimer}>停止</button>
    </div>
  );
};
