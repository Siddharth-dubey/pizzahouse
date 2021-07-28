import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { setPizzaInfo } from "../../actions/orderActions";

import pizza1 from "../../assets/images/p1.jpeg";
import pizza2 from "../../assets/images/p2.jpeg";
import pizza3 from "../../assets/images/p3.jpeg";
import pizzaSize from "../../assets/images/pizza-size.png";

function PizzaSelection() {
  let history = useHistory();
  const dispatch = useDispatch();

  const { pizzaInfo } = useSelector((state: any) => ({
    pizzaInfo: state.order.pizzaInfo,
  }));

  const [pizza, setPizza] = useState(pizzaInfo.pizza ? pizzaInfo.pizza : 0);
  const [size, setSize] = useState(pizzaInfo.size ? pizzaInfo.size : null);
  const [topping, setTopping] = useState({
    1: pizzaInfo.topping && pizzaInfo.topping[1] ? pizzaInfo.topping[1] : false,
    2: pizzaInfo.topping && pizzaInfo.topping[2] ? pizzaInfo.topping[2] : false,
    3: pizzaInfo.topping && pizzaInfo.topping[3] ? pizzaInfo.topping[3] : false,
    4: pizzaInfo.topping && pizzaInfo.topping[4] ? pizzaInfo.topping[4] : false,
  });

  const [error, showError] = useState(false);

  const handleNext = (e: any) => {
    e.preventDefault();
    if (pizza === 0 || size === null) {
      showError(true);
    } else {
      dispatch(
        setPizzaInfo({
          pizza,
          size,
          topping,
        })
      );
      history.push("/order/payment");
    }
  };

  const handlePizzaSelect = (e: any) => {
    if (e.target.value) {
      setPizza(Number(e.target.value));
    }
  };
  const handleSizeSelect = (e: any) => {
    if (e.target.value) {
      setSize(e.target.value);
    }
  };
  const selectTopping = (e: any) => {
    if (e.target.value) {
      setTopping((prevState) => ({
        ...prevState,
        [e.target.value]: e.target.checked,
      }));
    }
  };

  return (
    <PizzaWrap>
      <Title>Choose your Pizza</Title>
      {error ? <ErrorText>Please select the options</ErrorText> : null}
      <SubText>Select Pizza:</SubText>
      <PizzaPicker>
        <PizzaItem active={pizza === 1} onClick={handlePizzaSelect}>
          <PizzaImg src={pizza1}></PizzaImg>
          <PizzaInp
            type="radio"
            name="italiano"
            value="1"
            onChange={() => {}}
            checked={pizza === 1}
          ></PizzaInp>
          <PizzaName>Italiano</PizzaName>
        </PizzaItem>
        <PizzaItem active={pizza === 2} onClick={handlePizzaSelect}>
          <PizzaImg src={pizza2}></PizzaImg>
          <PizzaInp
            type="radio"
            name="italiano"
            value="2"
            onChange={() => {}}
            checked={pizza === 2}
          ></PizzaInp>
          <PizzaName>Margehrita</PizzaName>
        </PizzaItem>
        <PizzaItem active={pizza === 3} onClick={handlePizzaSelect}>
          <PizzaImg src={pizza3}></PizzaImg>
          <PizzaInp
            type="radio"
            name="italiano"
            value="3"
            onChange={() => {}}
            checked={pizza === 3}
          ></PizzaInp>
          <PizzaName>Farmhouse</PizzaName>
        </PizzaItem>
      </PizzaPicker>
      <SubText>Select Size:</SubText>
      <SizePicker>
        <PizzaItem active={size === "s"} onClick={handleSizeSelect}>
          <PizzaImg src={pizzaSize}></PizzaImg>
          <PizzaInp
            onChange={() => {}}
            type="radio"
            name="size"
            value="s"
            checked
          ></PizzaInp>
          <PizzaName>Small ($15)</PizzaName>
        </PizzaItem>
        <PizzaItem active={size === "m"} onClick={handleSizeSelect}>
          <PizzaImg src={pizzaSize}></PizzaImg>
          <PizzaInp
            onChange={() => {}}
            type="radio"
            name="size"
            value="m"
            checked
          ></PizzaInp>
          <PizzaName>Medium ($20)</PizzaName>
        </PizzaItem>
        <PizzaItem active={size === "l"} onClick={handleSizeSelect}>
          <PizzaImg src={pizzaSize}></PizzaImg>
          <PizzaInp
            onChange={() => {}}
            type="radio"
            name="size"
            value="l"
            checked
          ></PizzaInp>
          <PizzaName>Large ($25)</PizzaName>
        </PizzaItem>
      </SizePicker>
      <ToppingSelector>
        <SubText>Please choose toppings:</SubText>
        <ToppingOptions>
          <Topping>
            <ToppingInp
              type="checkbox"
              name="topping"
              id="olive"
              value="1"
              checked={topping[1]}
              onChange={selectTopping}
            />
            <ToppingLabel htmlFor="olive">Olives (+$3)</ToppingLabel>
          </Topping>
          <Topping>
            <ToppingInp
              checked={topping[2]}
              type="checkbox"
              id="Pepperoni"
              name="topping"
              value="2"
              onChange={selectTopping}
            />
            <ToppingLabel htmlFor="Pepperoni">Pepperoni (+$4)</ToppingLabel>
          </Topping>
          <Topping>
            <ToppingInp
              checked={topping[3]}
              type="checkbox"
              name="topping"
              id="Mushrooms"
              value="3"
              onChange={selectTopping}
            />
            <ToppingLabel htmlFor="Mushrooms">Mushrooms (+$2)</ToppingLabel>
          </Topping>
          <Topping>
            <ToppingInp
              checked={topping[4]}
              type="checkbox"
              name="topping"
              value="4"
              id="Pepper"
              onChange={selectTopping}
            />
            <ToppingLabel htmlFor="Pepper">Pepper (+$2)</ToppingLabel>
          </Topping>
        </ToppingOptions>
      </ToppingSelector>
      <NextButton onClick={handleNext}>Next</NextButton>
    </PizzaWrap>
  );
}

export default PizzaSelection;

const Title = styled.div`
  font-size: 24px;
  color: #388e3c;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  padding: 8px 0;
  margin-bottom: 16px;
`;

const PizzaWrap = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const PizzaPicker = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* margin-top: 20px; */
`;

interface ItemProps {
  active: boolean;
}

const PizzaItem = styled.label<ItemProps>`
  cursor: pointer;
  border: ${(props) => (props.active ? "1px solid blue" : "1px solid #ddd;")};
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const PizzaImg = styled.img`
  width: 100px;
  height: 100px;
`;
const PizzaName = styled.div`
  margin-top: 16px;
`;
const PizzaInp = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const SizePicker = styled(PizzaPicker)``;
const ToppingSelector = styled(PizzaPicker)`
  flex-direction: column;
  margin-bottom: 20px;
`;
const ToppingTitle = styled.div`
  margin: 20px 0;
`;

const ToppingOptions = styled.div``;
const Topping = styled.div`
  margin: 8px 0;
`;
const ToppingInp = styled.input``;
const ToppingLabel = styled.label``;

const SubText = styled.div`
  margin: 20px 0;
  font-size: 18px;
`;

const NextButton = styled.button`
  width: 100px;
  height: 40px;
  color: #fff;
  border-radius: 8px;
  display: flex;
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

const ErrorText = styled.div`
  color: #f00;
`;
