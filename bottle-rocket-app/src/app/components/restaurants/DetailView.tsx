import React, { FunctionComponent, useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";

import { IRestaurant } from "./redux/initialState";
import { RootState } from "../../store";

import DetailMap from "./DetailMap";
import DetailViewStyled from "./DetailViewStyled";

const DetailView: FunctionComponent<RouteComponentProps> = ({ history }) => {
  const restaurant = useSelector<RootState, IRestaurant | null>(
    (state) => state.restaurants.restaurant
  );

  useEffect(() => {
    if (restaurant === null) {
      history.push("/");
    }
  }, [restaurant, history]);

  return (
    <DetailViewStyled>
      <div>
        <DetailMap restaurant={restaurant} />
        <div className="names-container">
          <div className="title-container">
            <div className="restaurant-names">
              <Typography className="restaurant-name">
                {restaurant?.name}
              </Typography>
              <Typography className="category-name">
                {restaurant?.category}
              </Typography>
            </div>
          </div>
        </div>
        <div className="address-container">
          <div className="format-address">
            {restaurant?.location.formattedAddress.map(
              (addressLine: string, index: number) => (
                <Typography key={`address-${index}`}>{addressLine}</Typography>
              )
            )}
          </div>
          <Typography className="format-phone">
            {restaurant?.contact?.formattedPhone}
          </Typography>
          <Typography className="format-twitter">
            {restaurant?.contact?.twitter}
          </Typography>
        </div>
      </div>
    </DetailViewStyled>
  );
};

export default withRouter(DetailView);
