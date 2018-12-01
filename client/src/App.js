import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import NoteList from "./NoteList";
import Home from "./Home";
import Navigation from "./Navigation";

function App() {
  return (
    // There are things that you would need to do if using
    // GitHub Pages; check the create-react-app GH Repo
    <Router>
      <div className="vh-100 vw-100 flex flex-column">
        <Navigation />
        <Switch>
          <Route path="/notes" component={NoteList} />
          <Route path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
