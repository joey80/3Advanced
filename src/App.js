import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Content from './components/Content/Content';
import StyleGuide from './components/StyleGuide/StyleGuide';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/styleguide'>Styleguide</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path='/'>
            <Content>Home page</Content>
          </Route>
          <Route path='/styleguide'>
            <Content>
              <StyleGuide />
            </Content>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
