import React from "react";
import { buyCake } from "../redux/cake/cakeActions";
import { connect } from "react-redux";

const CakeContainer = props => {
  return (
    <div>
      <h4>Number Of Cakes: {props.numberOfCakes}</h4>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = state => {
  return { numberOfCakes: state.numberOfCakes };
};

const mapDispatchToProps = dispatch => {
  return { buyCake: () => dispatch(buyCake()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
