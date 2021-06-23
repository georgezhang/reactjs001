import React, { useState, useRef, useMemo } from "react";
import MeMo from './c4.memo';

const loadBigData = (maxNum) => {
  let arr = [];
  for (let i = 0; i < maxNum; i++) {
    arr.push(i);
  }
  return arr;
};

export default () => {
  const arrRef = useRef([]);
  const [num, setNum] = useState(1);
  const loadLocal = () => {
    arrRef.current.push(loadBigData(num + 1));
    setNum(num + 1);
  };


//console.log('num=',num, 'arr=', arrRef.current)
  return (
    <div className="textWrap">
      <button onClick={loadLocal}>下载大量数据</button>
      <hr />
      {arrRef.current.map((rowArray, indRow) => (
        <b key={`indRow-${indRow}`}>
          {rowArray.map((col, indCol) => (
            <div key={indCol} >
              <MeMo num={col} />
            </div>
          ))}
        </b>
      ))}
    </div>
  );
};
