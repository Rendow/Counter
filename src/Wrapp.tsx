import AppSet from "./CounterSet/AppSet";
import App from "./CounterDisplay/App";
import React, {useState} from "react";


export function Wrapp () {
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)

    const [count, setCount] = useState(startValue)

    const [error, setError] = useState(false)

    const ErrorValue = () => {
        setError(false)
        if(count < 0){
            setError(true)
        }else if(startValue === maxValue ){
            setError(true)
        }else if(startValue > maxValue ){
            setError(true)
        }
    }
    return(
    <div className ={'allCounter'}>
        <AppSet
            startValue={startValue}
            maxValue={maxValue}
            setStartValue={setStartValue}
            setMaxValue={setMaxValue}
            error={error}
            ErrorValue={ErrorValue}
        />
        <App
            startValue={startValue}
            maxValue={maxValue}
            count={count}
            setCount={setCount}
            error={error}
        />
    </div>

    )}