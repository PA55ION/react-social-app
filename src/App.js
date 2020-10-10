import React from 'react';
import Home from './pages/Home/Home';
import UserDetails from './pages/UserDetails/UserDetails'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/user/:userId' component={UserDetails} />
      </Switch>
    </div>
  );
}

export default App;
