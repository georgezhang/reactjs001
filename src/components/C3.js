import React from "react";

function C3({value, handleClick, switcher = true }){
  return (<div>
    <p>{value}</p>
    <button onClick={()=>handleClick(value + 1)}>
      点击 {value}
      </button>
      <button onClick={()=>{}}>
      同步状态 - { switcher?"开了":"关了"}
      </button>
  </div>);
}

export default C3;