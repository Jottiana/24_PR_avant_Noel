import type React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Calendar.css";

const Calendar: React.FC<{
	validations: { day: number; status: string }[];
}> = ({ validations }) => {
	const daysInMonth = 24;

	const [statuses, setStatuses] = useState<{ [key: number]: string }>({});

	useEffect(() => {
		const newStatuses: { [key: number]: string } = {};
		for (const validation of validations) {
			newStatuses[validation.day] = validation.status;
		}
		setStatuses(newStatuses);
	}, [validations]);

	const renderDays = () => {
		const days = [];
		for (let i = 1; i <= daysInMonth; i++) {
			days.push(
				<div
					className={`day ${
						statuses[i] === "success"
							? "success"
							: statuses[i] === "failure"
								? "failure"
								: ""
					}`}
					key={i}
				>
					{i}
				</div>,
			);
		}
		return days;
	};

	return <div className="calendar">{renderDays()}</div>;
};

export default Calendar;
