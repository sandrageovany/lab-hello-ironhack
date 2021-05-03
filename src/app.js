import React from 'react';
import Declarative from './components/Declarative';
import Components from './components/Components';
import SingleWay from './components/SingleWay';
import Jsx from './components/Jsx';
import './app.css'
function App() {
    return (
        <div className="app">
            <h1>
                Say Hello to ReactJs
        </h1>
            <p> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="btn btn primary">Awsome!</button>
            <br></br>
            <div className="component">
            <Declarative />
            <Components />
            <SingleWay />
            <Jsx />
            </div>
        </div>
    )
}
export default App;