import React, { useState } from "react";

export default () => {
  const [myState, setMyState] = useState();

  const handleClick = () => {
    if (myState !== null) setMyState(null);
    else setMyState("Funny");
  };
  return (
    <div>
      <p>myState: {myState === null ? "null" : myState}</p>
      <button onClick={handleClick}>çšćĺ</button>
    </div>
  );
};
