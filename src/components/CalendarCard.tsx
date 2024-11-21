import { useState } from "react";
import "./CalendarCard.css";

type CalendarCardProps = {
	day: number;
};

const CalendarCard = ({ day }: CalendarCardProps) => {
	const [isFetching, setIsFetching] = useState(false);
	const [description, setDescription] = useState<string | null>(null);

	const handleCardClick = async () => {
		setIsFetching(true);
		setDescription(null);

		setTimeout(async () => {
			try {
				const response = await fetch(
					"https://mere-noel-api-v2.vercel.app/api/code/random",
				);
				const data = await response.json();
				setDescription(data.message || "Pas de description disponible.");
			} catch (error) {
				setDescription("Erreur lors de la récupération des données.");
			} finally {
				setIsFetching(false);
			}
		}, 500);
	};

	return (
		<div
			className={`snow-globe ${isFetching ? "loading" : ""}`}
			onClick={handleCardClick}
		>
			<div className="snow-ball">
				<div className="snowflake" />
				<div className="snowflake" />
				<div className="snowflake" />
				<div className="snowflake" />
				<div className="snowflake" />

				{!description ? (
					<p className="day-number">{isFetching ? "..." : day}</p>
				) : (
					<p className="description">{description}</p>
				)}
			</div>
			<div className="base" />
		</div>
	);
};

export default CalendarCard;
