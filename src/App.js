import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav";
import Checkout from "./Components/Checkout";
import Homie from "./Components/Homie";
import Login from "./Components/Login";
import { useStateValue } from "./Components/StateProvider";
import React, { useEffect } from "react";
import { auth } from "./Components/Firebase";

function App() {
  const [{ basket }, dispatch] = useStateValue();
  // piece of code which runs based on given condition
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      //any cleanup operation go here
      unSubscribe();
    };
  }, []);
  console.log("USER IS =>>>" + dispatch.user);

  return (
    <Router>
      <div className="Ap">
        <Switch>
          <Route path="/" exact>
            <Nav />
            <Homie />
          </Route>
          <Route path="/login" exact>
            <Nav />
            <Login />
          </Route>
          <Route path="/checkout" exact>
            <Nav />
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
