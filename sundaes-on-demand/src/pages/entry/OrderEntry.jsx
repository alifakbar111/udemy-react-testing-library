import { Button } from "react-bootstrap";
import { useOrderDetails } from "../../contexts/OrderDetails";
import Options from "./Options";

const OrderEntry = ({ setOrderPhase }) => {
  const [orderDetails] = useOrderDetails();
  return (
    <div>
      <h1>Design Your Sundae!</h1>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand Total: {orderDetails.totals.grandTotal}</h2>
      <Button onClick={() => setOrderPhase("review")}>Order Sundae!</Button>
    </div>
  );
};

export default OrderEntry;
