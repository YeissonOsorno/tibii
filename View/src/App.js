import React from "react";

// Importacion del manejador de rutas //
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Importacion de paginas //
import ClientSigin from './pages/client/Sigin/Sigin.jsx';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/client/sigin" component={ClientSigin} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
