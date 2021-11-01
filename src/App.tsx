import './css/App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/header';
import Home from './components/home'
import Menu from './components/menu';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className='margined'>
          <div className='content'>
            <Switch>
                <Route path='/Menu' component={Menu} />
                <Route path='/Contact' component={Contact} />
                <Route path='/' component={Home} />
            </Switch>
          </div>
        </div>
        <Footer />
    </Router>
    </div>
  );
}

export default App;
