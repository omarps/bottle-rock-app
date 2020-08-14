import React, { FunctionComponent } from "react";
import { Grid, Typography } from "@material-ui/core";
import { IRestaurant } from "./redux/initialState";
import ItemCardStyled from "./ItemCardStyled";

const ItemCard: FunctionComponent<{
  restaurant: IRestaurant;
  index: number;
  handleSelectRestaurant: (selectedRestaurant: IRestaurant) => void;
}> = ({ restaurant, index, handleSelectRestaurant }) => {
  return (
    <Grid
      key={`restaurant-grid-${index}`}
      item={true}
      xs={12}
      sm={12}
      md={6}
      lg={6}
      className="card-container"
      onClick={() => handleSelectRestaurant(restaurant)}
    >
      <ItemCardStyled>
        <div
          className="background-card"
          style={{ backgroundImage: `url(${restaurant.backgroundImageURL})` }}
        >
          <div className="title-card">
            <Typography className="restaurant-name">
              {restaurant.name}
            </Typography>
            <Typography className="category-name">
              {restaurant.category}
            </Typography>
          </div>
        </div>
      </ItemCardStyled>
    </Grid>
  );
};

export default ItemCard;
