import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faPhone,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: " 100%" }} >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ backgroundColor: "#007bff", minHeight: "60px" }}
      >
        <BottomNavigationAction
          label="Support"
          icon={<FontAwesomeIcon icon={faPhone} />}
          style={{ color: "white" }}
        />
        <BottomNavigationAction
          label="Invite Friends"
          icon={<FontAwesomeIcon icon={faUserGroup} />}
          style={{ color: "white" }}
        />
        <BottomNavigationAction
          label="User Manual"
          icon={<FontAwesomeIcon icon={faBook} />}
          style={{ color: "white" }}
        />
      </BottomNavigation>
    </Box>
  );
}

export default Footer;
