import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Header = () => {
  const [data, setData] = useState({
    name: 'TUDOU',
    time: new Date().toLocaleString(),
  });
  const [weather, setWeather] = useState({
    area_1: '浙江',
    area_2: '杭州',
    today: {},
    ct: {},
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
      const { area_1, area_2, today } = weatherRes.data.result;
      setWeather({
        area_1,
        area_2,
        today,
        ct: today.lifeIndex.ct,
      });
      // console.log(weatherRes);
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
        <div className="weather">
          <div>
            {weather.area_1}-{weather.area_2}
          </div>
          {weather.today ? (
            <div>
              <span> 今日:{weather.today.wtNm1} </span>
              <span>
                {' '}
                气温:{weather.today.wtTemp2}-{weather.today.wtTemp1}{' '}
              </span>
              <span> 风力:{weather.today.wtWinpNm1} </span>
              <span> 穿衣:{weather.ct.liDese}</span>
            </div>
          ) : null}
        </div>
        <div className="time">{data.time}</div>
      </div>
    </div>
  );
};

export default Header;
