import "./CalendarPage.css"; 
import Calendar from "../components/Calendar";

const CalendarPage = () => {
	return (
		<div className="calendar-page">
			<header className="header">
				<h1 className="title">Calendrier complet</h1>
			</header>
			<main className="content">
				<Calendar />
			</main>
		</div>
	);
};

export default CalendarPage;
