import { Dispatch } from "redux";
import AxiosRequestService from "../../../services/AxiosRequestService";
import {
  GET_RESTAURANTS_BEGIN,
  GET_RESTAURANTS_SUCCESS,
  GET_RESTAURANTS_FAILURE,
} from "./constants";
import {
  IRestaurant,
  IRestaurantsInitialState,
  IContact,
  ILocation,
} from "./initialState";
import { RestaurantsAction } from "./types";
import restaurantsData from "./restaurants.json";

// Local mapping
const dispatchRestaurantsData = (dispatch: Dispatch) => {
  const restaurants = restaurantsData.restaurants.map((element: any) => {
    const contact: IContact | null =
      element.contact !== null
        ? {
            phone: element.contact.phone,
            formattedPhone: element.contact.formattedPhone,
            twitter: element.contact.twitter,
          }
        : null;
    const location: ILocation = {
      address: element.location.address,
      crossStreet: element.location.crossStreet,
      lat: element.location.lat,
      lng: element.location.lng,
      postalCode: `${element.location.postalCode}`,
      cc: element.location.cc,
      city: element.location.city,
      state: element.location.state,
      country: element.location.country,
      formattedAddress: element.location.formattedAddress,
    };
    const restaurant: IRestaurant = {
      name: element.name,
      backgroundImageURL: element.backgroundImageURL,
      category: element.category,
      contact,
      location,
    };
    return restaurant;
  });
  dispatch({
    type: GET_RESTAURANTS_SUCCESS,
    restaurants,
  });
};

export const getRestaurants = () => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch({
      type: GET_RESTAURANTS_BEGIN,
    });

    const request = new AxiosRequestService();

    const url: RequestInfo = `/restaurants`;
    // const url: RequestInfo = `/restaurants.json`;

    const response = await request.get(url);

    if (response.error) {
      dispatch({
        type: GET_RESTAURANTS_FAILURE,
        error: response.error,
      });
    } else {
      // dispatchRestaurantsData(dispatch);
      // service mapping
      const restaurants = (response.data as any)?.map((element: any) => {
        const contact: IContact | null =
          element.contact !== null
            ? {
                phone: element.contact.phone,
                formattedPhone: element.contact.formattedPhone,
                twitter: element.contact.twitter,
              }
            : null;
        const location: ILocation = {
          address: element.location.address,
          crossStreet: element.location.crossStreet,
          lat: element.location.lat,
          lng: element.location.lng,
          postalCode: `${element.location.postalCode}`,
          cc: element.location.cc,
          city: element.location.city,
          state: element.location.state,
          country: element.location.country,
          formattedAddress: element.location.formattedAddress,
        };
        const restaurant: IRestaurant = {
          name: element.name,
          backgroundImageURL: element.backgroundImageURL,
          category: element.category,
          contact,
          location,
        };
        return restaurant;
      });
      dispatch({
        type: GET_RESTAURANTS_SUCCESS,
        restaurants: restaurants,
      });
    }
  };
};

export function reducer(
  state: IRestaurantsInitialState,
  action: RestaurantsAction
): IRestaurantsInitialState {
  switch (action.type) {
    case GET_RESTAURANTS_BEGIN: {
      // Just after a request is sent
      return {
        ...state,
        restaurants: action.restaurants,
        getRestaurantsError: null,
      };
    }

    case GET_RESTAURANTS_SUCCESS: {
      const restaurants = action.restaurants;
      return {
        ...state,
        restaurants,
        getRestaurantsError: null,
      };
    }

    case GET_RESTAURANTS_FAILURE: {
      // The request is failed
      return {
        ...state,
        getRestaurantsError: action.error,
      };
    }
    default:
      return state;
  }
}
