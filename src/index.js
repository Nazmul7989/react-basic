import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
// import About from "./components/About";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

//React Router

import About from "./components/routes/About";
import Contact from "./components/routes/Contact";
import Portfolio from "./components/routes/Portfolio";

const router = (
    <Router>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-success">
                        <a className="navbar-brand" href="#">Site Logo</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/portfolio">Portfolio</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>


                    <Route exact path="/" component={App}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/portfolio" component={Portfolio}/>
                </div>
            </div>
        </div>
    </Router>
)



ReactDOM.render(
  router,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//       {/*<About></About>*/}
//       <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
