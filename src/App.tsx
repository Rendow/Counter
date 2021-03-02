import React, {useState} from 'react';
import './App.css';
import Display from './Display';
import Button from "./Button";




function App() {
    const [count, setCount] = useState(0)

    const incr = () => {
        if(count < 5){
            setCount(count + 1)
        }
    }
    const res = () => {
        setCount(0)
    }


    return (
        <div className="App">
            <div className='Wrapper'>

                <Display count={count}/>

                <div className='buttons'>

                <Button disabled={count === 5} action={incr} title='incr' className='incr'/>
                <Button disabled={count === 0} action={res} title='res' className='res'/>

                </div>
            </div>
        </div>
    );
}

export default App;
