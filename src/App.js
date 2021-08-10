import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/navbar/Header";
import Components from "./Pages/components/Components";
import ComponentsTextInput from "./Pages/components/ComponentsTextInput";
import Foundations from "./Pages/foundations/Foundations";
import FoundationsColor from "./Pages/foundations/FoundationsColor";
import FoundationsTypography from "./Pages/foundations/FoundationsTypography";
import FoundationsIconography from "./Pages/foundations/FoundationsIconography";
// import { Body, TopBar } from "@egov/digit-ui-react-components"; // for component use

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/components">
            <Components />
          </Route>
          <Route exact path="/components/text-input">
            <ComponentsTextInput />
          </Route>
          <Route exact path="/foundations">
            <Foundations />
          </Route>
          <Route exact path="/foundations/colors">
            <FoundationsColor />
          </Route>
          <Route exact path="/foundations/typography">
            <FoundationsTypography />
          </Route>
          <Route exact path="/foundations/iconography">
            <FoundationsIconography />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
