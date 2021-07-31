import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <div className="text-indigo">
          Im using tailwind css
      </div>
      <div>
        Routeing here
      </div>
      <Router>
        <Route exact path="/">
          <div>
            Home
          </div>
        </Route>
        <Route exact path="/component">
          <div>
            Component
          </div>
        </Route>
      </Router>
    </div>
  );
}

export default App;
