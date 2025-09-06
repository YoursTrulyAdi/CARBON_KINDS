import React from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm/LoginForm";

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  background-color: #3F3F2C; /* Earth Green */
`;

const LoginPage = () => {
  return (
    <PageWrapper>
      <LoginForm />
    </PageWrapper>
  );
};

export default LoginPage;
