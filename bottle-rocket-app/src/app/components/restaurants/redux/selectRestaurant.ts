import { Dispatch } from "redux";
import { SELECT_RESTAURANT } from "./constants";
import initialState, { IRestaurant } from "./initialState";
import { RestaurantsAction } from "./types";

export function selectRestaurant(selectedRestaurant: IRestaurant | null) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SELECT_RESTAURANT,
      restaurant: selectedRestaurant,
    });
  };
}

export function reducer(state = initialState, action: RestaurantsAction) {
  switch (action.type) {
    case SELECT_RESTAURANT:
      return {
        ...state,
        restaurant: action.restaurant,
      };
    default:
      return state;
  }
}
