import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Address from "./Address";
import PizzaSelection from "./PizzaSelection";
import Payment from "./Payment";
import OrderSummary from "./OrderSummary";
import OrderConfirmation from "./OrderConfirmation";

function Order() {
  return (
    <OrderWrap>
      <Header>
        <Logo>PizzaHouse</Logo>
        <Navigation>
          <Link href="#">Find Restaurant</Link>
          <Link href="#">Tracking</Link>
        </Navigation>
      </Header>
      <MainBody>
        <OrderHeadline>
          Please provide the details to order your pizza
        </OrderHeadline>
        <OrderInfo>
          <OrderDetails>
            <OrderDetailsWrap>
              <Switch>
                <Route path={"/order/address"} component={Address}></Route>
                <Route path={"/order/pizza"} component={PizzaSelection}></Route>
                <Route path={"/order/payment"} component={Payment}></Route>
                <Route
                  path={"/order/confirmation"}
                  component={OrderConfirmation}
                ></Route>
                <Route path={"/order/"} component={Address}></Route>
              </Switch>
            </OrderDetailsWrap>
          </OrderDetails>
          <CostDetails>
            <OrderSummary />
          </CostDetails>
        </OrderInfo>
      </MainBody>
    </OrderWrap>
  );
}

export default Order;

const OrderWrap = styled.div`
  height: 100vh;
  width: 100%;
  /* background: #000; */
  /* background: #e2dede; */
  background: #fff;
  display: flex;
  flex-direction: column;
  /* padding: 40px; */
  box-sizing: border-box;
`;

const Header = styled.header`
  width: 100%;
  height: 60px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px #ddd;
`;
const Logo = styled.div`
  font-size: 24px;
  font-family: sans-serif;
  color: #000;
`;
const Navigation = styled.nav`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Link = styled.a`
  text-decoration: none;
  color: #000;
  /* border-bottom: 2px solid transparent; */
  &:hover {
    padding-bottom: 8px;
    border-bottom: 2px solid #e22935;
  }
`;
const MainBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* min-height: 600px; */
  padding: 0 40px;
  flex: 1;
  flex-direction: column;
`;

const OrderDetails = styled.div`
  display: flex;
  flex-basis: 70%;
  box-sizing: border-box;
  padding: 20px;
  max-width: 600px;
  flex-direction: column;
`;
const CostDetails = styled.div`
  display: flex;
  flex-basis: 30%;
  box-sizing: border-box;
  padding: 20px;
  max-width: 600px;
  flex-direction: column;
`;
const OrderHeadline = styled.div`
  font-size: 24px;
  color: #000;
  margin-bottom: 20px;
  /* margin-top: -50px; */
`;
const OrderDetailsWrap = styled.div`
  background: #fff;
  box-shadow: 0px 0px 10px #ddd;
  border-radius: 8px;
`;
const OrderInfo = styled.div`
  display: flex;
  width: 80%;
`;
