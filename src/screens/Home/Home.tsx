import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import pizza from "../../assets/images/pizza2.jpg";

function Home() {
  return (
    <HomeWrap>
      <Header>
        <Logo>PizzaHouse</Logo>
        <Navigation>
          <Links href="#">Find Restaurant</Links>
          <Links href="#">Tracking</Links>
        </Navigation>
      </Header>
      <MainBody>
        <BannerTextWrap>
          <Title>
            Order Tasty & <br /> Fresh Pizza <br />{" "}
            <SpecialText>anytime!!</SpecialText>
          </Title>
          <Subtext>
            Choose from the best pizza's in town and <br /> enjoy with our
            fastest delivery
          </Subtext>
          <OrderNow to={"/order"}>Order Now</OrderNow>
        </BannerTextWrap>
        <BannerImageWrap>
          <Pizza src={pizza} />
        </BannerImageWrap>
      </MainBody>
    </HomeWrap>
  );
}

export default Home;

const HomeWrap = styled.div`
  height: 100vh;
  width: 100%;
  /* background: #000; */
  background: #02090d;
  display: flex;
  flex-direction: column;
  padding: 40px;
  box-sizing: border-box;
`;

const Header = styled.header`
  width: 100%;
  height: 60px;
  /* background: #ddd; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  box-sizing: border-box;
`;
const Logo = styled.div`
  font-size: 24px;
  font-family: sans-serif;
  color: #fff;
`;
const Navigation = styled.nav`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Links = styled.a`
  text-decoration: none;
  color: #fff;
  border-bottom: 2px solid transparent;
  padding-bottom: 8px;
  &:hover {
    border-bottom: 2px solid #e22935;
  }
`;

const MainBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 600px;
  padding: 0 40px;
`;
const BannerTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  /* align-items: center; */
`;
const BannerImageWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const Title = styled.div`
  color: #fff;
  font-size: 48px;
  line-height: 1.4;
`;
const Subtext = styled.div`
  color: #ddd;
  font-size: 24px;
  line-height: 1.4;
  margin: 24px 0;
`;

const SpecialText = styled.div`
  color: #e22935;
`;
const Pizza = styled.img`
  /* color: #e22935; */
`;

const OrderNow = styled(Link)`
  width: 200px;
  height: 50px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
  background: #e22935;
  color: #fff;
  text-decoration: none;
`;
