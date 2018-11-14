import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import DA from "./da.json";

const BlocTexte = ({ title, children }) => (
  <table
    class="pure-table "
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

const formatCell = value => {
  if (value === true) {
    return "✔";
  } else if (value === false) {
    return "🚫";
  } else {
    return value;
  }
};

const BlocTableau = ({ title, data }) => {
  const keys = Object.keys(data[0]);
  return (
    <table
      class="pure-table  pure-table-bordered"
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
          {keys.map(k => (
            <th>{k}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr>
            {keys.map(k => (
              <td>{formatCell(row[k])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Acteurs = ({}) => (
  <div style={{ border: "1px solid rgb(95, 74, 121)", margin: 10 }}>
    <div
      style={{
        background: "#5f4a79",
        height: 40,
        fontSize: "1.4em",
        lineHeight: "40px",
        color: "white"
      }}
    >
      Projet - acteurs
    </div>
    <div style={{ padding: 10, background: "#f2eff5" }}>
      <BlocTexte title="Nom du Projet">{DA.Acteurs.NomProjet}</BlocTexte>
      <BlocTexte title="Contexte  du projet">
        {DA.Acteurs.ContexteProjet}
      </BlocTexte>
      <BlocTexte title="Objectifs du projet">
        <ul>
          {DA.Acteurs.ObjectifsProjet.map(o => (
            <li>{o}</li>
          ))}
        </ul>
      </BlocTexte>
      <BlocTexte title="Enjeux du projet">
        <ul>
          {DA.Acteurs.EnjeuxProjet.map(o => (
            <li>{o}</li>
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
    </div>
  </div>
);

const Fonctionnalites = ({}) => (
  <div style={{ border: "1px solid rgb(95, 74, 121)", margin: 10 }}>
    <div
      style={{
        background: "rgb(199, 145, 65)",
        height: 40,
        fontSize: "1.4em",
        lineHeight: "40px",
        color: "white"
      }}
    >
      Fonctionnalites - Données
    </div>
    <div style={{ padding: 10, background: "#f2eff5" }}>
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
    </div>
  </div>
);

const Contraintes = ({}) => (
  <div style={{ border: "1px solid rgb(95, 74, 121)", margin: 10 }}>
    <div
      style={{
        background: "rgb(199, 145, 65)",
        height: 40,
        fontSize: "1.4em",
        lineHeight: "40px",
        color: "white"
      }}
    >
      Contraintes - Volumétrie
    </div>
    <div style={{ padding: 10, background: "#f2eff5" }}>
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
        <BlocTableau
          title="Acteurs"
          data={DA.Contraintes.ReductionVolumetrie}
        />
      </BlocTexte>
    </div>
  </div>
);

const Exigences = ({}) => (
  <div style={{ border: "1px solid rgb(95, 74, 121)", margin: 10 }}>
    <div
      style={{
        background: "rgb(199, 145, 65)",
        height: 40,
        fontSize: "1.4em",
        lineHeight: "40px",
        color: "white"
      }}
    >
      Exigences non fonctionnelles
    </div>
    <div style={{ padding: 10, background: "#f2eff5" }}>
      <BlocTexte title="Exigences sur les données">
        <BlocTableau title="DICT" data={DA.Exigences.DICT} />
        <BlocTableau title="EBIOSCNIL" data={DA.Exigences.EBIOSCNIL} />
      </BlocTexte>

      <BlocTexte title="Période de service">
        <BlocTableau
          title="Periode Service"
          data={DA.Exigences.PeriodeService}
        />
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
        <BlocTableau
          title="Exploitabilité"
          data={DA.Exigences.Exploitabilité}
        />
        <BlocTableau
          title="Exploitabilité Impacts"
          data={DA.Exigences.ExploitabiliteImpact}
        />
      </BlocTexte>
    </div>
  </div>
);

const ArchiActeurProcessus = ({}) => (
  <div style={{ border: "1px solid rgb(95, 74, 121)", margin: 10 }}>
    <div
      style={{
        background: "rgb(199, 145, 65)",
        height: 40,
        fontSize: "1.4em",
        lineHeight: "40px",
        color: "white"
      }}
    >
      Schèma d'architecture acteurs et processus
    </div>
    <div style={{ padding: 10, background: "#f2eff5" }}>
      <BlocTableau
        title="Schéma acteurs & processus"
        data={DA.ArchiActeurProcessus}
      />
    </div>
  </div>
);

const ArchiFonctionnel = ({}) => (
  <div style={{ border: "1px solid rgb(95, 74, 121)", margin: 10 }}>
    <div
      style={{
        background: "rgb(199, 145, 65)",
        height: 40,
        fontSize: "1.4em",
        lineHeight: "40px",
        color: "white"
      }}
    >
      Schèma d'architecture fonctionnelle
    </div>
    <div style={{ padding: 10, background: "#f2eff5" }}>
      <BlocTableau
        title="Schéma acteurs & processus"
        data={DA.ArchiFonctionnel}
      />
    </div>
  </div>
);

const ArchiApplicative = ({}) => (
  <div style={{ border: "1px solid rgb(95, 74, 121)", margin: 10 }}>
    <div
      style={{
        background: "rgb(199, 145, 65)",
        height: 40,
        fontSize: "1.4em",
        lineHeight: "40px",
        color: "white"
      }}
    >
      Schèma d'architecture applicative
    </div>
    <div style={{ padding: 10, background: "#f2eff5" }}>
      <BlocTableau
        title="Schéma acteurs & processus"
        data={DA.ArchiApplicative}
      />
    </div>
  </div>
);

const ArchiTechnique = ({}) => (
  <div style={{ border: "1px solid rgb(95, 74, 121)", margin: 10 }}>
    <div
      style={{
        background: "rgb(199, 145, 65)",
        height: 40,
        fontSize: "1.4em",
        lineHeight: "40px",
        color: "white"
      }}
    >
      Schèma d'architecture acteurs et processus
    </div>
    <div style={{ padding: 10, background: "#f2eff5" }}>
      <BlocTableau
        title="Schéma acteurs & processus"
        data={DA.ArchiTechnique}
      />
    </div>
  </div>
);

const ServeursComposants = ({}) => (
  <div style={{ border: "1px solid rgb(95, 74, 121)", margin: 10 }}>
    <div
      style={{
        background: "rgb(199, 145, 65)",
        height: 40,
        fontSize: "1.4em",
        lineHeight: "40px",
        color: "white"
      }}
    >
      Serveurs & Composants applicatifs
    </div>
    <div style={{ padding: 10, background: "#f2eff5" }}>
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
    </div>
  </div>
);

const MatricesFlux = ({}) => (
  <div style={{ border: "1px solid rgb(95, 74, 121)", margin: 10 }}>
    <div
      style={{
        background: "rgb(199, 145, 65)",
        height: 40,
        fontSize: "1.4em",
        lineHeight: "40px",
        color: "white"
      }}
    >
      Matrices des flux applicatifs & système
    </div>
    <div style={{ padding: 10, background: "#f2eff5" }}>
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
    </div>
  </div>
);

const Dimmenssionnement = ({}) => (
  <div style={{ border: "1px solid rgb(95, 74, 121)", margin: 10 }}>
    <div
      style={{
        background: "rgb(199, 145, 65)",
        height: 40,
        fontSize: "1.4em",
        lineHeight: "40px",
        color: "white"
      }}
    >
      Dimmenssionnement du SI
    </div>
    <div style={{ padding: 10, background: "#f2eff5" }}>
      <BlocTexte title="Justifications PDMA, DMIA, Performances">
        <BlocTableau
          title="Dimmenssionnement PDP"
          data={DA.Dimmenssionnement.JustificationPerformance}
        />
      </BlocTexte>
      <BlocTexte title="Justifications allocations ressources matériel">
        <BlocTableau
          title="Dimmenssionnement Ressources"
          data={DA.Dimmenssionnement.JustificationDimmenssionnement}
        />
      </BlocTexte>
    </div>
  </div>
);

const UrlCertificats = ({}) => (
  <div style={{ border: "1px solid rgb(95, 74, 121)", margin: 10 }}>
    <div
      style={{
        background: "rgb(199, 145, 65)",
        height: 40,
        fontSize: "1.4em",
        lineHeight: "40px",
        color: "white"
      }}
    >
      URLs & Certificats
    </div>
    <div style={{ padding: 10, background: "#f2eff5" }}>
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
    </div>
  </div>
);

const Infogerance = ({}) => (
  <div style={{ border: "1px solid rgb(95, 74, 121)", margin: 10 }}>
    <div
      style={{
        background: "rgb(199, 145, 65)",
        height: 40,
        fontSize: "1.4em",
        lineHeight: "40px",
        color: "white"
      }}
    >
      Infogérance
    </div>
    <div style={{ padding: 10, background: "#f2eff5" }}>
      <BlocTexte title="Niveau de prise en charge infogérant">
        <BlocTableau title="PEC" data={DA.Infogerance.PEC} />
      </BlocTexte>
      <BlocTexte title="Plage de maintenance">
        <BlocTableau title="PEC" data={DA.Infogerance.PlageMaintenance} />
      </BlocTexte>
    </div>
  </div>
);

const Sauvegarde = ({}) => (
  <div style={{ border: "1px solid rgb(95, 74, 121)", margin: 10 }}>
    <div
      style={{
        background: "rgb(199, 145, 65)",
        height: 40,
        fontSize: "1.4em",
        lineHeight: "40px",
        color: "white"
      }}
    >
      Sauvegarde
    </div>
    <div style={{ padding: 10, background: "#f2eff5" }}>
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
    </div>
  </div>
);

const Antivirus = ({}) => (
  <div style={{ border: "1px solid rgb(95, 74, 121)", margin: 10 }}>
    <div
      style={{
        background: "rgb(199, 145, 65)",
        height: 40,
        fontSize: "1.4em",
        lineHeight: "40px",
        color: "white"
      }}
    >
      Antivirus & Supervision
    </div>
    <div style={{ padding: 10, background: "#f2eff5" }}>
      <BlocTableau title="Antivirus" data={DA.Antivirus} />
      <BlocTableau title="Supervision" data={DA.Supervision} />
    </div>
  </div>
);

const Documentations = ({}) => (
  <div style={{ border: "1px solid rgb(95, 74, 121)", margin: 10 }}>
    <div
      style={{
        background: "rgb(199, 145, 65)",
        height: 40,
        fontSize: "1.4em",
        lineHeight: "40px",
        color: "white"
      }}
    >
      Documentations
    </div>
    <div style={{ padding: 10, background: "#f2eff5" }}>
      <BlocTableau
        title="Schéma acteurs & processus"
        data={DA.Documentations}
      />
    </div>
  </div>
);

const Observations = ({}) => (
  <div style={{ border: "1px solid rgb(95, 74, 121)", margin: 10 }}>
    <div
      style={{
        background: "rgb(199, 145, 65)",
        height: 40,
        fontSize: "1.4em",
        lineHeight: "40px",
        color: "white"
      }}
    >
      Observations
    </div>
    <div style={{ padding: 10, background: "#f2eff5" }}>
      <BlocTableau title="Cycle de vie" data={DA.ObservationsMOE} />
      <BlocTableau title="Cycle de vie" data={DA.ObservationsMITECH} />
      <BlocTableau title="Cycle de vie" data={DA.ObservationsPROD} />
    </div>
  </div>
);

const Lifecycle = ({}) => (
  <div style={{ border: "1px solid rgb(95, 74, 121)", margin: 10 }}>
    <div
      style={{
        background: "rgb(199, 145, 65)",
        height: 40,
        fontSize: "1.4em",
        lineHeight: "40px",
        color: "white"
      }}
    >
      Cycle de vie
    </div>
    <div style={{ padding: 10, background: "#f2eff5" }}>
      <BlocTableau title="Observation MOE" data={DA.Lifecycle} />
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
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
      <Dimmenssionnement {...DA} />
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
