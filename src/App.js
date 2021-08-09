import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Components from "./Pages/Components";
// import Nabvar from "./Components/navbar/Nabvar";
import ComponentsTextInput from "./Pages/ComponentsTextInput";
import Header from "./Components/navbar/Header";

function App() {
  return (
    <>
      <Router>
        {/* <Nabvar /> */}
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
        </Switch>
      </Router>
    </>
  );
}

export default App;
