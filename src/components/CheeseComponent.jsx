import pizzaCheese from "../img/233.png"
import styled from "styled-components";
import size from "../img/231.png";
import { connect } from "react-redux";
import React from 'react';
import {
  addCheese,
} from "../redux/actions";

const CheeseStyle = styled.div`
  min-width: 400px;
  .ItemStyle {
    width:100%;
    display: flex;
    font-size: 50px;
    font-weight: 400;
    position: relative;
    color: #454345;
    padding: 10px;
    max-width: 450px;
    img {
      width: 66px;
      height: 60px;
    }
    .wrap {
      padding-left: 10px;
      font-size: 16px;
      display: flex;
      flex-direction: column;
    }
    .selected-icon {
      position: absolute;
      top: 7px;
      right: 10px;
      img {
        max-width: 24px;
        max-height: 24px;
      }
    }
  }
  .Options {
    width:100%;
    display: inline-flex;
    font-size: 20px;
    padding: 10px;
    border-top: 1px solid black;
    img {
      max-width: 24px;
      max-height: 24px;
      border: 1px solid black;
      margin-left: 10px;
    }
    button {
      background: none;
      border: 1px solid black;
      outline: none;
      margin-left: 10px;

      :hover,
      :active {
        color: gray;
      }
    }
  }
`;

const CheeseComponent = (props) => {

    return (
        <CheeseStyle>
          <div className="ItemStyle">
              <img src={size} alt="" />
              <span className="wrap">
                <span>Сыры </span>
                <span>{props.cheese} </span>
              </span>
              <span className="selected-icon">
                <img src={size} alt="" />
              </span>
            </div>
            <div className="Options">
              <div className="name">Сыр: &nbsp; </div>
                <input type="checkbox" data-price='20' onChange={props.addCheeseHandler} />
              </div>
        </CheeseStyle>
    )
}


const mapStateToProps = (state) => ({
  size: state.menu.size,
  price: state.price.price,
  priceSize: state.price.priceSize,
  cheese: state.menu.cheese,
  
});


export default connect(mapStateToProps, null)(CheeseComponent) 