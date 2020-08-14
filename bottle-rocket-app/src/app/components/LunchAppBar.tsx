import React, { FunctionComponent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";

import { RootState } from "../store";
import iconBack from "../../assets/images/ic_webBack@2x.png";
import iconMap from "../../assets/images/icon_map@2x.png";
import { IRestaurant } from "./restaurants/redux/initialState";
import { selectRestaurant } from "./restaurants/redux/actions";

const LunchAppBar: FunctionComponent<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();

  const restaurant = useSelector<RootState, IRestaurant | null>(
    (state) => state.restaurants.restaurant
  );

  const handleUnselectRestaurant = () => {
    dispatch(selectRestaurant(null));
    history.push("/");
  };

  return (
    <div className="lunch-app-bar">
      <AppBar position="fixed" className="app-bar">
        <Toolbar className="tool-bar">
          {restaurant !== null ? (
            <div onClick={() => handleUnselectRestaurant()}>
              <IconButton color="inherit">
                <img src={iconBack} alt="back" className="back-icon" />
              </IconButton>
            </div>
          ) : (
            <div className="placeholder"></div>
          )}
          <Typography variant="h6" className="title">
            Lunch Tyme
          </Typography>
          <IconButton color="inherit">
            <img src={iconMap} alt="map" className="map-icon" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(LunchAppBar);
