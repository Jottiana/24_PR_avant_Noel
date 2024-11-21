import CalendarCard from "./components/CalendarCard";
import "./App.css";
import NavBar from "./components/NavBar";
import { Link } from "react-router-dom";

const App = () => {
	const handleCardClick = () => {
		console.log("Card clicked!");
	};

	return (
		<div className="app-container">
			<header className="header">
				<h1 className="title">24 PR avant Noël</h1>
			</header>
			<main className="content">
				<p className="intro-title">
					Bienvenue sur le site où chaque jour compte avant Noël !
				</p>
				<div className="homepage-card">
					<CalendarCard day={1} isActive={true} onClick={handleCardClick} />
				</div>
				<div className="link-container">
					<Link to="/calendar">Voir le calendrier complet</Link>
				</div>
			</main>
			<nav className="nav-container">
				<NavBar />
			</nav>
			<footer className="footer">
				<p>&copy; 2024 - Joyeuses fêtes !</p>
			</footer>
		</div>
	);
};

export default App;
