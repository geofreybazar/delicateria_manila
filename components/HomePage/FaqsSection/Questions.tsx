"use client";

import { useState } from "react";

import { HiMiniPlus, HiMiniMinus } from "react-icons/hi2";
import Collapse from "@mui/material/Collapse";

const Questions = () => {
  const [typesOfMeats, setTypesOfMeats] = useState(false);
  const [shippingHandled, setShippingHandled] = useState(false);
  const [policyReturn, setPolicyReturn] = useState(false);
  const [meatFrozen, setMeatFrozen] = useState(false);
  const [discount, setDiscount] = useState(false);

  return (
    <div className='flex flex-col gap-7  lg:text-xl'>
      <div>
        <div
          className='flex justify-between items-center border-t-2 pb-1 lg:pb-2 border-pink cursor-pointer'
          onClick={() => setTypesOfMeats(!typesOfMeats)}
        >
          <p>What types of meat?</p>
          {typesOfMeats ? <HiMiniMinus /> : <HiMiniPlus />}
        </div>
        <Collapse in={typesOfMeats} timeout='auto' unmountOnExit>
          <p className='py-5 font-light'>
            We offer a wide selection of high-quality meats, with most of our
            products imported from Europe. Our range includes beef, pork,
            chicken, cold cuts, sausages, and seafood — all carefully curated to
            meet premium standards.
          </p>
        </Collapse>
      </div>
      <div>
        <div
          className='flex justify-between items-center border-t-2 pb-1 lg:pb-2 border-pink cursor-pointer'
          onClick={() => setShippingHandled(!shippingHandled)}
        >
          <p>How is shipping handled?</p>
          {shippingHandled ? <HiMiniMinus /> : <HiMiniPlus />}
        </div>
        <Collapse in={shippingHandled} timeout='auto' unmountOnExit>
          <p className='py-5 font-light'>
            All deliveries are handled exclusively by our in-house delivery
            team. This allows us to ensure every order is carefully packed,
            temperature-controlled, and delivered on time and in perfect
            condition. By managing our own deliveries, we maintain full control
            over freshness, quality, and customer satisfaction.
          </p>
        </Collapse>
      </div>
      <div>
        <div
          className='flex justify-between items-center border-t-2 pb-1 lg:pb-2 border-pink cursor-pointer'
          onClick={() => setPolicyReturn(!policyReturn)}
        >
          <p>What is your return policy?</p>
          {policyReturn ? <HiMiniMinus /> : <HiMiniPlus />}
        </div>
        <Collapse in={policyReturn} timeout='auto' unmountOnExit>
          <p className='py-5 font-light'>
            We want you to be satisfied with your purchase. If you receive a
            damaged or incorrect item, please contact us within 48 hours for a
            resolution. Unfortunately, we cannot accept returns on perishable
            items.
          </p>
        </Collapse>
      </div>
      <div>
        <div
          className='flex justify-between items-center border-t-2 pb-1 lg:pb-2 border-pink cursor-pointer'
          onClick={() => setMeatFrozen(!meatFrozen)}
        >
          <p>Are the meats frozen?</p>
          {meatFrozen ? <HiMiniMinus /> : <HiMiniPlus />}
        </div>
        <Collapse in={meatFrozen} timeout='auto' unmountOnExit>
          <p className='py-5 font-light'>
            Our meats are flash-frozen to preserve freshness and flavor. They
            are shipped in insulated packaging to maintain the cold chain.
            Please follow the storage instructions upon receipt.
          </p>
        </Collapse>
      </div>
      <div>
        <div
          className='flex justify-between items-center border-t-2 pb-1 lg:pb-2 border-pink cursor-pointer'
          onClick={() => setDiscount(!discount)}
        >
          <p>Do you offer discounts?</p>
          {discount ? <HiMiniMinus /> : <HiMiniPlus />}
        </div>
        <Collapse in={discount} timeout='auto' unmountOnExit>
          <p className='py-5 font-light'>
            Yes, we offer seasonal promotions and discounts for bulk purchases.
            Subscribe to our newsletter to stay updated on the latest deals.
            Check our website regularly for special offers.
          </p>
        </Collapse>
      </div>
    </div>
  );
};

export default Questions;
