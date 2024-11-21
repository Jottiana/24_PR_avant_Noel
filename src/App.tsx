import "./App.css";
import NavBar from "./components/NavBar";

function App() {
	return (
		<div className="app-container">
			<header className="header">
				<h1 className="title">24 PR avant Noël</h1>
			</header>
			<main>
				<div className="content">
					<p>Bienvenue sur le site où chaque jour compte avant Noël !</p>
				</div>
				<NavBar />
			</main>
			<footer className="footer">
				<p>&copy; 2024 - Joyeuses fêtes !</p>
			</footer>
		</div>
	);
}

export default App;
