// src/components/LoginForm/LoginForm.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { auth, googleProvider } from "../../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // Redirect to home
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Wrapper>
      <form className="form_container" onSubmit={handleSubmit}>
        <h2 className="title">Welcome Back</h2>
        <p className="subtitle">Log in to continue your sustainable journey.</p>

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
          Sign In
        </button>

        <div className="separator">Or</div>

        <button type="button" className="btn google" onClick={handleGoogleLogin}>
          Sign In with Google
        </button>

        <p className="note">
          No account? <a href="/signup">Sign up here</a>
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

  .btn.google {
    background: #fff;
    color: #66371b;
    border: 1px solid #e3d8c1;
  }

  .separator {
    text-align: center;
    color: #81754b;
    margin: 10px 0;
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

export default LoginForm;
