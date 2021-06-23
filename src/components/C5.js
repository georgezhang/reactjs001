import React, { useState } from "react";

let renderCount = 0;

export default () => {
  renderCount = renderCount + 1;
  console.log('rendering');
  const [clickNum, setClickNum] = useState(0);
  const handleClick = () => {
    setClickNum(clickNum + 1);
  };
  return (
    <div>
      <p>你点了{clickNum}次, render了{renderCount}次。</p>
      <button onClick={handleClick}>点我嘛</button>
    </div>
  );
};
