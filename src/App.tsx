import type React from "react"; 
import { useState, useEffect, useCallback } from "react";
import CalendarCard from "./components/CalendarCard";
import "./App.css";
import NavBar from "./components/NavBar";

interface CardData {
    id: number;
    title: string;
    description: string;
    date: string;
  }

  const App = () => {
	const [cardData, setCardData] = useState<CardData | null>(null);
	const [showDate, setShowDate] = useState(true);
  
	const fetchCardData = useCallback (async (endpoint: string): Promise<void> => {
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
	  fetchCardData(`/api/dailycards/${today}`);
	}, [fetchCardData]);
  
	const today = new Date().getDate();

  return (
    <div className="app">
      <h1>24 PR avant Noël</h1>
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
        <NavBar onNavBarClick={handleNavBarClick} />
      </nav>
    </div>
  );
}

export default App;