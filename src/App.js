import React from "react";
import "./index.css";
import styled from "styled-components";
import PizzaComponents from "./components/PizzaComponents";
import MenuItems from "./components/MenuItems";

const MainTitle = styled.div`
  font-size: 50px;
  font-weight: 400;
  color: #454345;
  margin-bottom: 0.6em;
`;

function App(props) {
  return (
    <div className="container pt-3 pb-3">
      <div className="row ">
        <div className="col d-flex justify-content-center">
          <MainTitle>Pizza Constructor </MainTitle>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-6 d-flex flex-column align-items-start">
          <MenuItems/>
        </div>
        <div className="col-6 d-flex align-items-center">
          <PizzaComponents/>
        </div>
      </div>
    </div>
  );
}

export default App;
