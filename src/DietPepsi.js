import diet from './diet-pepsi.png'
import "./Drink.css";

const DietPepsi = () => {
	return (
		<div className="Drink">
			<img src={diet} alt="No img" />
			<h2>That's What I Like!!!</h2>
		</div>
	);
};

export default DietPepsi;