import type React from "react";
import "./Calendar.css";

const Calendar: React.FC = () => {
	const daysInMonth = 31;

	const renderDays = () => {
		const days = [];
		for (let i = 1; i <= daysInMonth; i++) {
			days.push(
				<div className="day" key={i}>
					{i}
				</div>,
			);
		}
		return days;
	};

	return <div className="calendar">{renderDays()}</div>;
};

export default Calendar;
