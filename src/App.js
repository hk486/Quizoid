import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="app" style={{ backgroundImage: 'url("/backk.jpg")' }}>
      <Header/>

      <Switch>
        <Route path='/' exact>
          <Home />

        </Route>
      </Switch>
    </div>
     <Footer />
    </BrowserRouter>
  );
};

export default App;
