import { Outlet } from "react-router-dom";
import "../App.css";
import NavBar from "./NavBar";

const Layout = () => {
	return (
		<div className="app-container">
			<header className="header">
				<h1 className="title">24 PR avant Noël</h1>
			</header>
			<nav className="nav-container">
				<NavBar />
			</nav>
			<main className="content">
				<Outlet />
			</main>
		</div>
	);
};

export default Layout;
