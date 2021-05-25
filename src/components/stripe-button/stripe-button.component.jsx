import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStrips = price * 100;
  const publishableKey =
    "pk_test_51IupBtD0XmqztOFQ3O80W7jCm1j4IV1ieFBQ5h2IeGFUGVKOmqJdnicrvXZK8ykpW2XcADp7IOHlRx7uIjMgDsty00d1fO5Ew5";

  const onToken = (token) => {
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      lavel="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStrips}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};


export default StripeCheckoutButton;