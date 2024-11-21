import "./App.css";
import Calendar from "./components/Calendar";

function App() {
	return (
		<div className="app-container">
			<header className="header">
				<h1 className="title">24 PR avant Noël</h1>
			</header>
			<main className="content">
				<p>Bienvenue sur le site où chaque jour compte avant Noël !</p>
				<div className="calender">
					<Calendar />
				</div>
			</main>
			<footer className="footer">
				<p>&copy; 2024 - Joyeuses fêtes !</p>
			</footer>
		</div>
	);
}

export default App;
