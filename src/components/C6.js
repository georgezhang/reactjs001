import React, { useEffect, useState } from "react";

export default () => {
  const [e1, setE1] = useState(0);
  const [e2, setE2] = useState(0);
  const [e3, setE3] = useState(0);

  useEffect(() => {
    console.log("1. after render ", e1);
  });

  useEffect(() => {
    console.log("2. after render ", e2);
    setE2(e2=>e2+1);
  }, []);

  useEffect(() => {
    console.log("3. after render ", e3);
  }, [e3]);

  const handleClick = () => {
    setE1((e1) => e1 + 1);
    if (e1%2===0) {
      setE3(e3=>e3+1)
    }
  };
  console.log("0. before render ", e1);
  return (
    <div>
      <p>e1: {e1}</p>
      <p>e2: {e2}</p>
      <p>e3: {e3}</p>
      <button onClick={handleClick}>点我嘛</button>
    </div>
  );
};
