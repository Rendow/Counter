import AppSet from "./CounterSet/AppSet";
import App from "./CounterDisplay/App";
import React, {useEffect, useState} from "react";


export function Wrapp () {
    const [button, setButton] = useState(true)

    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)
    const [count, setCount] = useState(startValue)
    const [error, setError] = useState(false)

    useEffect(() => {
      let getCountValue =  localStorage.getItem('countValue' )
        if(getCountValue){
            let newValue = JSON.parse(getCountValue)
            setCount(Number(newValue))
        }
    },[])
    useEffect(() => {
        let getValue =  localStorage.getItem('maxValue' )
        if(getValue){
            let newValue = JSON.parse(getValue)
            setMaxValue(Number(newValue))
        }
    },[])
    useEffect(() => {
        let getValue =  localStorage.getItem('startValue' )
        if(getValue){
            let newValue = JSON.parse(getValue)
            setStartValue(Number(newValue))
        }
    },[])


    return(
    <div className ={'allCounter'}>
        <AppSet
            startValue={startValue}
            maxValue={maxValue}
            setStartValue={setStartValue}
            setMaxValue={setMaxValue}
            error={error}
            setCount={setCount}
            setButton={setButton}
            button={button}
            setError={setError}
        />
        <App
            startValue={startValue}
            maxValue={maxValue}
            count={count}
            setCount={setCount}
            error={error}
            button={button}
        />
    </div>

    )}