import cokeImg from './coke.png';
import './Drink.css';

const Coke = () => {
	return (
		<div className="Drink">
			<img src={cokeImg} alt="No img" />
			<h2>Enjoy Coca Cola!!!</h2>
		</div>
	);
}

export default Coke;