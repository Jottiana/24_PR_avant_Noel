import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = ({
  onNavBarClick,
}: {
  onNavBarClick: (url: string) => void;
}) => {
  return (
    <section className="nav-container">
      <h3 className="navbar-title">Choisis un renne pour aider le Père Noël</h3>
      <nav className="my-button-container">
        <Link to="/">
          <button type="button">🏠</button>
        </Link>
        <button
          type="button"
          onClick={() =>
            onNavBarClick(
              "https://mere-noel-api-v2.vercel.app/api/famille/random"
            )
          }
        >
          🟢
        </button>
        <button
          type="button"
          onClick={() =>
            onNavBarClick(
              "https://mere-noel-api-v2.vercel.app/api/voisin/random"
            )
          }
        >
          🔴
        </button>
        <button
          type="button"
          onClick={() =>
            onNavBarClick(
              "https://mere-noel-api-v2.vercel.app/api/vie-quotidienne/random"
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
        <Link to="/calendar">
          <button type="button">📅</button>
        </Link>
      </nav>
    </section>
  );
};

export default NavBar;
