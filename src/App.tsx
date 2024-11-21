import CalendarCard from "./components/CalendarCard";
import "./App.css";

const App = () => {
  const handleCardClick = () => {
    console.log("Card clicked!");
  };

  return (
    <div className="app">
      <h1>24 PR avant Noël</h1>
      <div className="homepage-card">
        <CalendarCard day={1} isActive={true} onClick={handleCardClick} />
      </div>
    </div>
  );
};

export default App;
