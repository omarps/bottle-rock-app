export interface IContact {
  phone: string;
  formattedPhone: string;
  twitter: string;
}

export interface ILocation {
  address: string;
  crossStreet: string;
  lat: number;
  lng: number;
  postalCode: string;
  cc: string;
  city: string;
  state: string;
  country: string;
  formattedAddress: string[];
}

export interface IRestaurant {
  name: string;
  backgroundImageURL: string;
  category: string;
  contact: IContact | null;
  location: ILocation;
}

export interface IRestaurantsInitialState {
  restaurants: IRestaurant[];
  getRestaurantsError: string | null;
  restaurant: IRestaurant | null;
}

const initialState: IRestaurantsInitialState = {
  restaurants: [],
  getRestaurantsError: null,
  restaurant: null,
};

export default initialState;
