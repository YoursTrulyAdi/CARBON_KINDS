import React, { useState } from "react";
import styled from "styled-components";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const FormContainer = styled.div`
  background-color: #F7F1E1;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h2`
  font-weight: 700;
  margin-bottom: 1rem;
  color: #66371B;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid #81754B;
  border-radius: 6px;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.8rem 1rem;
  background-color: #B4833D;
  color: #F7F1E1;
  border: none;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #a06e2f;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 0.8rem;
`;

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login"); // redirect to login after signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <FormContainer>
      <Title>Create Your Account</Title>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit">Sign Up</Button>
      </form>
    </FormContainer>
  );
};

export default SignupForm;
