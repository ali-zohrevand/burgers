import React from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Layout from './components/Layout/Layout'

function App() {
  return (
    <div className="App">
      سلام.
        <Layout>
            <BurgerBuilder></BurgerBuilder>
        </Layout>
    </div>
  );
}

export default App;
