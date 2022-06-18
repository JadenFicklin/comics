import "./App.css";
import Getnames from "./components/Getnames";
import Getpasswords from "./components/Getpasswords";
import Login from "./components/Login";
import Register from "./components/Register";
import Searchnames from "./components/Searchnames";

function App() {
  return (
    <>
      <Register />
      <Login />
      <Getnames />
      <Getpasswords />
      <Searchnames />
    </>
  );
}

export default App;
