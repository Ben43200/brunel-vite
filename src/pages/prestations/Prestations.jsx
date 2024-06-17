import "./prestations.scss"

const Prestations = () => {
  return (
    <main className="prestations-container">
      <h2 className="prestations-title">Prestations</h2>
      <div className="img-container">
        <img
          src="images/itinerary.png"
          alt="puzzle"
          className="puzzle-image"
        />
      </div>
      <div className="img-container">
        <img
          src="images/professor-consultation.png"
          alt="puzzle"
          className="puzzle-image"
        />
      </div>
    </main>
  );
}

export default Prestations;