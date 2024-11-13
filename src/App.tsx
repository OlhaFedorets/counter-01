import React from 'react';
import './App.css';
import {Button} from "./Button";


function App() {

    

    return (
        <div className="App">
            <div>COUNT</div>
            <Button title={'inc'}/>
            <Button title={'reset'}/>
        </div>
    );
}

export default App;
