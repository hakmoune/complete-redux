import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../redux/iceCream/iceCreamActions";

const IceCreamContaine = () => {
  const dispatch = useDispatch();
  const numberOfIceCreames = useSelector(
    state => state.iceCream.numberOfIceCreames
  );

  return (
    <div>
      <h4>Number Of Ice Creams: {numberOfIceCreames}</h4>
      <button onClick={() => dispatch(buyIceCream())}>Buy Cake</button>
    </div>
  );
};

export default IceCreamContaine;
