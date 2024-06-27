import "./puzzle.scss";

const Puzzle = () => {
  return (
    <main className="puzzle-container">
      <h2 className="puzzle-title">Puzzle de ma vie</h2>
      <div className="img-container">
        {/* <img
          src="images/puzzle-portrait.webp"
          alt="puzzle"
          className="puzzle-image"
        /> */}
               <img
          src="https://annechristinebrunel.fr/images/puzzle-portrait.webp"
          alt="puzzle"
          className="puzzle-image"
        />
      </div>
      <div className="puzzle-text">
        <p>
          Je suis née en Suisse, dans une famille d’agriculteurs et ai vécu 20
          ans dans ce contexte. J’ai été sensibilisée, dès mon plus jeune âge, à
          la qualité de la nourriture (légumes du jardin, viande de la ferme…).
        </p>
        <p className="paragraph-spaces">
          A 20 ans, c’est le départ en France, à Briançon pour y suivre mon
          mari. Des études de diététique par correspondance (BTS) occupent mes
          premières années.{" "}
        </p>
        <p>
          L’arrivée successive de nos 3 enfants m’a conduite à ne pas travailler
          dans ce domaine, je fais alors le choix de me consacrer à mon rôle de
          mère. Assistante maternelle durant 10 années, j’ai pu toutefois mettre
          en pratique ce que j’avais appris en faisant attention à l’équilibre
          alimentaire des repas préparés pour toute ma famille et les enfants
          gardés.
        </p>
        <p>
          Des douleurs musculaires, articulaires et intestinales présentes dès
          ma jeunesse commencent alors à croitre peu à peu, jusqu’en 2013. Elles
          se conjuguent avec un épuisement sévère. Je dois alors arrêter mon
          travail et envisage sérieusement de faire un dossier de demande
          d’invalidité.
        </p>
        <p>
          Le rhumatologue qui me suit depuis quelques temps pose le diagnostic
          sur mon mal : fibromyalgie.
        </p>

        <p className="paragraph-spaces">
          Il m’encourage à tester un régime sans gluten et sans produit laitier,
          les médicaments étant, selon lui, inefficaces. Ce régime suivi
          progressivement améliore sensiblement mes troubles digestifs.
        </p>
        <p>
          Il me conseille de prendre contact avec un ostéopathe reconnu dans la
          région. Ce dernier prend en compte mes douleurs et mon état. Malgré
          les séances de kinésithérapie et d’ostéopathie régulières, les
          douleurs et la fatigue ne diminuent pas.
        </p>
        <p className="paragraph-spaces">
          Il m’envoie consulter une micronutritionniste, ayant repéré de sérieux
          troubles digestifs. Celle-ci prend le temps de m’expliquer le lien
          entre mes douleurs, ma fatigue et mes problèmes intestinaux. J’accepte
          alors de faire des analyses de sang et de suivre strictement le régime
          sans gluten et sans produit laitier de vache et de prendre des
          compléments alimentaires.
        </p>
        <p className="paragraph-spaces">
          Les premiers résultats positifs apparaissent au bout de quelques
          temps. Cette amélioration me permet d’envisager nouvellement mon
          avenir professionnel. Passionnée par la découverte de la
          micronutrition et en lien avec mon BTS de diététique, je commence à
          prendre part à des sessions de formation.
        </p>
        <p>
          En juillet 2015, j’ouvre un cabinet de diététique axé principalement
          sur la micronutrition. Depuis, les formations rythment ma vie
          professionnelle.
        </p>
        <p>
          Ainsi, le puzzle de ma vie professionnelle prend forme de façon
          inespérée et épanouissante. Toute rencontre avec les patients
          contribue à rendre le puzzle de ma vie plus beau. Puisse ce témoignage
          rendre espoir à d’autres et mon accompagnement thérapeutique
          participer à leurs mieux être physique et moral !
        </p>
      </div>
    </main>
  );
};

export default Puzzle;
