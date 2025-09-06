import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = auth.currentUser; // Firebase gives current logged-in user

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login"); // redirect to login after logout
    } catch (err) {
      console.error("Logout error:", err.message);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to EcoFinds Dashboard</h1>
      {user ? (
        <p style={styles.text}>Logged in as <b>{user.email}</b></p>
      ) : (
        <p style={styles.text}>No user data found.</p>
      )}
      <button style={styles.logoutBtn} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7F1E1",
    textAlign: "center",
  },
  heading: {
    fontSize: "2rem",
    color: "#66371B",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1rem",
    color: "#3F3F2C",
    marginBottom: "1.5rem",
  },
  logoutBtn: {
    padding: "0.8rem 1.5rem",
    backgroundColor: "#B4833D",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },
};

export default Dashboard;
