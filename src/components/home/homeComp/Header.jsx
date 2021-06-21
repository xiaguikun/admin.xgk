import React, { useState, useEffect } from 'react';

const Header = () => {
  const [data, setData] = useState({
    name: 'TUDOU',
    time: '',
  });
  const setTime = () => {
    let nowDate = new Date();
    setData((prevData) => {
      return {
        ...prevData,
        time: nowDate.toLocaleString(),
      };
    });
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setTime();
    }, 1000);
    return clearInterval(timer);
  }, []);
  return (
    <div className="home-header">
      <div className="top-box">
        <div className="top">
          <span className="place-holder">欢迎 {data.name}</span>
          <span className="logout">退出</span>
        </div>
      </div>
      <div className="bottom-box">
        <div className="time">{data.time}</div>
      </div>
    </div>
  );
};

export default Header;
