import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model-S"
        description="Order online for Touchless Delivery"
        backgroundImage="model-s.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Model-Y"
        description="Order online for Touchless Delivery"
        backgroundImage="model-y.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Model-3"
        description="Order online for Touchless Delivery"
        backgroundImage="model-3.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Model-X"
        description="Order online for Touchless Delivery"
        backgroundImage="model-x.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back Guarantee"
        backgroundImage="solar-panel.jpg"
        leftButtonText="Order Now"
        rightButtonText="Learn More"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImage="solar-roof.jpg"
        leftButtonText="Order Now"
        rightButtonText="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImage="accessories.jpg"
        leftButtonText="Shop Now"
        RightButtonText=""
      />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;

export default Home;
