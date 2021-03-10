import React from "react";
import { Router } from "react-router-dom";
import Header from "./Components/Header";
import Routes from "./Routes/routes";
import history from "./Services/history";
import Card from "@material-ui/core/Card";
import { Divider } from "@material-ui/core";

function App() {
  return (
    <>
      <Router history={history}>
        <Card variant="outlined">
            <Header></Header>
            
            <Divider />

            <Routes />
        </Card>
      </Router>
    </>
  );
}

export default App;
