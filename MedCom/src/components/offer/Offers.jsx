import React from "react";
import "./Offers.css";
import OfferCard from "./offerCard/OfferCard";

const Offers = () => {
  return (
    <div className="offers">
      <OfferCard
        heading="Flat 25% Discount on First 3 Orders"
        code="FIUS3"
        content="Coupon available only for orders Rs. 100 & above, Hurry up, order
            now !!"
      />
      <OfferCard
        heading="Flat 25% Discount on First 3 Orders"
        code="FIUS3"
        content="Coupon available only for orders Rs. 100 & above, Hurry up, order
            now !!"
      />
      <OfferCard
        heading="Flat 25% Discount on First 3 Orders"
        code="FIUS3"
        content="Coupon available only for orders Rs. 100 & above, Hurry up, order
            now !!"
      />
      <OfferCard
        heading="Flat 25% Discount on First 3 Orders"
        code="FIUS3"
        content="Coupon available only for orders Rs. 100 & above, Hurry up, order
            now !!"
      />
    </div>
  );
};

export default Offers;
