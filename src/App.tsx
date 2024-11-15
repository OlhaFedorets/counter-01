import React, {useState} from 'react';
import './App.css';
import {Button} from "./Button";


function App() {

    const [count, setCount] = useState<number>(0)

    function increaseFunction() {
        count < 5 && setCount(count + 1)
    }

    function resetFunction() {
        setCount(0)
    }

    return (
        <div className="App">
            <div className={count === 5 ? 'maxCount' : "count"}>{count}</div>
            <div className={'frame'}>
                <Button title={'inc'}
                        onClick={increaseFunction}
                        className={count < 5 ? 'activeButton' : 'button'}/>
                <Button title={'reset'}
                        onClick={resetFunction}
                        className={count !== 0 ? 'activeButton' : 'button'}/>
            </div>
        </div>
    );
}

export default App;
