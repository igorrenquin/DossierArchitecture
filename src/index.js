import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import DA from "./da.json";

const BlocTexte = ({ title, children }) => (
  <table
    className="pure-table "
    style={{
      padding: 10,
      margin: 5,
      background: "#e6e0eb",
      width: "100%",
      textAlign: "left"
    }}
  >
    <thead>
      <tr>
        <th>{title}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{children}</td>
      </tr>
    </tbody>
  </table>
);

const BlocTitle = ({
  title,
  backgroundColor = "rgb(199, 145, 65)",
  children
}) => (
  <div
    style={{ border: `1px solid ${backgroundColor}`, margin: 5 }}
    className="pure-u-1 "
  >
    <div
      style={{
        background: backgroundColor,
        height: 40,
        fontSize: "1.4em",
        lineHeight: "40px",
        color: "white"
      }}
    >
      {title}
    </div>
    <div style={{ padding: 10, background: "#f2eff5" }}>{children}</div>
  </div>
);

const formatCell = value => {
  if (value === true) {
    return "✔";
  } else if (value === false) {
    return "🚫";
  } else {
    return value;
  }
};

const getTdStyle = (key, value) => {
  if (value === true || value === false) {
    return {
      textAlign: "center"
    };
  }
};

const BlocTableau = ({ title, data }) => {
  const keys = Object.keys(data[0]);
  return (
    <table
      className="pure-table pure-table-bordered"
      style={{
        padding: 10,
        margin: 5,
        background: "#e6e0eb",
        width: "100%",
        textAlign: "left"
      }}
    >
      <thead>
        <tr>
          {keys.map((k, i) => (
            <th
              key={k + "" + i}
              style={getTdStyle(k, data.length && data[0][k])}
            >
              {k}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {keys.map((k, j) => (
              <td key={row[k] + "" + j} style={getTdStyle(k, row[k])}>
                {formatCell(row[k])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Acteurs = ({}) => (
  <BlocTitle backgroundColor="rgb(95, 74, 121)" title="Projet - acteurs">
    <BlocTexte title="Nom du Projet">{DA.Acteurs.NomProjet}</BlocTexte>
    <BlocTexte title="Contexte  du projet">
      {DA.Acteurs.ContexteProjet}
    </BlocTexte>
    <BlocTexte title="Objectifs du projet">
      <ul>
        {DA.Acteurs.ObjectifsProjet.map((o, i) => (
          <li key={o + i}>{o}</li>
        ))}
      </ul>
    </BlocTexte>
    <BlocTexte title="Enjeux du projet">
      <ul>
        {DA.Acteurs.EnjeuxProjet.map((o, i) => (
          <li key={o + i}>{o}</li>
        ))}
      </ul>
    </BlocTexte>
    <BlocTexte title="Planning du projet">
      <BlocTableau title="Planning" data={DA.Acteurs.PlanningProjet} />
    </BlocTexte>
    <BlocTexte title="Acteurs du Projet">
      <BlocTableau title="Acteurs" data={DA.Acteurs.ActeursProjet} />
    </BlocTexte>
    <BlocTexte title="Acteurs métiers du SI">
      <BlocTableau title="Acteurs" data={DA.Acteurs.ActeursMetier} />
    </BlocTexte>
  </BlocTitle>
);

const Fonctionnalites = ({}) => (
  <BlocTitle
    backgroundColor="rgb(119, 145, 65)"
    title="Fonctionnalites - Données"
  >
    <BlocTableau
      title="Fonctionnalites"
      data={DA.Fonctionnalites.FonctionnalitesApplicatif}
    />
    <BlocTableau
      title="Fonctionnalites"
      data={DA.Fonctionnalites.DonneesMetier}
    />
    <BlocTableau
      title="Fonctionnalites"
      data={DA.Fonctionnalites.FichiersMetier}
    />
    <BlocTableau
      title="Fonctionnalites"
      data={DA.Fonctionnalites.ReferentielsDonnees}
    />

    <BlocTexte title="Sensibilité des données dans le SI">
      <BlocTableau
        title="Fonctionnalites"
        data={DA.Fonctionnalites.SensibiliteHaut}
      />
      <BlocTableau
        title="Fonctionnalites"
        data={DA.Fonctionnalites.SensibiliteMoyen}
      />
      <BlocTableau
        title="Fonctionnalites"
        data={DA.Fonctionnalites.SensibiliteBas}
      />
    </BlocTexte>
    <BlocTableau
      title="ServicesConnexes"
      data={DA.Fonctionnalites.ServicesConnexes}
    />
  </BlocTitle>
);

const Contraintes = ({}) => (
  <BlocTitle
    backgroundColor="rgb(225, 108, 34)"
    title="Contraintes - Volumétrie"
  >
    <BlocTexte title="Contraintes légales">
      <BlocTableau title="Acteurs" data={DA.Contraintes.ContraintesLegales} />
    </BlocTexte>
    <BlocTexte title="Contraintes métiers">
      <BlocTableau title="Acteurs" data={DA.Contraintes.ContraintesMetier} />
    </BlocTexte>
    <BlocTexte title="Normes & règles à respecter">
      <BlocTableau title="Acteurs" data={DA.Contraintes.NormesRegles} />
    </BlocTexte>
    <BlocTexte title="Dépendances avec d'autres SI">
      <BlocTableau title="Acteurs" data={DA.Contraintes.DependancesSI} />
    </BlocTexte>
    <BlocTexte title="Dépendances avec le poste de travail">
      <BlocTableau title="Acteurs" data={DA.Contraintes.DependancesP2T} />
    </BlocTexte>
    <BlocTexte title="Volumétrie données du SI">
      <BlocTableau title="Acteurs" data={DA.Contraintes.VolumetrieDonnees} />
    </BlocTexte>
    <BlocTexte title="Volumétrie fichiers du SI">
      <BlocTableau title="Acteurs" data={DA.Contraintes.VolumetrieFichiers} />
    </BlocTexte>
    <BlocTexte title="Réduction volumétrie données & fichiers du SI">
      <BlocTableau title="Acteurs" data={DA.Contraintes.ReductionVolumetrie} />
    </BlocTexte>
  </BlocTitle>
);

const Exigences = ({}) => (
  <BlocTitle
    backgroundColor="rgb(146, 55, 54)"
    title="Exigences non fonctionnelles"
  >
    <BlocTexte title="Exigences sur les données">
      <BlocTableau title="DICT" data={DA.Exigences.DICT} />
      <BlocTableau title="EBIOSCNIL" data={DA.Exigences.EBIOSCNIL} />
    </BlocTexte>

    <BlocTexte title="Période de service">
      <BlocTableau title="Periode Service" data={DA.Exigences.PeriodeService} />
      <BlocTableau
        title="Periode Service Charge"
        data={DA.Exigences.PeriodeServiceCharge}
      />
    </BlocTexte>

    <BlocTexte title="Garantie de service">
      <BlocTableau
        title="Garantie de service"
        data={DA.Exigences.GartantieService}
      />
      <BlocTableau
        title="Garantie de service Impact"
        data={DA.Exigences.GarantieServiceImpact}
      />
    </BlocTexte>

    <BlocTexte title="Performance">
      <BlocTableau title="Performance" data={DA.Exigences.Performance} />
    </BlocTexte>

    <BlocTexte title="Exploitabilité">
      <BlocTableau title="Exploitabilité" data={DA.Exigences.Exploitabilité} />
      <BlocTableau
        title="Exploitabilité Impacts"
        data={DA.Exigences.ExploitabiliteImpact}
      />
    </BlocTexte>
  </BlocTitle>
);

const ArchiActeurProcessus = ({}) => (
  <BlocTitle
    backgroundColor="rgb(36, 88, 103)"
    title="Schèma d'architecture acteurs et processus"
  >
    <BlocTableau
      title="Schéma acteurs & processus"
      data={DA.ArchiActeurProcessus}
    />
  </BlocTitle>
);

const ArchiFonctionnel = ({}) => (
  <BlocTitle
    backgroundColor="rgb(36, 88, 103)"
    title="Schèma d'architecture fonctionnelle"
  >
    <BlocTableau
      title="Schéma acteurs & processus"
      data={DA.ArchiFonctionnel}
    />
  </BlocTitle>
);

const ArchiApplicative = ({}) => (
  <BlocTitle
    backgroundColor="rgb(36, 88, 103)"
    title="Schèma d'architecture applicative"
  >
    <BlocTableau
      title="Schéma acteurs & processus"
      data={DA.ArchiApplicative}
    />
  </BlocTitle>
);

const ArchiTechnique = ({}) => (
  <BlocTitle
    backgroundColor="rgb(36, 88, 103)"
    title="Schèma d'architecture acteurs et processus"
  >
    <BlocTableau title="Schéma acteurs & processus" data={DA.ArchiTechnique} />
  </BlocTitle>
);

const ServeursComposants = ({}) => (
  <BlocTitle
    backgroundColor="rgb(74, 68, 43)"
    title="Serveurs & Composants applicatifs"
  >
    <BlocTexte title="Serveur 1">
      <BlocTableau
        title="Schéma acteurs & processus"
        data={DA.ServeursComposants.Serveur1.RessourcesServeur1}
      />
      <BlocTableau
        title="Schéma acteurs & processus"
        data={DA.ServeursComposants.Serveur1.Serveur1Composants}
      />
    </BlocTexte>
    <BlocTexte title="Serveur 2">
      <BlocTableau
        title="Schéma acteurs & processus"
        data={DA.ServeursComposants.Serveur2.RessourcesServeur2}
      />
      <BlocTableau
        title="Schéma acteurs & processus"
        data={DA.ServeursComposants.Serveur2.Serveur2Composants}
      />
    </BlocTexte>
  </BlocTitle>
);

const MatricesFlux = ({}) => (
  <BlocTitle
    backgroundColor="rgb(74, 68, 43)"
    title="Matrices des flux applicatifs & système"
  >
    <BlocTexte title="Matrices de flux applicative">
      <BlocTableau
        title="Matrice de flux applicative"
        data={DA.MatriceFlux.MatriceFluxApplicative}
      />
    </BlocTexte>
    <BlocTexte title="Matrices de flux système">
      <BlocTableau
        title="Matrice de flux Systeme"
        data={DA.MatriceFlux.MatriceFluxSysteme}
      />
    </BlocTexte>
  </BlocTitle>
);

const Dimensionnement = ({}) => (
  <BlocTitle backgroundColor="rgb(74, 68, 43)" title="Dimensionnement du SI">
    <BlocTexte title="Justifications PDMA, DMIA, Performances">
      <BlocTableau
        title="Dimensionnement PDP"
        data={DA.Dimensionnement.JustificationPerformance}
      />
    </BlocTexte>
    <BlocTexte title="Justifications allocations ressources matériel">
      <BlocTableau
        title="Dimensionnement Ressources"
        data={DA.Dimensionnement.JustificationDimensionnement}
      />
    </BlocTexte>
  </BlocTitle>
);

const UrlCertificats = ({}) => (
  <BlocTitle backgroundColor="rgb(74, 68, 43)" title="URLs & Certificats">
    <BlocTexte title="PRODUCTION">
      <BlocTexte title="URL 1">
        <BlocTableau
          title="URL de Production"
          data={DA.UrlCertificats.PRODURL1.PRODURL1DATA}
        />
        <BlocTableau
          title="URL de Production"
          data={DA.UrlCertificats.PRODURL1.PRODURL1Setting}
        />
      </BlocTexte>
    </BlocTexte>
    <BlocTexte title="PRODUCTION">
      <BlocTexte title="URL 2">
        <BlocTableau
          title="URL de Production"
          data={DA.UrlCertificats.PRODURL2.PRODURL2DATA}
        />
        <BlocTableau
          title="URL de Production"
          data={DA.UrlCertificats.PRODURL2.PRODURL2Setting}
        />
      </BlocTexte>
    </BlocTexte>
    <BlocTexte title="PRE-PRODUCTION">
      <BlocTexte title="URL 1">
        <BlocTableau
          title="URL de Production"
          data={DA.UrlCertificats.PREPRODURL1.PREPRODURL1DATA}
        />
        <BlocTableau
          title="URL de Production"
          data={DA.UrlCertificats.PREPRODURL1.PREPRODURL1Setting}
        />
      </BlocTexte>
    </BlocTexte>
    <BlocTexte title="URL 2">
      <BlocTableau
        title="URL de Production"
        data={DA.UrlCertificats.PREPRODURL2.PREPRODURL2DATA}
      />
      <BlocTableau
        title="URL de Production"
        data={DA.UrlCertificats.PREPRODURL2.PREPRODURL2Setting}
      />
    </BlocTexte>
  </BlocTitle>
);

const Infogerance = ({}) => (
  <BlocTitle backgroundColor="rgb(74, 68, 43)" title="Infogérance">
    <BlocTexte title="Niveau de prise en charge infogérant">
      <BlocTableau title="PEC" data={DA.Infogerance.PEC} />
    </BlocTexte>
    <BlocTexte title="Plage de maintenance">
      <BlocTableau title="PEC" data={DA.Infogerance.PlageMaintenance} />
    </BlocTexte>
  </BlocTitle>
);

const Sauvegarde = ({}) => (
  <BlocTitle backgroundColor="rgb(74, 68, 43)" title="Sauvegarde">
    <BlocTexte title="Sauvegarde PRODUCTION  quotidienne">
      <BlocTableau
        title="Schéma acteurs & processus"
        data={DA.Sauvegarde.SauvegardePRODQuotidienne}
      />
    </BlocTexte>
    <BlocTexte title="Sauvegarde PRODUCTION  hebdomadaire">
      <BlocTableau
        title="Schéma acteurs & processus"
        data={DA.Sauvegarde.SauvegardePRODHebdomadaire}
      />
    </BlocTexte>
    <BlocTexte title="Sauvegarde PRE-PRODUCTION  quotidienne">
      <BlocTableau
        title="Schéma acteurs & processus"
        data={DA.Sauvegarde.SauvegardePREPRODQuotidienne}
      />
    </BlocTexte>
    <BlocTexte title="Sauvegarde PRE-PRODUCTION  hebdomadaire">
      <BlocTableau
        title="Schéma acteurs & processus"
        data={DA.Sauvegarde.SauvegardePREPRODHebdomadaire}
      />
    </BlocTexte>
  </BlocTitle>
);

const Antivirus = ({}) => (
  <BlocTitle backgroundColor="rgb(74, 68, 43)" title="Antivirus & Supervision">
    <BlocTableau title="Antivirus" data={DA.Antivirus} />
    <BlocTableau title="Supervision" data={DA.Supervision} />
  </BlocTitle>
);

const Documentations = ({}) => (
  <BlocTitle backgroundColor="rgb(74, 68, 43)" title="Documentations">
    <BlocTableau title="Schéma acteurs & processus" data={DA.Documentations} />
  </BlocTitle>
);

const Observations = ({}) => (
  <BlocTitle backgroundColor="rgb(74, 68, 43)" title="Observations">
    <BlocTableau title="Cycle de vie" data={DA.ObservationsMOE} />
    <BlocTableau title="Cycle de vie" data={DA.ObservationsMITECH} />
    <BlocTableau title="Cycle de vie" data={DA.ObservationsPROD} />
  </BlocTitle>
);

const Lifecycle = ({}) => (
  <BlocTitle backgroundColor="rgb(74, 68, 43)" title="Cycle de vie">
    <BlocTableau title="Observation MOE" data={DA.Lifecycle} />
  </BlocTitle>
);

function App() {
  return (
    <div className="App pure-g">
      <Acteurs {...DA} />
      <Fonctionnalites {...DA} />
      <Contraintes {...DA} />
      <Exigences {...DA} />

      <ArchiActeurProcessus {...DA} />
      <ArchiFonctionnel {...DA} />
      <ArchiApplicative {...DA} />
      <ArchiTechnique {...DA} />

      <ServeursComposants {...DA} />
      <MatricesFlux {...DA} />
      <Dimensionnement {...DA} />
      <UrlCertificats {...DA} />

      <Infogerance {...DA} />
      <Sauvegarde {...DA} />
      <Antivirus {...DA} />

      <Documentations {...DA} />
      <Observations {...DA} />
      <Lifecycle {...DA} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
