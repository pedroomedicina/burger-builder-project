import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layouts/Layout';
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Layout>
        <BurgerBuilder></BurgerBuilder>
      </Layout>
      </div>
    );
  }
}

export default App;
