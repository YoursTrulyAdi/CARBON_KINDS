// src/components/SignupForm/SignupForm.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  try {
    // Create the user
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // Wait for Firebase to set displayName
    await updateProfile(auth.currentUser, {
      displayName: username,
    });

    // Force reload user to sync the displayName in context
    await auth.currentUser.reload();

    navigate("/dashboard"); 
  } catch (err) {
    setError(err.message);
  }
};


  return (
    <Wrapper>
      <form className="form_container" onSubmit={handleSubmit}>
        <h2 className="title">Create Account</h2>
        <p className="subtitle">Sign up and start your sustainable journey.</p>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="error">{error}</p>}

        <button type="submit" className="btn">
          Sign Up
        </button>

        <p className="note">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f7f1e1;

  .form_container {
    background: #fff;
    padding: 40px 30px;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .title {
    font-size: 1.8rem;
    font-weight: 700;
    color: #66371b;
    text-align: center;
    margin: 0;
  }

  .subtitle {
    font-size: 0.9rem;
    color: #81754b;
    text-align: center;
    margin-bottom: 20px;
  }

  input {
    padding: 10px 15px;
    border-radius: 8px;
    border: 1px solid #e3d8c1;
    outline: none;
    font-size: 1rem;
  }

  input:focus {
    border-color: #b4833d;
  }

  .btn {
    background: #b4833d;
    color: #fff;
    font-weight: 600;
    border: none;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
  }

  .note {
    font-size: 0.85rem;
    text-align: center;
    color: #81754b;
    a {
      color: #66371b;
      font-weight: 600;
      text-decoration: none;
    }
  }

  .error {
    color: red;
    font-size: 0.85rem;
    text-align: center;
  }
`;

export default SignupForm;
