import React from 'react';
import styled from 'styled-components';

const SignInContainer = styled.div`
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  margin-top: 15px;
  border-radius: 10px;
  width: 100%;
  height: 50px;
  border: 1px solid #CCC;
`;

const Label = styled.label`
  margin-top: 20px;
  width: 100%;
`;

const Subtitle = styled.h3`
  font-size: 13px;
  color: #ada9a9;
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  background: rgb(98, 160, 227);
  color: white;
  border-radius: 10px;
  border: none;
  font-size: 15px;
  font-weight: 700;
  padding: 10px 15px;
`;

const SignIn = () => {
  return (
    <SignInContainer className="sign">
      <Form>
        <Label>
          <Subtitle>Username</Subtitle>
          <Input type="text" />
        </Label>

        <Label>
          <Subtitle>Password</Subtitle>
          <Input type="password" />
        </Label>

        <SubmitButton type="submit">Sign In</SubmitButton>
      </Form>
    </SignInContainer>
  );
};

export default SignIn;
