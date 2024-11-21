import "./NavBar.css";

function NavBar() {
    return (
      <>
      <section className="nav-container">
      <h2>Choisis une case bonus en plus</h2>

        <div className="my-button-container">
          <button type="button" className="rennevert">🟢</button>
          <button type="button" className="rennerouge">🔴</button>
          <button type="button" className="rennebleu">🔵</button>
          <button type="button" className="rennegris">⚪</button>
          <button type="button" className="tableau">🔲</button>
        </div>
        </section>
      </>
    );
  }

export default NavBar;