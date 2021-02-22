import {BrowserRouter, Route, Link} from 'react-router-dom';
import Coke from './Coke';
import DietPepsi from "./DietPepsi";
import Dasani from "./Dasani";
import './VendingMachine.css';

const VendingMachine = () => {
	return (
		<div className="VendingMachine">
			<BrowserRouter>
				<h1>
					<Link to="/coke" className="VendingMachine-link">
						Coke
					</Link>
				</h1>
				<h1>
					<Link to="/dietpepsi" className="VendingMachine-link">
						Diet Pepsi
					</Link>
				</h1>
				<h1>
					<Link to="/dasani" className="VendingMachine-link">
						Dasani Water
					</Link>
				</h1>
				<Route exact path="/coke">
					<Coke />
				</Route>
				<Route exact path="/dietpepsi">
					<DietPepsi />
				</Route>
				<Route exact path="/dasani">
					<Dasani />
				</Route>
			</BrowserRouter>
		</div>
	);
}

export default VendingMachine;