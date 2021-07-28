import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { setAddressInfo } from "../../actions/orderActions";

function Address() {
  let history = useHistory();
  const dispatch = useDispatch();

  const [addressInfo, updateAddress] = useState({
    name: "",
    housename: "",
    house: "",
    street: "",
    city: "",
    pincode: "",
    mobile: "",
  });

  const [error, showError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNext = (e: any) => {
    e.preventDefault();
    if (
      addressInfo.name === "" ||
      addressInfo.house === "" ||
      addressInfo.street === "" ||
      addressInfo.city === "" ||
      addressInfo.pincode === "" ||
      addressInfo.mobile === ""
    ) {
      showError(true);
    } else {
      dispatch(setAddressInfo(addressInfo));
      history.push("/order/pizza");
    }
  };

  return (
    <AddressWrap>
      <Title>Address details</Title>
      <AddressForm>
        <FormRow>
          {error ? <ErrorText>Please enter all the details</ErrorText> : null}
        </FormRow>
        <FormRow>
          <InputLabel>Name</InputLabel>
          <TextInput
            onChange={handleChange}
            value={addressInfo.name}
            name="name"
            type="text"
          ></TextInput>
        </FormRow>
        <FormRow>
          <InputLabel>House Number</InputLabel>
          <TextInput
            onChange={handleChange}
            name="house"
            value={addressInfo.house}
            type="text"
          ></TextInput>
        </FormRow>
        <FormRow>
          <InputLabel>Street Name</InputLabel>
          <TextInput
            onChange={handleChange}
            name="street"
            value={addressInfo.street}
            type="text"
          ></TextInput>
        </FormRow>

        <FormRow>
          <InputLabel>City</InputLabel>
          <TextInput
            onChange={handleChange}
            name="city"
            value={addressInfo.city}
            type="text"
          ></TextInput>
        </FormRow>
        <FormRow>
          <InputLabel>Postal Code</InputLabel>
          <TextInput
            onChange={handleChange}
            name="pincode"
            value={addressInfo.pincode}
            type="number"
            maxLength={6}
          ></TextInput>
        </FormRow>
        <FormRow>
          <InputLabel>Contact number</InputLabel>
          <TextInput
            onChange={handleChange}
            name="mobile"
            value={addressInfo.mobile}
            type="number"
            maxLength={12}
          ></TextInput>
        </FormRow>
        <NextButton onClick={handleNext}>Next</NextButton>
      </AddressForm>
    </AddressWrap>
  );
}

export default Address;

const AddressWrap = styled.div`
  padding: 20px;
`;

const Title = styled.div`
  font-size: 24px;
  color: #388e3c;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  padding: 8px 0;
  margin-bottom: 16px;
`;
const AddressForm = styled.form``;
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
