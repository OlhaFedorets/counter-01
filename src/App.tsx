import React, {useState} from 'react';
import './App.css';
import {Button} from "./Button";


function App() {

    const [count, setCount] = useState<number>(0)

    const increaseFunction = () => {
        if (count < 5) {
            setCount(count + 1)
        }
    }

    const resetFunction = () => {
        setCount(0)
    }

    return (
        <div className="App">
            <div>{count}</div>
            <Button title={'inc'}
                    onClickHandler={increaseFunction}/>
            <Button title={'reset'}
                    onClickHandler={resetFunction}/>
        </div>
    );
}

export default App;
