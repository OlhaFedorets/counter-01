import React, {useState} from 'react';
import './App.css';
import {Button} from "./Button";


function App() {

    const [count, setCount] = useState<number>(0)

    function increaseFunction() {
        if (count < 5) {
            setCount(count + 1)
        }
    }

    function resetFunction() {
        setCount(0)
    }

    return (
        <div className="App">
            <div className={"Count"}>{count}</div>
            {/*<div>*/}
                <Button title={'inc'}
                        onClickHandler={increaseFunction}/>
                <Button title={'reset'}
                        onClickHandler={resetFunction}/>
            {/*</div>*/}
        </div>
    );
}

export default App;
