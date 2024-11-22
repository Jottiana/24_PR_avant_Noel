import "./CalendarPage.css";
import Calendar from "../components/Calendar";

const validation = [
	{ day: 2, status: "success" },
	{ day: 9, status: "failure" },
	{ day: 11, status: "failure" },
	{ day: 17, status: "success" },
];

const CalendarPage = () => {
	return (
		<div className="calendar-page">
			<header className="header">
				<h1 className="title">Calendrier de l'Avent</h1>
			</header>
			<main className="content">
				<Calendar validations={validation} />
			</main>
		</div>
	);
};

export default CalendarPage;
