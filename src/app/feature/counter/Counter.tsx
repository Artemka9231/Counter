import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../store.ts";
import {useState} from "react";
import {increment, reset, setValues} from "./counterSlice.ts";


export const Counter =()=>{
    const dispatch = useDispatch()
    const counter = useSelector((state:RootState)=> state.counter) //Hello

    const [start, setStart] = useState(counter.startValue)
    const [max, setMax] = useState(counter.maxValue)
    
    const handleSet =()=>{
        dispatch(setValues({startValue:start, maxValue:max}))
    }
    
    
    return (
        <div>
            <div>
                <div>

                    <label>max value:</label>
                    <input
                        type="number"
                        value={max}
                        onChange={(e)=>setMax(Number(e.target.value))}
                    />
                </div>
                <div>

                    <label>start value:</label>
                    <input type="number"
                           value={start}
                           onChange={(e)=>setStart(Number(e.target.value))}
                    />
                </div>
                <button onClick={handleSet}>set </button>
            </div>
            <div>
                <h1>{counter.value}</h1>
                <button disabled={counter.value === counter.maxValue} onClick={()=> dispatch(increment())}>inc</button>
                <button onClick={()=>dispatch(reset())}>reset</button>
            </div>
        </div>
    )
} // Hellonk12