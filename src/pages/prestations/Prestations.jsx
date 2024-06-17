import "./prestations.scss"

const Prestations = () => {
  return (
    <main className="prestations-container">
      <h2 className="prestations-title">Prestations</h2>
      <h3 className="prestations-subtitle">COMMENT SE PASSE UNE PREMIÈRE CONSULTATION ?</h3>
      <div className="prestations-img-container">
        <img
          src="images/professor-consultation.png"
          alt="puzzle"
          className="prestations-image"
        />
      </div>
      <div className="prestations-img-container">
        <img
          src="images/itinerary.png"
          alt="puzzle"
          className="prestations-image"
        />
      </div>

    </main>
  );
}

export default Prestations;