import React from "react";
import styled from "styled-components";
import size from "../img/231.png";
import { connect } from "react-redux";
import CheeseComponent from "./CheeseComponent";
import SizeComponent from "./SizeComponent";
import {
  changeSize,
  changeTotalPrice,
  addCheese,
  addBakon,
  changePriceSize,
} from "../redux/actions";
import BakonComponent from "./BakonComponent";

class MenuItems extends React.Component {
  constructor(props) {
    super(props);

  }

  changeSizeHandler = (event) => {
    
    let target = event.target;
  
    console.log(target)

    this.props.changeSize(target.value)
    this.props.changeTotalPrice(target.dataset.price)
    // this.props.changePriceSize(target.dataset.price)
  
      
    // if(!target.checked) {this.props.changeTotalPrice(-target.dataset.price)}
  }
  
  
  
  addCheeseHandler = (event) => {
    let input = event.target;
    {
      input.checked
        ? this.props.addCheese("+1") &&
          this.props.changeTotalPrice(input.dataset.price)
        : this.props.addCheese("") &&
          this.props.changeTotalPrice(-input.dataset.price);
    }
  };
  addBakonHandler = (event) => {
    let input = event.target;

    {
      input.checked
        ? this.props.addBakon("+1") &&
          this.props.changeTotalPrice(input.dataset.price)
        : this.props.addBakon("") &&
          this.props.changeTotalPrice(-input.dataset.price);
    }
  }
  render() {
    return (
      <>
        <SizeComponent changeSizeHandler={this.changeSizeHandler} />
        <CheeseComponent addCheeseHandler={this.addCheeseHandler} />
        <BakonComponent addBakonHandler={this.addBakonHandler}/>
      </>
    );
  }
}
const mapDispachToProps = {
  changeSize,
  changePriceSize,
  changeTotalPrice,
  addCheese,
  addBakon
};
const mapStateToProps = (state) => ({
  size: state.menu.size,
  price: state.price.price,
  priceSize: state.price.priceSize,
  cheese: state.menu.cheese,
});

export default connect(mapStateToProps, mapDispachToProps)(MenuItems);
