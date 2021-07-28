import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

function OrderConfirmation() {
  const { address, paymentInfo, pizzaInfo } = useSelector((state: any) => ({
    address: state.order.addressInfo,
    paymentInfo: state.order.paymentInfo,
    pizzaInfo: state.order.pizzaInfo,
  }));

  const handlePlaceOrder = () => {
    let toppingsId = [];
    if (pizzaInfo.topping) {
      for (let [key, value] of Object.entries(pizzaInfo.topping)) {
        if (value) {
          toppingsId.push(key);
        }
      }
    }
    let data = {
      Address: address,
      pizzaDetails: {
        pizzaId: pizzaInfo.pizza,
        sizeId: pizzaInfo.size,
        toppings: toppingsId,
      },
      payment: paymentInfo,
    };
    // Final Contract
    console.log(data);
  };

  return (
    <ConfirmWrap>
      <Title>Order Details</Title>
      {address && address.name ? (
        <CostSection>
          <Ctitle>Address</Ctitle>
          <Cinfo>
            <Text>
              {address.name ? address.name : null} <br></br>
              {address.house ? address.house : null} <br></br>
              {address.street ? address.street : null} <br></br>
              {address.city ? address.city : null} <br></br>
              {address.pincode ? address.pincode : null} <br></br>
              {address.mobile ? address.mobile : null} <br></br>
            </Text>
          </Cinfo>
        </CostSection>
      ) : null}
      {paymentInfo && paymentInfo.cardNumber ? (
        <CostSection>
          <Ctitle>Payment By</Ctitle>
          <Cinfo>
            <Cname>Card Number</Cname>
            <Cprice>{paymentInfo.cardNumber}</Cprice>
          </Cinfo>
          <Cinfo>
            <Cname>Expiry Date</Cname>
            <Cprice>{paymentInfo.expiry}</Cprice>
          </Cinfo>
          <Cinfo>
            <Cname>CVV</Cname>
            <Cprice>{paymentInfo.cvv}</Cprice>
          </Cinfo>
        </CostSection>
      ) : null}
      <PlaceOrder onClick={handlePlaceOrder}>Place Order</PlaceOrder>
    </ConfirmWrap>
  );
}

export default OrderConfirmation;

const Title = styled.div`
  font-size: 24px;
  color: #388e3c;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  padding: 8px 0;
  margin-bottom: 16px;
`;

const ConfirmWrap = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const CostSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0 10px;
  border-bottom: 1px solid #ddd;
`;
const Ctitle = styled.div`
  font-size: 18px;
  color: #a9a7a7;
  font-weight: bold;
`;
const Cinfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 10px;
`;
const Cname = styled.div``;
const Cprice = styled.div``;
const Text = styled.div`
  line-height: 1.6;
`;

const PlaceOrder = styled.button`
  width: 100px;
  height: 40px;
  color: #fff;
  border-radius: 8px;
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  background: #388e3c;
  cursor: pointer;
  &:hover {
    background: #28652a;
  }
`;
