import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Events from "./pages/Events";
import JoinUs from "./pages/JoinUs";
import Header from "./components/Header";
import Clubs from "./pages/Clubs";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/events" element={<Events />} />
				<Route path="/joinUs" element={<JoinUs />} />
				<Route path="/clubs" element={<Clubs />} />
			</Routes>
		</>
	);
}

export default App;
