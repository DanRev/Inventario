import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import frontPage from "../components/frontPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/account/signIn" component={frontPage}></Route>
          <Route exact path="/account/createAccount" component={null}></Route>
          <Route exact path="/account/passwordForgot" component={null}></Route>
          {/* <Route exact path="/" component={Home}></Route>
            <Route exact path="/badges" component={Badges}></Route>
            <Route exact path="/badges/new" component={BadgeNew}></Route>
            <Route component={NotFound}></Route> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
