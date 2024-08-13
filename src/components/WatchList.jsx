import React from "react";
import WatchListItem from "./WatchListItem";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function WatchList() {
  return (
    <div
      className="shadow"
      style={{ backgroundColor: "#272b30", color: "white", marginLeft: "12px" }}
    >
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        // options={}
        sx={{ width: "100%" }}
        renderInput={(params) => (
          <TextField
            className="mt-3"
            {...params}
            label="Search"
            InputLabelProps={{
              style: { color: "white" },
            }}
          />
        )}
      />

      <WatchListItem />
    </div>
  );
}

export default WatchList;
