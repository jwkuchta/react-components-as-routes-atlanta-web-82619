// With React Router our core routing will live in this component. 
// We will define our various routes within this file. 
// To start using routes, we need to install react-router-dom:
// npm install react-router-dom
import React from 'react';
import ReactDOM from 'react-dom';
// import these
// add NavLink
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'

/* Add basic styling for NavLinks */
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);

// including Provider, it will look something like:

// ReactDOM.render(
//   <Router>
//       <Provider store={store}>
//           <App />
//       </Provider>
//   </Router>,
//   document.getElementById('root')
// );


