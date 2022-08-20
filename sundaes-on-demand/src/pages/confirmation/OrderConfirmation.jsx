import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useOrderDetails } from "../../contexts/OrderDetails";

const OrderConfirmation = ({ setOrderPhase }) => {
  const [, , resetOrder] = useOrderDetails();
  const [orderNumber, setOrderNumber] = useState(null);

  function handleClick() {
    resetOrder();

    setOrderPhase("inProgress");
  }

  useEffect(() => {
    axios
      .post(`http://localhost:3030/order`)
      .then((response) => {
        setOrderNumber(response.data.orderNumber);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (orderNumber) {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Thank You!</h1>
        <p>your order number is {orderNumber}</p>
        <p>as per our terms and conditions, nothing will happen now</p>
        <Button onClick={handleClick}>Create New Order</Button>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default OrderConfirmation;
