import React, { FunctionComponent, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";

import { RootState } from "../../store";
import { IRestaurant } from "./redux/initialState";
import { getRestaurants, selectRestaurant } from "./redux/actions";
import ItemCard from "./ItemCard";

const ListView: FunctionComponent<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();

  const restaurants = useSelector<RootState, IRestaurant[]>(
    (state) => state.restaurants.restaurants
  );

  const handleSelectRestaurant = (selectedRestaurant: IRestaurant) => {
    dispatch(selectRestaurant(selectedRestaurant));
    history.push("/restaurant");
  };

  useEffect(() => {
    dispatch(getRestaurants());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return restaurants && restaurants !== null ? (
    <>
      {restaurants.map((restaurant: IRestaurant, index: number) => (
        <ItemCard
          key={`restaurant-card-${index}`}
          restaurant={restaurant}
          index={index}
          handleSelectRestaurant={handleSelectRestaurant}
        />
      ))}
    </>
  ) : null;
};

export default withRouter(ListView);
