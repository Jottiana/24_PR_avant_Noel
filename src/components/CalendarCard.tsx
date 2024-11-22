import { useState } from "react";
import "./CalendarCard.css";

type CalendarCardProps = {
  day: number;
};

const CalendarCard = ({ day }: CalendarCardProps) => {
  const [isFetching, setIsFetching] = useState(false);
  const [title, setTitle] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [showDate, setShowDate] = useState(true);

  const handleCardClick = async () => {
    if (showDate) {
      setIsFetching(true);
      setShowDate(false);

      try {
        const response = await fetch(
          `https://mere-noel-api-v2.vercel.app/api/dailycards/${day}`
        );
        const data = await response.json();
        setTitle(data.title || "Pas de titre disponible.");
        setDescription(data.description || "Pas de description disponible.");
      } catch (error) {
        setTitle("Erreur lors de la récupération des données.");
        setDescription("Erreur lors de la récupération des données.");
      } finally {
        setIsFetching(false);
      }
    }
  };

  return (
    <div
      className={`snow-globe ${isFetching ? "loading" : ""}`}
      onClick={handleCardClick}
      onKeyUp={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleCardClick();
        }
      }}
    >
      <div className="snow-ball">
        <div className="snowflake" />
        <div className="snowflake" />
        <div className="snowflake" />
        <div className="snowflake" />
        <div className="snowflake" />

        {showDate ? (
          <p className="day-number">{day}</p>
        ) : (
          <>
            <div className="display-content">
              <h2>{title}</h2>
              <p className="description">{description}</p>
            </div>
          </>
        )}
      </div>
      <div className="base" />
    </div>
  );
};

export default CalendarCard;
