import {createAction, createReducer} from "@reduxjs/toolkit";


interface CounterState{
    startValue:number
    maxValue:number;
    value:number
}

export const initialState: CounterState ={
    startValue:0,
    maxValue:7,
    value:0,
}

export const setValues = createAction<{startValue:number, maxValue:number}>('counter/setValue')
export const increment = createAction('counter/increment')
export const reset = createAction('counter/reset')

export const  counterReducer = createReducer(initialState,builder => {
    builder
        .addCase(setValues,(state, action)=>{
            state.startValue = action.payload.startValue;
            state.maxValue = action.payload.maxValue;
            state.value = action.payload.startValue
        })

        .addCase(increment,(state)=>{
            if(state.value < state.maxValue) state.value +=1
        })

        .addCase(reset,(state)=>{
            state.value = state.startValue
    })
})