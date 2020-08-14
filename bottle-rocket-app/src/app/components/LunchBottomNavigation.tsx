import React, { FunctionComponent } from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Responsive } from "typed-responsive-react";

import tabLunch from "../../assets/images/tab_lunch@2x.png";
import tabInternets from "../../assets/images/tab_internets@2x.png";

const LunchBottomNavigation: FunctionComponent = () => {
  return (
    <Responsive displayIn={["Mobile"]}>
      <BottomNavigation
        showLabels
        className="lunch-bottom-navigation"
        value="lunch"
      >
        <BottomNavigationAction
          label="lunch"
          value="lunch"
          className="navigation-label"
          selected
          icon={<img src={tabLunch} alt="lunch" className="navigation-icon" />}
        />
        <BottomNavigationAction
          label="internets"
          value="internets"
          className="navigation-label"
          icon={
            <img
              src={tabInternets}
              alt="internets"
              className="navigation-icon"
            />
          }
        />
      </BottomNavigation>
    </Responsive>
  );
};

export default LunchBottomNavigation;
