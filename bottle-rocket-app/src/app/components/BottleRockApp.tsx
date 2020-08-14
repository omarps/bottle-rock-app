import React, { FunctionComponent } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Grid } from "@material-ui/core";

import LunchAppBar from "./LunchAppBar";
import LunchBottomNavigation from "./LunchBottomNavigation";
import ListViewPage from "../pages/restaurants/ListViewPage";
import DetailViewPage from "../pages/restaurants/DetailViewPage";
import BottleRockAppStyled from "./BottleRockAppStyled";

const BottleRockApp: FunctionComponent = () => {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <BottleRockAppStyled>
            <Grid container={true} spacing={0}>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/restaurants" />}
              />
              <LunchAppBar />

              <Grid container={true} spacing={0} className="appContainer">
                {/* <TransitionGroup>
                <CSSTransition
                  timeout={300}
                  classNames="fade"
                  key={location.key}
                > */}
                <Switch location={location}>
                  <Route exact path="/restaurants" component={ListViewPage} />
                  <Route exact path="/restaurant" component={DetailViewPage} />
                </Switch>
                {/* </CSSTransition>
              </TransitionGroup> */}
              </Grid>

              <LunchBottomNavigation />
            </Grid>
          </BottleRockAppStyled>
        )}
      />
    </Router>
  );
};

export default BottleRockApp;
