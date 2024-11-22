import CalendarCard from "../components/CalendarCard";
import "../App.css";
import "./Home.css"

const Home = () => {
  const handleCardClick = () => {
    console.log("Card clicked!");
  };

  return (
    <div>
      <p className="intro-title">Bienvenue sur le site où chaque jour compte avant Noël !</p>
      <div className="homepage-card">
        <CalendarCard day={1} isActive={true} onClick={handleCardClick} />
      </div>
      <div className="link-container">
        <a href="/calendar" className="link-to-calendar">
          Voir le calendrier complet
        </a>
      </div>
    </div>
  );
};

export default Home;
