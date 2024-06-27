import "./prestations.scss";

const Prestations = () => {
  return (
    <main className="prestations-container">
      <h2 className="prestations-title">Prestations</h2>
      <div className="prestations-container-content">
      <aside className="left-column">
      <div className="prestations-img-container">
        {/* <img
          src="/images/professor-consultation.png"
          alt="puzzle"
          className="prestations-image"
        /> */}
        <img
  src="https://annechristinebrunel.fr/images/professor-consultation.png"
  alt="professor-consultation"
  className="prestations-image"
/>
      </div>
      <h3 className="prestations-subtitle">
        COMMENT SE PASSE UNE PREMIÈRE CONSULTATION ?
      </h3>
      <p>
        La premier rendez-vous dure environ 1h30. Je vais prendre le temps de
        connaitre votre histoire de santé depuis votre enfance, votre état
        moral, vos antécédents familiaux.
      </p>
      <p>
        A l’aide de questionnaires, je vais essayer de repérer vos maillons
        faibles au niveau micronutritionnel. Un interrogatoire alimentaire
        m’aidera à vous conseiller et à corriger les erreurs alimentaires. Vos
        bilans sanguins me donneront des informations importantes sur les excès
        ou déficits en micronutriments, et sur beaucoup d’autres marqueurs qui
        orienteront mes conseils. Je pourrais vous conseiller de prendre des
        compléments alimentaires pour rééquilibrer le microbiote et/ou combler
        les déficiences en micronutriments. Je proposerai de vous revoir au bout
        de 2 mois de traitement et changements alimentaires pour faire le point
        et évaluer les effets sur votre organisme. Pour certains, 2 rendez-vous
        seront suffisants, pour d’autres ce sera un chemin plus long où nous
        serons amenés à nous voir régulièrement (environ tous les 3 ou 4 mois).
      </p>
      <p>
        Un analyseur de composition corporelle multi fréquences (impédencemètre)
        pourra parfois être utilisé. Il me permettra de disposer d’informations
        précises sur votre composition corporelle (masse grasse, maigre,
        osseuse, hydratation...), et ainsi de cibler mes conseils pour en
        rétablir l’équilibre optimal. Cet outil rend possible le suivi de
        l’évolution de votre composition corporelle et d’ajuster mes conseils
        lors de chaque rendez-vous.
      </p>
      </aside>
      <aside className="right-column">
      <div className="prestations-img-container">
        {/* <img
          src="images/itinerary.png"
          alt="puzzle"
          className="prestations-image"
        /> */}
              <img
          src="https://annechristinebrunel.fr/images/itinerary.png"
          alt="itineraire"
          className="prestations-image"
        />
      </div>
      <h3 className="prestations-subtitle">MON PARCOURS</h3>
      <ul className="parcours-list">
        <li> BTS Diététique en 1994</li>
        <li>
          Validation de « l’université de base » en médecine nutritionnelle et
          fonctionnelle enseignée par le professeur Castronovo en 2015
        </li>
        <li>Cycle de formation en médecine nutritionnelle et fonctionnelle (12 modules) en 2016/2017</li>
        <li>Université spécialisée Nutrihealth en 2016-2019</li>
        <li>Formation continue depuis 2020 (webinaires)</li>
      </ul>
      </aside>
      </div>
    </main>
  );
};

export default Prestations;
