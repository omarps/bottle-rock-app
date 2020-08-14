import React, { FunctionComponent, useState } from "react";
import GoogleMapReact from "google-map-react";
import { IRestaurant } from "./redux/initialState";

import Marker from "./Marker";

const DetailMap: FunctionComponent<{ restaurant: IRestaurant | null }> = ({
  restaurant,
}) => {
  const [show, setShow] = useState(false);

  const handleChildClick = (hoverKey: any, childProps: any) => {
    setShow(!show);
  };

  return (
    <div className="map-container">
      {restaurant !== null && (
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_API_KEY as string,
          }}
          defaultCenter={{
            lat: restaurant.location.lat,
            lng: restaurant.location.lng,
          }}
          defaultZoom={15}
          options={{
            mapTypeControl: false,
            streetViewControl: false,
            zoomControl: true,
            fullscreenControl: false,
            minZoom: 2,
            maxZoom: 20,
          }}
          onChildClick={handleChildClick}
        >
          <Marker
            lat={restaurant.location.lat}
            lng={restaurant.location.lng}
            restaurant={restaurant}
            show={show}
          />
        </GoogleMapReact>
      )}
    </div>
  );
};

export default DetailMap;
