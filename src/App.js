import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import TopNav from './Components/TopNav';
import BreadCrum from './Components/BreadCrumbs';
import Dashbaord from './Pages/Dashbaord';
import Orders from './Pages/Orders';
import Customers from './Pages/Customers';
import Inventory from './Pages/Inventory';
import Conversation from './Pages/Conversation';
import Settings from './Pages/Settings';

function App() {
	return (
		<div className=" bg-backgroung-grey flex ">
			{/* <div className=" flex">
				<NavBar />
			</div>
			<div>
				<div className=" w-full">
					<TopNav />
					<BreadCrum />
				</div>
			</div>
			<Routes>
				<Route path="/" element={<Dashbaord />} />
				<Route path="/orders" element={<Orders />} />
				<Route path="/customers" element={<Customers />} />
				<Route path="/inventory" element={<Inventory />} />
				<Route path="/conversations" element={<Conversation />} />
				<Route path="/settings" element={<Settings />} />
			</Routes> */}

			<div>
				<NavBar />
			</div>
			<div className=" w-full">
				<div>
					<TopNav />
					<BreadCrum />
				</div>
				<div>
					<Routes>
						<Route path="/" element={<Dashbaord />} />
						<Route path="/orders" element={<Orders />} />
						<Route path="/customers" element={<Customers />} />
						<Route path="/inventory" element={<Inventory />} />
						<Route path="/conversations" element={<Conversation />} />
						<Route path="/settings" element={<Settings />} />
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;
