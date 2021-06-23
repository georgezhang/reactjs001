import React, { memo } from "react";
export default memo(({ num }) => {
  console.log("render me now!");
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(i);
  }
  return (
    <div key={`k-${num}`}>
      {arr.map((x, ind) => (
        <i key={`inside-${ind}`}>{x + 1}</i>
      ))}
    </div>
  );
});
