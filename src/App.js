import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";
import { AuthController, useUserContext } from "./contexts/user";
import AuthenticatedApp from "./components/AuthenticatedApp";
import { Main } from './elements'

function App() {
  return (
    <Router>
      <AuthController>
        <Main>
          <AuthOrLogin />
        </Main>
      </AuthController>
    </Router>
  );
}

const AuthOrLogin = () => {
  const user = useUserContext();

  return user.email ? <AuthenticatedApp /> : <Login />;
};

export default App;
