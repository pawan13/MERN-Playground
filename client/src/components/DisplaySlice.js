import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    display:[]
}

const DisplaySlice = createSlice({
    name: 'data',
    initialState,
    reducers:{
        setDisplay:(state, action)=>{
            //update the state
            state.display = [...state.display, action.payload]
        }
    }
})

const {reducer, actions}=DisplaySlice
export const {setDisplay}= actions

export default reducer
