import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import Coke from './Coke';
import DietPepsi from "./DietPepsi";
import Dasani from "./Dasani";
import Mountain from './Mountain';
import Crush from './Crush';
import Monster from './Monster.js';
import './VendingMachine.css';
import cokeLink from './cokeLink.png';
import dasaniLink from "./dasaniLink.png";
import dietLink from "./pepsiLink.png";
import mountainLink from "./mountainLink.png";
import monsterLink from "./monsterLink.png";
import crushLink from "./crushLink.png";

const VendingMachine = () => {

	return (
		<div>
			<h1
				style={{
					color: "white",
					textShadow: `3px 3px #0e0808`,
					fontSize: "80px",
				}}
			>
				Choose Your Drink
			</h1>
			<BrowserRouter>
				<nav className="VendingMachine">
					<h1>
						<NavLink exact to="/coke">
							<img src={cokeLink} alt="" />
						</NavLink>
					</h1>
					<h1>
						<NavLink exact to="/dietpepsi">
							<img src={dietLink} alt="" />
						</NavLink>
					</h1>
					<h1>
						<NavLink exact to="/dasani">
							<img src={dasaniLink} alt="" />
						</NavLink>
					</h1>
					<h1>
						<NavLink exact to="/monster">
							<img src={monsterLink} alt="" />
						</NavLink>
					</h1>
					<h1>
						<NavLink exact to="/crush">
							<img src={crushLink} alt="" />
						</NavLink>
					</h1>
					<h1>
						<NavLink exact to="/mountain">
							<img src={mountainLink} alt="" />
						</NavLink>
					</h1>
				</nav>
				<Route exact path="/coke">
					<Coke />
				</Route>
				<Route exact path="/dietpepsi">
					<DietPepsi />
				</Route>
				<Route exact path="/dasani">
					<Dasani />
				</Route>
				<Route exact path="/crush">
					<Crush />
				</Route>
				<Route exact path="/monster">
					<Monster />
				</Route>
				<Route exact path="/mountain">
					<Mountain />
				</Route>
			</BrowserRouter>
		</div>
	);
}

export default VendingMachine;