import React from 'react';
import WeatherAPI from './weather/WeatherAPI';

function Weather(props) {
  return (
    <table>
      <tr>
        <td rowspan="2"><WeatherAPI /></td>
        <td><a href="#"><img src="korea.jpg" alt="Korea" /></a></td>
        <td><a href="#"><img src="china.jpg" alt="China" /></a></td>
      </tr>
      <tr>
        <td><a href="#"><img src="japan.jpg" alt="Japan" /></a></td>
        <td><a href="#"><img src="west.jpg" alt="West" /></a></td>
      </tr>  
    </table>
  );
}

export default Weather;