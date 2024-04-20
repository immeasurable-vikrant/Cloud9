import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.tsx";
import About from "./pages/Aboutpage.tsx";
import Navbar from "./components/Navbar.tsx";
import "./App.css";

function App() {
	return (
		<div>
			<Navbar />
			<Router>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
