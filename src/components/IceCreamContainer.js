import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../redux/iceCream/iceCreamActions";
import { useState } from "react";

const IceCreamContaine = () => {
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();

  const numberOfIceCreames = useSelector(
    state => state.iceCream.numberOfIceCreames
  );

  return (
    <div>
      <h4>Number Of Ice Creams: {numberOfIceCreames}</h4>

      <input
        type="text"
        value={number}
        onChange={e => setNumber(e.target.value)}
        placeholder="Number Of IceCream"
      />

      <button onClick={() => dispatch(buyIceCream(number))}>
        Buy {number} Ice Cream
      </button>
    </div>
  );
};

export default IceCreamContaine;
