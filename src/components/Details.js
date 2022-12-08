import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";
import { BiWind } from "react-icons/bi";

const Details = ({ min_temp, max_temp, wind, cels, converter }) => {
	return (
		<div className="details">
			<div className="item" title="Max Temperature">
				<FaTemperatureHigh className="icon" />
				<p>
					{max_temp &&
						(cels ? max_temp.toFixed(1) : converter(max_temp))}
					<sup>o</sup>
					{cels ? "C" : "F"}
				</p>
			</div>
			<div className="item" title="Wind Speed">
				<BiWind className="icon" />
				<p>{wind}km/h</p>
			</div>
			<div className="item" title="Min Temperature">
				<FaTemperatureLow className="icon" />
				<p>
					{min_temp &&
						(cels ? min_temp.toFixed(1) : converter(min_temp))}
					<sup>o</sup>
					{cels ? "C" : "F"}
				</p>
			</div>
		</div>
	);
};

export default Details;
