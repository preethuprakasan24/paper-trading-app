import React from "react";
import WatchListItem from "./WatchListItem";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function WatchList() {
  const top100Films = [
    { label: "NIFTY MIDCAP 100" },
    { label: "BANKEX" },
    { label: "NIFTY MIDCAP 100" },
    { label: "NIFTY MIDCAP 100" },
    { label: "NIFTY MIDCAP 100" },
    { label: "BANKEX" },
    { label: "BANKEX" },
    { label: "ALLCAP" },
    { label: "NIFTY COMMODITIES" },
    { label: "NIFTY50 TR 2X LEV" },
    { label: "NIFTY MIDCAP 100" },
    { label: "NIFTY MIDCAP 100" },
    { label: "NIFTY MIDCAP 100" },
    { label: "NIFTY MIDCAP 100" },
    { label: "NIFTY MIDCAP 100" },
    { label: "NIFTY MIDCAP 100" },
    { label: "NIFTY MIDCAP 100" },
    { label: "NIFTY MIDCAP 100" },
    { label: "NIFTY MIDCAP 100" },
    { label: "NIFTY MIDCAP 100" },
    { label: "NIFTY MIDCAP 100" },
    { label: "NIFTY MIDCAP 100" },
    { label: "NIFTY MIDCAP 100" },
    { label: "NIFTY MIDCAP 100" },
    { label: "NIFTY MIDCAP 100" },
    { label: "NIFTY MIDCAP 100" },
    { label: "NIFTY MIDCAP 100" },
    { label: "NIFTY MIDCAP 100" },
    { label: "NIFTY MIDCAP 100" },
    { label: "NIFTY MIDCAP 100" },
    { label: "NIFTY MIDCAP 100" },
    { label: "NIFTY MIDCAP 100" },
    { label: "NIFTY MIDCAP 100" },
    { label: "NIFTY MIDCAP 100" },
    { label: "NIFTY MIDCAP 100" },
    { label: "NIFTY MIDCAP 100" },
    { label: "NIFTY MIDCAP 100" },
    { label: "NIFTY MIDCAP 100" },
  ];

  const symbol = "KO";
  const apiKey = "46834QOT5RZA1N4S";
  const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=full&apikey=${apiKey}`;
  console.log(apiUrl);
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching the API:", error);
    });

  return (
    <div
      className="shadow"
      style={{ backgroundColor: "#272b30", color: "white", marginLeft: "12px" }}
    >
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
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
