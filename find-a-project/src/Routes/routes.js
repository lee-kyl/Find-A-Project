import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { SignUpForm } from "../Components/SignUpForm";
import HomePage from "../Pages/HomePage";
import { SignInForm } from "../Components/SignInForm";
import Profile from "../Pages/Profile";
<<<<<<< HEAD
import Setting from "../Components/ProfileChange";
import Skills from "../Components/ProfileSkills";
=======
import PostPage from "../Pages/PostPage";

>>>>>>> 8311eba31c25ac583ba897d6a6394674578143d6
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      {/* <Route path="/" exact component={homePage} />
      {/* Routes in Header */}
      {/* <Route path="/item1" component={Item1}></Route> */}
      <Route path="/signup" exact component={SignUpForm} />
      <Route path="/signin" exact component={SignInForm} />
      <Route path="/Profile" exact component={Profile} />
<<<<<<< HEAD
      <Route path="/Setting" exact component={Setting}/>
=======
      <Route path="/post/:id" exact component={PostPage} />
>>>>>>> 8311eba31c25ac583ba897d6a6394674578143d6
    </Switch>
  );
}
