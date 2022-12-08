import { FiCloudRain } from "react-icons/fi";

import { WiDayCloudyGusts, WiThunderstorm } from "react-icons/wi";

import { RiWindyLine } from "react-icons/ri";

import { MdWbSunny } from "react-icons/md";

import { TiWeatherCloudy } from "react-icons/ti";

const Weather = ({ temp, desc, celsius, handler, converter }) => {
	return (
		<div className="weather">
			<div className="circle">
				<div className="temp-icon">
					{/rain/i.test(desc) || /drizzle/i.test(desc) ? (
						<FiCloudRain />
					) : /cloud/i.test(desc) ? (
						<WiDayCloudyGusts />
					) : /thunder/i.test(desc) ? (
						<WiThunderstorm />
					) : /wind/i.test(desc) ? (
						<RiWindyLine />
					) : /sun/i.test(desc) ? (
						<MdWbSunny />
					) : (
						<TiWeatherCloudy />
					)}
				</div>
			</div>
			<h3>{desc}</h3>
			<h1>
				{temp && (celsius ? temp.toFixed(1) : converter(temp))}
				<sup className="sup">o</sup>
				{celsius ? "C" : "F"}
			</h1>
			<button
				className="temp_toggle"
				onClick={() => handler((val) => !val)}
			>
				{celsius ? "Fahrenheit" : "Celsius"}
			</button>
		</div>
	);
};

export default Weather;
