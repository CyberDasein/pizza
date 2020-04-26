import pizzaCheese from "../img/233.png"
import styled from "styled-components";
import size from "../img/231.png";
import { connect } from "react-redux";
import React from 'react';


const Sizestyle = styled.div`
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

const SizeComponent = (props) => {

    return (
        <Sizestyle>
            <div className="ItemStyle">
            <img src={size} alt="" />
            <span className="wrap">
            <span>Размер </span> 
            <span className="sizeCount">{props.size}</span>
            </span>
            <span className="selected-icon">
            <img src={size} alt="" />
            </span>
        </div>
        <div className="Options">
            <div className="name">Размер: &nbsp; </div>

            <select onChange={props.changeSizeHandler} name="" id="">
              <option data-price="30"  value="20см">20см</option>
              <option data-price="40" value="30см">30см</option>
              <option data-price="50" value="40см">40см</option>
            </select>
        {/* <fieldset >
            <input     
            data-price="40"
            value="20см"
            type="checkbox"
            name ="pizzaSize"
            onClick={props.changeSizeHandler}
            /> 20см
            <input 
            data-price="50"
            value="30см"
            type="checkbox"
            onClick={props.changeSizeHandler}
            name ="pizzaSize"
            /> 30см
            <input 
            data-price="60"
            value="40см"
            name ="pizzaSize"
            onClick={props.changeSizeHandler}
            type="checkbox"
            />  40см
        </fieldset> */}
        </div>
    </Sizestyle>
    )
}

const mapDispachToProps = {

};
const mapStateToProps = (state) => ({
  size: state.menu.size,
  price: state.price.price,
});

export default connect(mapStateToProps, mapDispachToProps)(SizeComponent) 