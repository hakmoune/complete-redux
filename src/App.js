import "./App.css";
import CakeContainer from "./components/CakeContainer";
import IceCreamContaine from "./components/IceCreamContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <div className="container">
      <CakeContainer />
      <IceCreamContaine />
      <UserContainer />
    </div>
  );
}

export default App;
