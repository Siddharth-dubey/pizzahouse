import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const PIZZA_TYPE: any = {
  1: "Italiano",
  2: "Margehrita",
  3: "Farmhouse",
};
const PIZZA_SIZE_PRICE: any = {
  s: 15,
  m: 20,
  l: 25,
};

const PIZZA_TOPPINGS: any = {
  1: { name: "Olives", price: 3 },
  2: { name: "Pepperoni", price: 4 },
  3: { name: "Mushrooms", price: 2 },
  4: { name: "Pepper", price: 2 },
};
const DELIVERY_FEES: number = 5;

function OrderSummary() {
  const { pizzaInfo } = useSelector((state: any) => ({
    pizzaInfo: state.order.pizzaInfo,
  }));

  const [total, SetTotal] = useState(0);

  useEffect(() => {
    if (pizzaInfo !== "{}" && pizzaInfo.pizza && pizzaInfo.topping) {
      let totalPrice = 0;
      let toppingsPrice =
        (pizzaInfo.topping[1] ? PIZZA_TOPPINGS[1].price : 0) +
        (pizzaInfo.topping[2] ? PIZZA_TOPPINGS[2].price : 0) +
        (pizzaInfo.topping[3] ? PIZZA_TOPPINGS[3].price : 0) +
        (pizzaInfo.topping[4] ? PIZZA_TOPPINGS[4].price : 0);
      totalPrice =
        PIZZA_SIZE_PRICE[pizzaInfo.size] + toppingsPrice + DELIVERY_FEES;
      SetTotal(totalPrice);
    }
    return () => {};
  }, [pizzaInfo]);

  return (
    <CostDetailsWrap>
      <CostTitle>Order Summary</CostTitle>
      {pizzaInfo !== "{}" && pizzaInfo.pizza && pizzaInfo.topping ? (
        <React.Fragment>
          <CostSection>
            <Ctitle>Pizza</Ctitle>
            <Cinfo>
              <Cname>
                {PIZZA_TYPE[pizzaInfo.pizza]} ({pizzaInfo.size})
              </Cname>
              <Cprice>${PIZZA_SIZE_PRICE[pizzaInfo.size]}</Cprice>
            </Cinfo>
          </CostSection>
          <CostSection>
            <Ctitle>Toppings</Ctitle>
            {pizzaInfo.topping[1] ? (
              <Cinfo>
                <Cname>Olives</Cname>
                <Cprice>$3</Cprice>
              </Cinfo>
            ) : null}
            {pizzaInfo.topping[2] ? (
              <Cinfo>
                <Cname>Pepperoni</Cname>
                <Cprice>$4</Cprice>
              </Cinfo>
            ) : null}
            {pizzaInfo.topping[3] ? (
              <Cinfo>
                <Cname>Mushrooms</Cname>
                <Cprice>$2</Cprice>
              </Cinfo>
            ) : null}
            {pizzaInfo.topping[4] ? (
              <Cinfo>
                <Cname>Pepper</Cname>
                <Cprice>$2</Cprice>
              </Cinfo>
            ) : null}
          </CostSection>
          <CostSection>
            <Ctitle>Delivery</Ctitle>
            <Cinfo>
              <Cname>Delivery fees</Cname>
              <Cprice>$5</Cprice>
            </Cinfo>
          </CostSection>
        </React.Fragment>
      ) : null}
      <CostSection>
        <Ctitle>Total</Ctitle>
        <Cinfo>
          <Cname>Total cost</Cname>
          <Cprice>$ {total}</Cprice>
        </Cinfo>
      </CostSection>
    </CostDetailsWrap>
  );
}

export default OrderSummary;

const CostDetailsWrap = styled.div`
  background: #fff;
  box-shadow: 0px 0px 10px #ddd;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const CostTitle = styled.div`
  font-size: 20px;
  color: #388e3c;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
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
