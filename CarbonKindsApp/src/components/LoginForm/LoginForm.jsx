import React, { useState } from 'react';
import styled from 'styled-components';
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../firebase"; // Only once


const LoginForm = () => {
  const [email, setEmail] = useState("");       
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState("");       
  const navigate = useNavigate();

  // Email/password login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  // Google login
  const handleGoogleSignIn = async () => {
    setError("");
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <StyledWrapper>
      <form className="form_container" onSubmit={handleSubmit}>
        <div className="logo_container">
          <span className="logo_text">EcoFinds</span>
        </div>
        <div className="title_container">
          <p className="title">Welcome Back</p>
          <span className="subtitle">
            Log in to continue your sustainable journey.
          </span>
        </div>
        <br />
        <div className="input_container">
          <label className="input_label" htmlFor="email_field">Email</label>
          <input
            placeholder="name@mail.com"
            type="email"
            id="email_field"
            className="input_field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input_container">
          <label className="input_label" htmlFor="password_field">Password</label>
          <input
            placeholder="Password"
            type="password"
            id="password_field"
            className="input_field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}

        <button type="submit" className="sign-in_btn">Sign In</button>

        <div className="separator">
          <hr className="line" />
          <span>Or</span>
          <hr className="line" />
        </div>

        <button
          type="button"
          className="sign-in_ggl"
          onClick={handleGoogleSignIn}
        >
          <span>Sign In with Google</span>
        </button>

        <p className="note">
          No account? <a href="/signup">Sign up for free!</a>
        </p>
      </form>
    </StyledWrapper>
  );
};

// --- STYLES (unchanged) ---
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f7f1e1;

  .form_container { /* ... same as your current styles ... */ }
  .logo_container { /* ... */ }
  .logo_text { /* ... */ }
  .title_container { /* ... */ }
  .title { /* ... */ }
  .subtitle { /* ... */ }
  .input_container { /* ... */ }
  .input_label { /* ... */ }
  .input_field { /* ... */ }
  .input_field:focus { /* ... */ }
  .sign-in_btn { /* ... */ }
  .sign-in_ggl { /* ... */ }
  .sign-in_ggl:hover { /* ... */ }
  .separator { /* ... */ }
  .separator .line { /* ... */ }
  .note { /* ... */ }
`;

export default LoginForm;
