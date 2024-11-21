import "./NavBar.css";

const NavBar = ({ onNavBarClick }) => {
	return (
		<section className="nav-container">
			<h3>Choisis un renne pour aider le Père Noël</h3>
			<nav className="my-button-container">
				<button
					type="button"
					onClick={() =>
						onNavBarClick(
							"https://mere-noel-api-v2.vercel.app/api/famille/random",
						)
					}
				>
					🟢
				</button>
				<button
					type="button"
					onClick={() =>
						onNavBarClick(
							"https://mere-noel-api-v2.vercel.app/api/voisin/random",
						)
					}
				>
					🔴
				</button>
				<button
					type="button"
					onClick={() =>
						onNavBarClick(
							"https://mere-noel-api-v2.vercel.app/api/vie-quotidienne/random",
						)
					}
				>
					🔵
				</button>
				<button
					type="button"
					onClick={() =>
						onNavBarClick("https://mere-noel-api-v2.vercel.app/api/code/random")
					}
				>
					⚪
				</button>
				<button
					type="button"
					onClick={() =>
						onNavBarClick(
							"https://mere-noel-api-v2.vercel.app/api/calendrier/random",
						)
					}
				>
					🔲
				</button>
			</nav>
		</section>
	);
};

export default NavBar;
