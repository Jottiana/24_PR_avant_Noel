import CalendarCard from "./components/CalendarCard";
import "./App.css";
import NavBar from "./components/NavBar";
import Calendar from "./components/Calendar";

const App = () => {
	const handleCardClick = () => {
		console.log("Card clicked!");
	};

	return (
		<div className="app">
			<h1>24 PR avant Noël</h1>
			<main>
				<div className="content">
					<p>Bienvenue sur le site où chaque jour compte avant Noël !</p>
					<div className="homepage-card">
						<CalendarCard day={1} isActive={true} onClick={handleCardClick} />
					</div>
					<div className="calendar-container">
						<Calendar />
					</div>
					<NavBar />
				</div>
			</main>
			<footer className="footer">
				<p>&copy; 2024 - Joyeuses fêtes !</p>
			</footer>
		</div>
	);
};

export default App;
