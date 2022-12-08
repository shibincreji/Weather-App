import { BiCurrentLocation } from "react-icons/bi";

const Location = ({ loc }) => {
	return (
		<div className="location">
			<div className="header">
				<BiCurrentLocation className="location-icon" />
				<p>Your Location Now</p>
			</div>
			<h3>{loc}</h3>
		</div>
	);
};

export default Location;
