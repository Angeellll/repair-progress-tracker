import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import Card from "@/Components/Client/Info/Progress/Card";

const Wrapper = styled.div`
  width: 75%;
  height: 80%;
  backdrop-filter: blur(1px);
  background-color: rgba(128, 128, 128, 0.1);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  color: #808080;
`;

const Container = styled.div`
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 45%;
  height: 90%;
  display: grid;
  grid-template-rows: 5% 95%;
`;

const Close = styled.div`
  margin: 10px;
  grid-row: 1;

  &:hover {
    cursor: pointer;
  }
`;

const FormContainer = styled.form`
  margin: 10px;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormTitle = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  background: linear-gradient(to right, #0077b6, #48cae4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const InputWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const Input = styled.input`
  color: #808080;
  padding: 8px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  border: 1px solid transparent;
  background: #f7f7f7;
  cursor: pointer;

  &:hover {
    border: 1px solid #03045e;
  }

  &:focus {
    color: #03045e;
    outline: none;
    background-color: #f7f7f7;
  }
`;

const Select = styled.select`
  color: #808080;
  padding: 8px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  border: 1px solid transparent;
  background: #f7f7f7;
  width: 48%;
  cursor: pointer;
`;

const Button = styled.button`
  border-radius: 5px;
  background: var(--03045-e, #023e8a);
  color: white;
  font-weight: 600;
  padding: 10px 25px 10px 25px;
  cursor: pointer;
  border: none;
  margin-top: 30px;

  &:hover {
    background-color: #03045e;
  }
`;

const AddRequest = ({ isOpen, onClose, rowData }) => {
  if (!isOpen) return null;

  const { referenceNumber, fullName, phoneNumber, dateAccepted, estimatedCompletion, toolUnderRepair, assignedRepairman, status, progress } = rowData;


  return (
    <Wrapper>
      <Container>
        <Close>
          <Icon onClick={onClose} icon="mingcute:close-line" color="#03045e" />
        </Close>

        <FormContainer>
          <FormTitle>Repair Request Form</FormTitle>
          <InputWrapper style={{ marginTop: "30px !important" }}>
            <Input type="number" placeholder="Reference Number" readOnly />
          </InputWrapper>
          <InputWrapper>
            <Input type="text" placeholder="Full Name" value={fullName} />
          </InputWrapper>
          <InputWrapper>
            <Input type="number" placeholder="Phone Number" value={phoneNumber} />
          </InputWrapper>
          <InputWrapper>
          <h5 style={{margin:" 0px", fontWeight: "500"}}>Date accepted</h5>
            <Input type="date" placeholder="Date" value={dateAccepted}  />
          </InputWrapper>
          <InputWrapper>
          <h5 style={{margin:" 0px", fontWeight: "500"}}>Estimated completion</h5>
            <Input type="date" placeholder="Date" value={estimatedCompletion}  />
          </InputWrapper>
          <InputWrapper>
            <Input type="text" placeholder="Tool under repair" value={toolUnderRepair}/>
          </InputWrapper>
          <InputWrapper>
            <Input type="text" placeholder="Assigned repairman" value={assignedRepairman}/>
          </InputWrapper>
          <InputWrapper
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Select value={status}> 
              <option readOnly>Status</option>
              <option style={{ color: "#5EBF7F" }}>Finished</option>
              <option style={{ color: "#71C4D7" }}>On-going</option>
              <option style={{ color: "#C85D63" }}>Due</option>
            </Select>
            <Select value={progress}>
              <option readOnly>Progress</option>
              <option>100%</option>
              <option>75%</option>
              <option>50%</option>
              <option>25%</option>
              <option>10%</option>
            </Select>
          </InputWrapper>
          <Button>SAVE CHANGES </Button>
        </FormContainer>
      </Container>
    </Wrapper>
  );
};

export default AddRequest;
