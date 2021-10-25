import './css/App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/header';
import Home from './components/home'
import Menu from './components/menu';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Router>
      <div className="App">
        <div className='margined'>
          <Header/>
          <div className='content'>
            <Switch>
                <Route path='/Menu' component={Menu} />
                <Route path='/Contact' component={Contact} />
                <Route path='/' component={Home} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
    </div>
  );
}

export default App;
