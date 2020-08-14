import initialState from "./initialState";
import { IRestaurantsInitialState } from "./initialState";
import { RestaurantsAction } from "./types";

import { reducer as getRestaurantsReducer } from "./getRestaurants";
import { reducer as selectRestaurantReducer } from "./selectRestaurant";

// import all the actions and add these actions to the reducers array:
const reducers = [getRestaurantsReducer, selectRestaurantReducer];

export default function reducer(
  state: IRestaurantsInitialState = initialState,
  action: RestaurantsAction
): IRestaurantsInitialState {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
