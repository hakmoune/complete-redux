import React from "react";
import { buyCake } from "../redux/cake/cakeActions";
import { connect, useDispatch, useSelector } from "react-redux";

/*const CakeContainer = () => {
  const dispatch = useDispatch();
  const numberOfCakes = useSelector(state => state.cake.numberOfCakes);

  return (
    <div>
      <h4>Number Of Cakes: {numberOfCakes}</h4>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
};

export default CakeContainer;*/

const CakeContainer = props => {
  return (
    <div>
      <h4>Number Of Cakes: {props.numberOfCakes}</h4>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = state => {
  return { numberOfCakes: state.cake.numberOfCakes };
};

const mapDispatchToProps = dispatch => {
  return { buyCake: () => dispatch(buyCake()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
