import React, { useState, useEffect } from "react";

const fakeAPI = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("good job");
    }, 5000); // 5 seconds
  });
};

export default () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getSomeData = async () => {
      const response = await fakeAPI();
      console.log("response:", response);
      setIsLoading(false);
    };
    getSomeData();
  }, []);

  return (
    <div className={isLoading ? "bgred" : "bggreen"} >
      {isLoading ? "正在下载" : "下载完毕！"}
    </div>
  );
};
