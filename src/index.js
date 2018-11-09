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
      <BlocTableau title="Planning" data={DA.Acteurs.PlanningProjet} />
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
      <BlocTableau
        title="Acteurs"
        data={DA.Fonctionnalites.FonctionnalitesApplicatif}
      />
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
      <Acteurs {...DA} />
      <Fonctionnalites {...DA} />
      <Contraintes {...DA} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
