import React from "react";
import { Paper, Typography, Box } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";

const InfoWindow = ({ restaurant }: any) => (
  <div
    style={{
      width: 120,
      height: 80,
      border: "1px solid #000000",
      borderRadius: "5px",
      backgroundColor: "#ffffff",
      padding: "5px",
      fontSize: 10,
    }}
  >
    {restaurant.name}
    {restaurant.location.formattedAddress}
    {restaurant.location.formattedPhone}
  </div>
);

const Marker = ({ restaurant, show, $hover }: any) => {
  console.log("$hover event if needed", $hover); // <<<
  return (
    <React.Fragment>
      <Paper className="marker-paper">
        <Box display="flex">
          {show ? (
            <InfoWindow
              show={show}
              restaurant={restaurant}
              className="info-window"
            />
          ) : (
            <>
              <RoomIcon />
              <Typography variant="caption">{restaurant.name}</Typography>
            </>
          )}
        </Box>
      </Paper>
    </React.Fragment>
  );
};

export default Marker;
