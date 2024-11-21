import "./CalendarCard.css";

type CalendarCardProps = {
  day: number;
  isActive: boolean;
  onClick: () => void;
};

const CalendarCard = ({ day, isActive, onClick }: CalendarCardProps) => {
  return (
    <button
      type="button"
      className={`calendar-card ${isActive ? "active" : ""}`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter") onClick();
      }}
    >
      <p className="calendar-day">{day}</p>
    </button>
  );
};

export default CalendarCard;
