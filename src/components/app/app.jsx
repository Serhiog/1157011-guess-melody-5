import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import FailResult from "../fail-result/fail-result";
import LoginPage from "../login-page/login-page";
import ArtistQuestionScreen from "../question-artist/question-artist";
import GenreQuestionScreen from "../question-genre/question-genre";
import SuccessResult from "../success-result/success-result";
import GameScreen from "../game-screen/game-screen";


const App = (props) => {
  const { errorsCount, questions } = props;
  const [firstQuestion, secondQuestion] = questions;
  const handleOnAnswer = () => { };

  return (

    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={({ history }) => (
            < WelcomeScreen
              onPlayButtonClick={() => history.push(`/game`)}
              errorsCount={errorsCount}
            />
          )}
        />
        <Route exact path="/lose">
          <FailResult />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/dev-artist">
          <ArtistQuestionScreen
            question={secondQuestion}
            onAnswer={handleOnAnswer}
          />
        </Route>
        <Route exact path="/dev-genre">
          <GenreQuestionScreen
            question={firstQuestion}
            onAnswer={handleOnAnswer}
          />
        </Route>
        <Route exact path="/result">
          <SuccessResult />
        </Route>
        <Route exact path="/game">
          <GameScreen
            errorsCount={errorsCount}
            questions={questions}
          />
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
  questions: PropTypes.array.isRequired,
};

export default App;
