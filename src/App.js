import React, { Fragment } from "react";
import "./index.css"

import { BrowserRouter as Router, Route, Link, Switch, Redirect, useHistory, useParams, useLocation } from "react-router-dom";

export default function App() {
  const name = 'John Doe'
  const isAuthenticated = true
  return (
   <Router>
    <main>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to={`/about/${name}`}>About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

    <Switch>
      <Route path="/" exact component={Home} />
      {
      isAuthenticated ? 
      <>
      <Route path="/about/:name"  component={About} />
      <Route path="/contact"  component={Contact} />
      </> : <Redirect to="/" />
      }
    </Switch>

    </main>
</Router>
  );
}

const Home = () => (
  <Fragment>
    <h1>Home</h1>
    Hommie
  </Fragment>
  );


  const About = () => {
    const { name } = useParams()
    return (
    // props.match.params.name
    <Fragment>
      { name !== 'John Doe' ? <Redirect to="/" /> : null }
      <h1>About {name}</h1>
      <Route component={Contact} />
    </Fragment>
  )
  };
/*const About = ({match:{params:{name}}}) => (
  <Fragment>
    { name !== 'John Doe' ? <Redirect to="/" /> : null }
    <h1>About {name}</h1>
    About it
  </Fragment>
  );*/

/*const Contact = ({history}) => (
  <Fragment>
    <h1>Contact</h1>
    <button onClick={() => history.push('/') } >Go to home</button>
    Contact it
  </Fragment>
  );*/

  const Contact = () => {
    const { pathname } = useLocation();
    
    return (
      <Fragment>
        <h1>Contact</h1>
        <p>Current URL: {pathname}</p>
      </Fragment>
      )
      };