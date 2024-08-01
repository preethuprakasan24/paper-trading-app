import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import BuyStock from "./BuyStock";
import SellStock from "./SellStock";

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
  return (
    <List sx={style} aria-label="mailbox folders" id="wishlistItem">
      <div className="  rounded-2 d-flex me-2">
        <ListItem>
          <ListItemText
            primary="NIFTY MIDCAP 100"
            style={{ fontSize: "16px" }}
          />
        </ListItem>
        <div className="d-flex ms-auto align-items-center">
          <BuyStock />
          <SellStock />
          <button
            className="btn   ms-3"
            style={{
              width: "60px",
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
      <Divider component="li" />
      <div className="  rounded-2 d-flex me-2">
        <ListItem>
          <ListItemText
            primary="NIFTY MIDCAP 100"
            style={{ fontSize: "16px" }}
          />
        </ListItem>
        <div className="d-flex ms-auto align-items-center">
          <BuyStock />
          <SellStock />
          <button
            className="btn   ms-2"
            style={{
              width: "60px",
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
      <Divider component="li" />
      <div className="  rounded-2 d-flex me-2">
        <ListItem>
          <ListItemText
            primary="NIFTY MIDCAP 100"
            style={{ fontSize: "16px" }}
          />
        </ListItem>
        <div className="d-flex ms-auto align-items-center">
          <BuyStock />
          <SellStock />
          <button
            className="btn   ms-2"
            style={{
              width: "60px",
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
      <Divider component="li" />
      <div className="  rounded-2 d-flex me-2">
        <ListItem>
          <ListItemText
            primary="NIFTY MIDCAP 100"
            style={{ fontSize: "16px" }}
          />
        </ListItem>
        <div className="d-flex ms-auto align-items-center">
          <BuyStock />
          <SellStock />
          <button
            className="btn   ms-2"
            style={{
              width: "60px",
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
      <Divider component="li" />
      <div className="  rounded-2 d-flex me-2">
        <ListItem>
          <ListItemText
            primary="NIFTY MIDCAP 100"
            style={{ fontSize: "16px" }}
          />
        </ListItem>
        <div className="d-flex ms-auto align-items-center">
          <BuyStock />
          <SellStock />
          <button
            className="btn   ms-2"
            style={{
              width: "60px",
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
      <Divider component="li" />
      <div className="  rounded-2 d-flex me-2">
        <ListItem>
          <ListItemText
            primary="NIFTY MIDCAP 100"
            style={{ fontSize: "16px" }}
          />
        </ListItem>
        <div className="d-flex ms-auto align-items-center">
          <BuyStock />
          <SellStock />
          <button
            className="btn   ms-2"
            style={{
              width: "60px",
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
      <Divider component="li" />
      <div className="  rounded-2 d-flex me-2">
        <ListItem>
          <ListItemText
            primary="NIFTY MIDCAP 100"
            style={{ fontSize: "16px" }}
          />
        </ListItem>
        <div className="d-flex ms-auto align-items-center">
          <BuyStock />
          <SellStock />
          <button
            className="btn   ms-2"
            style={{
              width: "60px",
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
      <Divider component="li" />
      <div className="  rounded-2 d-flex me-2">
        <ListItem>
          <ListItemText
            primary="NIFTY MIDCAP 100"
            style={{ fontSize: "16px" }}
          />
        </ListItem>
        <div className="d-flex ms-auto align-items-center">
          <BuyStock />
          <SellStock />
          <button
            className="btn   ms-2"
            style={{
              width: "60px",
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
      <Divider component="li" />
      <div className="  rounded-2 d-flex me-2">
        <ListItem>
          <ListItemText
            primary="NIFTY MIDCAP 100"
            style={{ fontSize: "16px" }}
          />
        </ListItem>
        <div className="d-flex ms-auto align-items-center">
          <BuyStock />
          <SellStock />
          <button
            className="btn   ms-2"
            style={{
              width: "60px",
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
      <Divider component="li" />
      <div className="  rounded-2 d-flex me-2">
        <ListItem>
          <ListItemText
            primary="NIFTY MIDCAP 100"
            style={{ fontSize: "16px" }}
          />
        </ListItem>
        <div className="d-flex ms-auto align-items-center">
          <BuyStock />
          <SellStock />
          <button
            className="btn   ms-2"
            style={{
              width: "60px",
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
      <Divider component="li" />
      <div className="  rounded-2 d-flex me-2">
        <ListItem>
          <ListItemText
            primary="NIFTY MIDCAP 100"
            style={{ fontSize: "16px" }}
          />
        </ListItem>
        <div className="d-flex ms-auto align-items-center">
          <BuyStock />
          <SellStock />
          <button
            className="btn   ms-2"
            style={{
              width: "60px",
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
      <Divider component="li" />
      <div className="  rounded-2 d-flex me-2">
        <ListItem>
          <ListItemText
            primary="NIFTY MIDCAP 100"
            style={{ fontSize: "16px" }}
          />
        </ListItem>
        <div className="d-flex ms-auto align-items-center">
          <BuyStock />
          <SellStock />
          <button
            className="btn   ms-2"
            style={{
              width: "60px",
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
      <Divider component="li" />
      {/* <ListItem>
        <ListItemText primary="NIFTY MIDCAP 100" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Drafts" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Trash" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Spam" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Spam" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Spam" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Spam" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Spam" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Spam" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Spam" />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary="Spam" />
      </ListItem>
      <Divider component="li" style={{ color: "#7a8288" }} /> */}
      {/* <ListItem>
        <ListItemText primary="Spam" />
      </ListItem> */}
    </List>
  );
}

export default WatchListItem;
