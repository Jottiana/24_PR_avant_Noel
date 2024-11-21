import "./NavBar.css";

function NavBar() {
    return (
      <>
      <h3>Choisis une case bonus en plus</h3>

        <div className="my-button-container">
          <button type="button" className="rennevert">🟢</button>
          <button type="button" className="rennerouge">🔴</button>
          <button type="button" className="rennebleu">🔵</button>
          <button type="button" className="rennegris">⚪</button>
          <button type="button" className="tableau">🔲</button>
        </div>
      </>
    );
  }

export default NavBar;