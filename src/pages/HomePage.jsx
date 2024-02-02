import React from "react";
import HeaderHomePage from "../components/homePage/HeaderHomePage";
import NewArrivals from "../components/homePage/NewArrivals";
import TopSelling from "../components/homePage/TopSelling";
import BrowseDress from "../components/homePage/BrowseDress";

const HomePage = () => {
	return (
		<>
			<HeaderHomePage />
			<NewArrivals />
			<TopSelling />
			<BrowseDress />
		</>
	);
};

export default HomePage;
