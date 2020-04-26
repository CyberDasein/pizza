import React from "react";
import pizza from "../img/231.png";
import bakon from "../img/226.png";
import pizzaCheese from "../img/233.png";
import styled from "styled-components";
import { connect } from "react-redux";
const PriceContainer = styled.div`
  height: 50px;
  color: #09c;
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 35px;

  .label {
    color: #768e9d;
    margin-right: 10px;
  }
`;

const PizzaImg = styled.div`
  text-align: center;
  position: relative;
  border: 1px solid #f1f4f9;
  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 1;
  }
`;

class PizzaComponents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {


    return (
      <div>
        <PriceContainer>
          <span className="label">Price:</span>

          <span className="count">
            {this.props.price}
          </span>
        </PriceContainer>
        <PizzaImg>
          <img className="pizza" src={pizza} alt="" />
          {this.props.cheese ? <img src={pizzaCheese} alt="" /> : false}
          {this.props.bakon ? <img src={bakon} alt="" /> : false}
        </PizzaImg>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    price: [...state.price.price].reduce((sum, el) => +sum + +el),
    menu: state.menu,
    cheese: state.menu.cheese,
    bakon: state.menu.bakon,
    priceSize: state.price.priceSize,
  };
};

export default connect(mapStateToProps, null)(PizzaComponents);
