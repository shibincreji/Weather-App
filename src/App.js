import { useState, useEffect } from "react";
import Location from "./components/Location";
import Weather from "./components/Weather";
import Details from "./components/Details";

const App = () => {
	const ENDPOINT = "https://weather-proxy.freecodecamp.rocks/api/current?";
	const [location, setLocation] = useState({});
	const [weather, setWeather] = useState({});
	const [celsius, setCelsius] = useState(true);

	const toFahrenheit = (celsius) => {
		return (celsius * 1.8 + 32).toFixed(1);
	};

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(({ coords }) =>
			setLocation({ lon: coords.longitude, lat: coords.latitude })
		);
	}, []);

	useEffect(() => {
		async function fetchWeather() {
			try {
				const resp = await fetch(
					ENDPOINT + "lat=" + location.lat + "&lon=" + location.lon
				);
				const data = await resp.json();
				setWeather({
					loc: data.name + ", " + data.sys.country,
					temp: data.main.temp,
					min_temp: data.main.temp_min,
					max_temp: data.main.temp_max,
					wind: data.wind.speed,
					name: data.weather[0].main,
					desc: data.weather[0].description,
					img: data.weather[0].icon,
				});
			} catch (error) {
				console.log(error);
			}
		}
		fetchWeather();
	}, [location]);
	return (
		<main className="weatherapp">
			<Location {...weather} />
			<Weather
				{...weather}
				celsius={celsius}
				handler={setCelsius}
				converter={toFahrenheit}
			/>
			<Details {...weather} converter={toFahrenheit} cels={celsius} />
		</main>
	);
};

export default App;
