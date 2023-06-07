import React, {useEffect, useState} from "react";
import {
    TiWeatherSunny,
    TiWeatherStormy,
    TiWeatherShower,
    TiWeatherDownpour,
    TiWeatherSnow,
    TiWeatherCloudy,
} from "react-icons/ti";
import { BsCloudFog } from "react-icons/bs";

const api = {
    key: "618ef1dc65c88dfbb6baf6c9ab64b514",
    base: "https://api.openweathermap.org/data/2.5/",
};

function WeatherAPI({ }) {

    const [weather, setWeather] = useState(null);  // 날씨 상태 관리 useState, 현재 위치의 날씨 출력

    // 현재 위치 가져오기
    const getCurrentLocation = () =>{
        navigator.geolocation.getCurrentPosition((position)=>{
            let lat = position.coords.latitude;  // 경도
            let lon = position.coords.longitude;  // 위도
            console.log("현재 위치는?", lat, lon);
            getWeatherByCurrentLocation(lat, lon);
        });
    };

    const [weatherIcon, setWeatherIcon] = useState('');
    const [weatherName, setWeatherName] = useState('');

    // 현재 위치 날씨 API 가져오기
    const getWeatherByCurrentLocation = async (lat,lon) =>{
        let url = `${api.base}weather?lat=${lat}&lon=${lon}&appid=${api.key}&units=metric&lang={kr}`;
        // &units=metric: 섭씨온도 사용, url 주소에 붙여줌(기본 단위는 화씨)
        let response = await fetch(url);  // url에 데이터를 가져올 때까지 기다림
        let data = await response.json();
        const weatherData = data.weather[0];
        const iconCode = weatherData.icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        setWeatherIcon(iconUrl);
        setWeather(data);
        setWeatherName(weatherData);
        console.log("현재날씨는?", data);
    };

    useEffect(() => {
        getCurrentLocation();
    }, []);

    // 오늘 날짜 출력
    const todayData =() => {
        let days = ["SUN", "MON", "TUE", "WED", "TUR", "FRI", "SAT"];
        let now = new Date();
        let year = now.getFullYear();
        let todayMonth = (now.getMonth()+1) > 9 ? (now.getMonth()+1) : (now.getMonth()+1);
        let todayDate = now.getDate() > 9 ? now.getDate() : '0' + now.getDate();
        let dayOfWeek = days[now.getDay()];

        return  todayMonth + '/' + todayDate +'/' + year + ' ' + dayOfWeek
    }

    // 날씨에 적합한 아이콘 적용
    const selectIcon = () => {
        let iconId = weather.icons === 800 ? 0 : (weather.id / 100).toFixed(0);

        switch (iconId) {
            case 0:
                return <TiWeatherSunny size="6rem" color="red" /> ;
            case 2:
                return <TiWeatherStormy size="6rem" color="black" />;
            case 3:
                return <TiWeatherShower size="6rem" color="blue" />;
            case 5:
                return <TiWeatherDownpour size="6rem" color="navy" />;
            case 6:
                return <TiWeatherSnow size="6rem" color="white" />;
            case 7:
                return <BsCloudFog size="6rem" color="white" />;
            case 8:
                return <TiWeatherCloudy size="6rem" color="white" />;

        }
    };

    // 날씨에 적합한 기상 조건 출력
    const getWeatherStatus = () => {
        if (weatherName) {
            const weatherId = weatherName.id === 800 ? 0 : (weather.id / 100).toFixed(0);
            switch (weatherId) {
                case 0:
                    return '맑음';
                case 2:
                    return '구름 조금';
                case 3:
                    return '이슬비';
                case 5:
                    return '비';
                case 6:
                    return '눈';
                case 7:
                    return '안개';
                case 8:
                    return '구름';
                default:
                    return weather.description;
            }
        }
        return null;
    };

    return (
        <div>
              <div className="container" style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '200px' }}>
                <div className="weather-box" style={{ fontWeight: 'bold' }}>
                    <div style={{ fontSize: '2rem' }}>{todayData()}</div>
                    <div style={{ fontSize: '2rem' }}>{weather && weather.name}</div>
                    <div style={{ textAlign: 'left', marginLeft: '200px' }}>
                        {weatherIcon && <img src={weatherIcon} alt="Weather Icon" style={{ width: '20rem', height: '20rem' }} />}
                </div>
                <h3>{weather?.main.temp}℃ {weather && getWeatherStatus()}</h3>
                </div>
            </div>
        </div>
    );
}
export default WeatherAPI;

const div=`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;