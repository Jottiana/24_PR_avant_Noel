import React, { useState, useEffect } from "react";
import "./Calendar.css";

/* c'est ma version modifiée du calendar, avec une fonction pour stocker les réussites et renvoyer du css dans les cases
day en conséquence. */
/* biome aime pas mon forEach, mais on s'en fiche, ça marche. Blague à part, j'ai essayé de faire au plus simple / générique
pour la feature, mais ça semble un peu barbare au final... et j'ai pas eu la foi de faire un for...of à la fin */

const Calendar: React.FC<{
	validations: { day: number; status: string }[];
}> = ({ validations }) => {
	const daysInMonth = 24;

	/* pour stocker les réussites et échecs de la card */
	const [statuses, setStatuses] = useState<{ [key: number]: string }>({});

	/* mise à jour des status en cas de validation fournie depuis la card, à changer pour faire le lien avec calendarcard */
	useEffect(() => {
		const newStatuses: { [key: number]: string } = {};
		validations.forEach((validation) => {
			newStatuses[validation.day] = validation.status;
		});
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
