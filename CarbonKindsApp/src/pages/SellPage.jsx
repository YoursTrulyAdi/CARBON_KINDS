import React from "react";

const SellPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Sell Your Product</h1>
      <p style={styles.text}>
        List your pre-loved item here and give it a new life ✨
      </p>

      <form style={styles.form}>
        <input type="text" placeholder="Product Name" style={styles.input} />
        <textarea placeholder="Product Description" style={styles.textarea} />
        <input type="number" placeholder="Price (₹)" style={styles.input} />
        <input type="file" style={styles.fileInput} />
        <button type="submit" style={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F7F1E1",
    padding: "2rem",
  },
  heading: {
    fontSize: "2rem",
    color: "#66371B",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1rem",
    color: "#3F3F2C",
    marginBottom: "2rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "400px",
    gap: "1rem",
  },
  input: {
    padding: "0.8rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "0.8rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    minHeight: "100px",
  },
  fileInput: {
    padding: "0.5rem",
  },
  btn: {
    padding: "0.8rem",
    backgroundColor: "#B4833D",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },
};

export default SellPage;
