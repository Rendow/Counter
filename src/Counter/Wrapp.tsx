import Setting from "./CounterSet/Setting";
import Display from "./CounterDisplay/Display";
import React, {useEffect, useState} from "react";


export function Wrapp() {
    const [button, setButton] = useState(true)
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)
    const [count, setCount] = useState(startValue)
    const [error, setError] = useState(false)

    useEffect(() => {
        let getValue = localStorage.getItem('countValue')
        if (getValue) {
            let newValue = JSON.parse(getValue)
            setCount(newValue)
        }
    }, [])
    useEffect(() => {
        let getValue = localStorage.getItem('maxValue')
        if (getValue) {
            let newValue = JSON.parse(getValue)
            setMaxValue(newValue)
        }
    }, [])
    useEffect(() => {
        let getValue = localStorage.getItem('startValue')
        if (getValue) {
            let newValue = JSON.parse(getValue)
            setStartValue(newValue)
        }
    }, [])


    const changeStartValue = (minValue: number) => {
        setError(false)
        setStartValue(minValue)
        setButton(false)
        if (minValue >= maxValue || minValue < 0) {
            setError(true)
            setButton(true)
        }
    }

    const changeMaxValue = (value: number) => {
        setError(false)
        setMaxValue(value)
        setButton(false)
        if (value <= startValue || value < 0) {
            setError(true)
            setButton(true)
        }
    }


    return (
        <div className={'allCounter'}>
            <Setting
                startValue={startValue}
                maxValue={maxValue}
                error={error}
                setCount={setCount}
                setButton={setButton}
                button={button}
                changeStartValue={changeStartValue}
                changeMaxValue={changeMaxValue}
            />
            <Display
                startValue={startValue}
                maxValue={maxValue}
                count={count}
                setCount={setCount}
                error={error}
                button={button}
            />
        </div>

    )
}