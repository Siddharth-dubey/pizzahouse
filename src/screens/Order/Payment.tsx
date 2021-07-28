import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { setPaymentInfo } from "../../actions/orderActions";
import cardValidator from "card-validator";

function Payment() {
  let history = useHistory();
  const dispatch = useDispatch();

  const [paymentInfo, updatePaymentInfo] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [error, showError] = useState(false);
  const [cardError, showCardError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updatePaymentInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNext = (e: any) => {
    e.preventDefault();
    if (
      paymentInfo.cardNumber === "" ||
      paymentInfo.expiry === "" ||
      paymentInfo.cvv === "" ||
      paymentInfo.expiry.length < 4 ||
      paymentInfo.cvv.length < 3
    ) {
      showError(true);
    } else if (!cardValidator.number(paymentInfo.cardNumber).isValid) {
      showCardError(true);
    } else {
      dispatch(setPaymentInfo(paymentInfo));
      history.push("/order/confirmation");
    }
  };

  return (
    <PaymentWrap>
      <Title>Payment information</Title>
      <PaymentForm>
        <FormRow>
          {error ? (
            <ErrorText>Please enter all the details</ErrorText>
          ) : cardError ? (
            <ErrorText>Please enter a valid card</ErrorText>
          ) : null}
        </FormRow>
        <FormRow>
          <InputLabel>Card Number</InputLabel>
          <TextInput
            onChange={handleChange}
            value={paymentInfo.cardNumber}
            name="cardNumber"
            type="number"
          ></TextInput>
        </FormRow>
        <FormGroup>
          <FormRowExpiry>
            <InputLabel>Expiry Date (MM/YY)</InputLabel>
            <TextInput
              maxLength={5}
              onChange={handleChange}
              value={paymentInfo.expiry}
              name="expiry"
              type="text"
            ></TextInput>
          </FormRowExpiry>
          <FormRowCVV>
            <InputLabel>CVV</InputLabel>
            <TextInput
              maxLength={4}
              onChange={handleChange}
              value={paymentInfo.cvv}
              name="cvv"
              type="number"
            ></TextInput>
          </FormRowCVV>
        </FormGroup>
        <NextButton onClick={handleNext}>Next</NextButton>
      </PaymentForm>
    </PaymentWrap>
  );
}

export default Payment;

const PaymentWrap = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const PaymentForm = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 16px 0;
`;

const TextInput = styled.input`
  height: 28px;
  border-radius: 4px;
  border: 1px solid #ddd;
`;
const InputLabel = styled.label`
  margin-bottom: 4px;
  color: #6d6767;
`;

const FormRowExpiry = styled(FormRow)`
  width: 240px;
  margin-right: 30px;
`;
const FormRowCVV = styled(FormRow)`
  width: 140px;
  margin-right: 30px;
`;

const Title = styled.div`
  font-size: 24px;
  color: #388e3c;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  padding: 8px 0;
  margin-bottom: 16px;
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
