// src/pages/WhyEcoFind.jsx
import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { Separator } from "../components/Separator";

const WhyEcoFind = () => {
  return (
    <Wrapper>
      <div className="container">
        <h1 className="title">Why EcoFind?</h1>
        <p className="subtitle">
          Empowering conscious shopping and selling, reducing waste, and promoting sustainability.
        </p>

        <div className="cards">
          <Card>
            <h3>Sustainability First</h3>
            <p>
              Every product sold contributes to reducing waste and promoting a circular economy.
            </p>
          </Card>

          <Card>
            <h3>Trusted Community</h3>
            <p>
              EcoFind verifies sellers to ensure quality, transparency, and reliability.
            </p>
          </Card>

          <Card>
            <h3>Easy to Buy & Sell</h3>
            <p>
              User-friendly interface for listing products quickly and finding eco-friendly items effortlessly.
            </p>
          </Card>

          <Card>
            <h3>Support Local & Small Sellers</h3>
            <p>
              Give visibility to small businesses and local artisans promoting sustainability.
            </p>
          </Card>

          <Card>
            <h3>Smart Recommendations</h3>
            <p>
              Personalized product suggestions help users make conscious choices.
            </p>
          </Card>
        </div>

        <Separator />

        <p className="vision">
          <strong>Our Vision:</strong> To make sustainable consumption the default choice, helping the planet while empowering communities.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  background: #f7f1e1;
  padding: 60px 20px;

  .container {
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
  }

  .title {
    color: #66371b;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .subtitle {
    color: #81754b;
    font-size: 1.1rem;
    margin-bottom: 40px;
  }

  .cards {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin-bottom: 40px;
  }

  h3 {
    color: #b4833d;
    font-size: 1.3rem;
    margin-bottom: 10px;
  }

  p {
    color: #5a4c36;
    font-size: 0.95rem;
  }

  .vision {
    color: #66371b;
    font-size: 1.1rem;
    margin-top: 20px;
  }
`;

export default WhyEcoFind;
