import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import BuyStock from "./BuyStock";
import SellStock from "./SellStock";
import { getCompanyDetailsApi } from "../services/allApi";

const style = {
  p: 0,
  width: "100%",
  maxWidth: "100%",
  borderRadius: 0,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.lightgrey",
};

function WatchListItem() {
  const [company, setCompany] = useState([]);

  const companyDetails = async () => {
    const result = await getCompanyDetailsApi();
    setCompany(result.data.map((item) => item));
  };

  // console.log(company);
  // console.log(symbol);

  useEffect(() => {
    companyDetails();
  }, []);

  const handleClick = async (item) => {
    console.log(item);
    const data = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${item}&outputsize=full&apikey=46834QOT5RZA1N4S`
    );
    data.json().then((res) => {
      console.log(res);
    });
  };

  return (
    <List sx={style} aria-label="mailbox folders" id="wishlistItem">
      {company?.map((item) => (
        <div className="  rounded-2 d-flex me-2">
          <ListItem>
            <button type="button" onClick={() => handleClick(item.symbol)} style={{backgroundColor:"#272b30", color:"white",textAlign:"start"}}>
              <ListItemText primary={item.name} style={{ fontSize: "13px" }} />
            </button>
          </ListItem>
          <div className="d-flex ms-auto align-items-center">
            <BuyStock />
            <SellStock />
            <button
              className="btn  ms-2 "
              style={{
                width: "48px",
                height: "20px",
                fontSize: "12px",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 0,
                lineHeight: "normal",
                boxSizing: "border-box",
                backgroundColor: "grey",
                color: "white",
              }}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      ))}
      <Divider component="li" />
    </List>
  );
}

export default WatchListItem;
