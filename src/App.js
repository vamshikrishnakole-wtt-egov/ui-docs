import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './Pages/Home';
import Components from './Pages/Components';

function App() {
  return (
    <div className="App">
      {/* <div className="text-indigo">
          Im using tailwind css
      </div>
      <div className="text-indigo-lighter">
        Routeing here
      </div> */}
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/components">
          <Components />
        </Route>
      </Router>
    </div>
  );
}

export default App;
