import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import FailResult from "../fail-result/fail-result";
import LoginPage from "../login-page/login-page";
import QuestionArtist from "../question-artist/question-artist";
import QuestionGenre from "../question-genre/question-genre";
import SuccessResult from "../success-result/success-result";

const App = (props) => {
  const {errorsCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen errorsCount={errorsCount} />
        </Route>
        <Route exact path="/lose">
          <FailResult />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/dev-artist">
          <QuestionArtist />
        </Route>
        <Route exact path="/dev-genre">
          <QuestionGenre />
        </Route>
        <Route exact path="/result">
          <SuccessResult />
        </Route>
        <Route>
          <h1>Page not found</h1>
        </Route>
      </Switch>
    </BrowserRouter >
  );

};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;
