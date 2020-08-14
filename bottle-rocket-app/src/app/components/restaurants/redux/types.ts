import { IRestaurant } from "./initialState";

export type RestaurantsAction = {
  type: string;
  restaurants: IRestaurant[];
  restaurant: IRestaurant;
  error: string | null;
};
