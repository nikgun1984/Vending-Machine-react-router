import monsterImg from "./monster.png";
import "./Drink.css";

const Monster = () => {
	return (
		<div className="Drink">
			<img src={monsterImg} alt="No img" />
			<h2>Unleash the Beast!!!</h2>
		</div>
	);
};

export default Monster;
