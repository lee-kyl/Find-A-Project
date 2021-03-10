import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      {/* <Route path="/" exact component={homePage} />

      {/* Routes in Header */}
      {/* <Route path="/item1" component={Item1}></Route> */}
    </Switch>
  );
}
