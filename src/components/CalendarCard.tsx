import "./CalendarCard.css";

type CalendarCardProps = {
  day: number;
  isActive: boolean;
  onClick: () => void;
};

const CalendarCard = ({ day, onClick }: CalendarCardProps) => {
  return (
    <div className="snow-globe" type= "button" onClick={onClick}>
      <div className="snow-ball">
        <p className="day-number">{day}</p>
      </div>
      <div className="base"></div>
    </div>
  );
};

export default CalendarCard;




