import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import { FirebaseAppProvider } from "reactfire";
import firebaseConfig from "./assets/scripts/firebaseConfig";

import "materialize-css/dist/css/materialize.min.css";
import "./App.css";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback={"Cargando datos de firebase..."}>
        <App />
      </Suspense>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
