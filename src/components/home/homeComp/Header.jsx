import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Header = () => {
  const [data, setData] = useState({
    name: 'TUDOU',
    time: new Date().toLocaleString(),
  });

  // 每秒修改时间参数
  const setTime = () => {
    let nowDate = new Date();
    setData((prevData) => {
      return {
        ...prevData,
        time: nowDate.toLocaleString(),
      };
    });
  };

  // 请求天气https://www.nowapi.com
  async function getWeather() {
    const res = await axios.get('https://sapi.k780.com', {
      params: {
        app: 'weather.realtime',
        weaid: '杭州',
        ag: 'today,futureDay,lifeIndex,futureHour',
        appkey: '53663',
        sign: 'de4a2a6565601374a46398b96166b354',
        format: 'json',
      },
    });
    return res;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTime();
    }, 1000);

    const weather = async () => {
      const weatherRes = await getWeather();
      console.log(weatherRes);
    };
    weather();
    return () => {
      clearInterval(timer);
    };
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
        <div className="page">首页</div>
        <div className="time">{data.time}</div>
      </div>
    </div>
  );
};

export default Header;
