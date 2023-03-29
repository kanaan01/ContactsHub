import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import Home from './components/pages/Home'
import About from './components/pages/About'

const App = () => {
  return (
    <Router>
      <Fragment className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/about" Component={About} />
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
