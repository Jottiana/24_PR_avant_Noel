import CalendarCard from "./components/CalendarCard";
import "./App.css";
import NavBar from "./components/NavBar";
import Calendar from "./components/Testcalendar";

/* tableau placeholder pour les tests, à remplacer par une méthode de validation plus "propre" en lien avec la calendarcard */
const validation = [
	{ day: 2, status: "success" },
	{ day: 9, status: "failure" },
	{ day: 11, status: "failure" },
	{ day: 17, status: "success" },
];
/* ensuite envoyé à calendar en bas */
const App = () => {
	const handleCardClick = () => {
		console.log("Card clicked!");
	};

	return (
		<div className="app">
			<h1>24 PR avant Noël</h1>
			<main>
				<div className="content">
					<p className="intro-title">
						Bienvenue sur le site où chaque jour compte avant Noël !
					</p>
					<div className="homepage-card">
						<CalendarCard day={1} isActive={true} onClick={handleCardClick} />
					</div>
					<div className="calendar-container">
						<Calendar validations={validation} />
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
