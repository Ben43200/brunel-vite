import "./micronutrition.scss";

const Micronutrition = () => {
  return (
    <main className="nutri-content">
          <h2 className="nutri-title">La micronutrition en deux minutes</h2>
        <div className="nutri-video-container">
      <video className="video" controls playsInline>
        <source src="videos/acb-motion-comp_2.mp4" type="video/mp4" />
      </video>
      </div>
      
      <div className="para-container">
    
      <p>
        La Micronutrition consiste à satisfaire les besoins en micronutriments
        (vitamines, minéraux, acides gras essentiels, acides aminés,
        probiotiques, composés phytonutritionels) de l’individu, par une
        alimentation diversifiée, associée si nécessaire à une complémentation
        personnalisée. Elle trouve ses fondements dans les recherches effectuées
        sur les liens avérés entre alimentation, santé et prévention.
      </p>
      <p>
        Elle est complémentaire à toutes autres approches médicales, pouvant
        permettre d’augmenter l’efficacité de certains traitements ou d’en
        diminuer les effets secondaires.
      </p>
      <p>
        La Micronutrition s’intéresse à l’impact des micronutriments sur la
        santé et vise à optimiser leurs statuts dans l’organisme. Elle choisit
        donc de regarder les précieuses molécules qui se trouvent dans notre
        assiette et la façon dont notre organisme les utilise. Elle prend toute
        sa dimension aujourd’hui avec une alimentation qui se caractérise par
        l’augmentation de l’apport calorique au détriment de la densité en
        micronutriments. C’est ce qu’on appelle d’ailleurs «les calories vides».
      </p>
      <p>
        Une alimentation optimale peut être définie comme une alimentation qui,
        après digestion et absorption, procure aux cellules la quantité et la
        diversité des molécules nécessaires à leur fonctionnement optimal.
      </p>
      <p>
        Tous ces éléments donnent la valeur nutritionnelle de l’assiette. Mais
        l’évolution de l’agriculture, de plus en plus intensive, permet de moins
        en moins d’apporter tout ce dont notre cellule a besoin. Un manque même
        faible mais chronique en certains oligoéléments (Sélénium, Zinc…) peut
        être à l’origine de troubles importants.
      </p>
      <p>
        Chacun est unique: Personne n’a le même métabolisme, ni les mêmes
        besoins. Il faut partir de l’individu et de son état de santé, et non
        seulement de son assiette. Il est intéressant d’adapter l’alimentation
        d’un individu à son profil personnel. Une alimentation, même équilibrée,
        peut ne pas répondre de manière adaptée aux besoins spécifiques d’un
        individu.
      </p>
      <p>
        Cette approche se base sur la correction des excès et, surtout, des
        déficiences de notre organisme.
      </p>
      <p>
        La micronutrition s’intéresse de très près au microbiote intestinal, qui
        contient 100 000 milliards de bactéries est aujourd’hui considéré comme
        un organe à part entière. Il joue un rôle clé dans le métabolisme
        énergétique, la défense face aux micro-organismes pathogènes,
        l’immunité, la fermentation de nutriments… Une flore déséquilibrée
        entraîne une réponse exacerbée du système immunitaire intestinal,
        augmentant l’inflammation et pouvant générer d’autres pathologies.
      </p>
      <p>
        Notre muqueuse intestinale constitue normalement une barrière mécanique
        étanche aux micro-organismes contenus dans l’intestin et aux
        macromolécules. Le passage dans la circulation générale de molécules
        étrangères, dû à la rupture de cette barrière, est le point de départ à
        de multiples pathologies. C’est l’hyperperméabilité intestinale.
        L’apport de probiotiques et prébiotiques, de molécules cicatrisantes
        peut permettre de rétablir le microbiote et réparer la muqueuse
        intestinale. Chercher l’origine des troubles est le but de la
        micronutrition pour pouvoir agir sur elle et éviter les conséquences
        pathologiques en cascade.
      </p>
      </div>
    </main>
  );
};
export default Micronutrition;
