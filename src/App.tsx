import React, {useState} from 'react';
import './App.css';
import {Button} from "./module/Button";
import s from './module/Button.module.css'


function App() {

    const [count, setCount] = useState<number>(0)

    function increaseFunction() {
        count < 5 && setCount(count + 1)
    }

    function resetFunction() {
        setCount(0)
    }

    const classNameForInc = `
    ${s.button}
    ${count === 5 ? s.disabled : ''}
    `

    const classNameForReset = `
    ${s.button}
    ${count === 0 ? s.disabled : ''}
    `


    return (
        <div className="App">
            <div className={"count"} style={{color: count === 5 ? 'red' : ''}}>{count}</div>
            <div className={'frame'}>
                <Button title={'inc'}
                        onClick={increaseFunction}
                        className={classNameForInc}/>

                <Button title={'reset'}
                        onClick={resetFunction}
                        className={classNameForReset}/>
            </div>
        </div>
    );
}

export default App;
