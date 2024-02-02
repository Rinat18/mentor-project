import React from "react";
import "./style.css";
import Navbar from "./components/homePage/Navbar";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
	return (
		<>
			<Navbar />
			<MainRoutes />
		</>
	);
};

export default App;
