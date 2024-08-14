import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function BuyStock({ buydata, apiData }) {
  const [show, setShow] = useState(false);

  const [buy, setBuy] = useState({
    buy: 0,
    qty: 0,
    price: 0,
  });

  console.log(buy);

  const [highValue, setHighValue] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(buydata);

  useEffect(() => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const yesterdayDate = yesterday.toISOString().split("T")[0];

    if (
      apiData &&
      apiData["Time Series (Daily)"] &&
      apiData["Time Series (Daily)"][yesterdayDate]
    ) {
      const yesterdayData = apiData["Time Series (Daily)"][yesterdayDate];
      setHighValue(yesterdayData["2. high"]); // Access the high value for yesterday
    } else {
      console.log("No data for yesterday.");
    }
  }, [apiData]);

  console.log(highValue);

  useEffect(() => {
    if (highValue && buy.qty) {
      setBuy((prevBuy) => ({
        ...prevBuy,
        price: highValue * buy.qty,
      }));
    }
  }, [buy.qty, highValue]);
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="btn "
          onClick={handleShow}
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
            backgroundColor: "#4184f3",
            color: "white",
          }}
        >
          <b>B</b>
        </button>
      </div>
      <Modal show={show} onHide={handleClose} size="sm" centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-info" style={{ fontSize: "14px" }}>
            {buydata.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row ">
            <div className="col-md-12">
              <div className="mb-3 mt-5">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Current Value"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    placeholder="1"
                    value={highValue || ""}
                    readOnly
                  />
                </FloatingLabel>
              </div>
              <div className="mb-3">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Qty."
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    placeholder="1"
                    onChange={(e) =>
                      setBuy((prevBuy) => ({
                        ...prevBuy,
                        qty: e.target.value,
                      }))
                    }
                  />
                </FloatingLabel>
              </div>
              <div className="mb-3">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Price"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    placeholder="0.05"
                    step="0.05"
                    value={buy.price}
                    readOnly
                  />
                </FloatingLabel>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose} className="w-100">
            Buy
          </Button>
          <Button variant="secondary" onClick={handleClose} className="w-100">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default BuyStock;
