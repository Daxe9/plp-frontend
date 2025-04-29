import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Events from "./pages/Events";
import JoinUs from "./pages/JoinUs";
import Header from "./components/Header";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/events" element={<Events />} />
				<Route path="/joinUs" element={<JoinUs />} />
			</Routes>
		</>
	);
}

export default App;
