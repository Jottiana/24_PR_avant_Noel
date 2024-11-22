import type React from "react";
import { useState, useEffect, useCallback } from "react";
import CalendarCard from "./components/CalendarCard";
import "./App.css";
import NavBar from "./components/NavBar";
import { Link } from "react-router-dom";

const App = () => {
  const [cardData, setCardData] = useState<CardData | null>(null);
  const [showDate, setShowDate] = useState(true);

  interface CardData {
    id: number;
    title: string;
    description: string;
    date: string;
  }

  const fetchCardData = useCallback(async (endpoint: string): Promise<void> => {
    try {
      const response = await fetch(endpoint);
      const data: CardData = await response.json();
      setCardData(data);
    } catch (error) {
      console.error("Error fetching card data:", error);
    }
  }, []);

  const handleCardClick = () => {
    setShowDate(false);
  };

  const handleNavBarClick = (endpoint: string): void => {
    fetchCardData(endpoint);
    setShowDate(false);
  };

  useEffect(() => {
    const today = new Date().getDate();
    fetchCardData(
      `https://mere-noel-api-v2.vercel.app/api/dailycards/${today}`
    );
  }, [fetchCardData]);

  const today = new Date().getDate();

  return (
    <div className="app">
      <header className="header" />
      <h1 className="app-title">Calendrier de l'Avent</h1>
      <main>
        <div className="content">
          <p>Bienvenue sur le site où chaque jour compte avant Noël !</p>
          <div className="homepage-card">
            <CalendarCard
              day={today}
              isActive={true}
              data={cardData}
              showDate={showDate}
              onClick={handleCardClick}
            />
          </div>
          <Link to="/calendar" className="link-to-calendar">
            Voir le calendrier complet
          </Link>
        </div>
      </main>
      <nav className="nav-container">
        <NavBar />
      </nav>
    </div>
  );
};

export default App;
