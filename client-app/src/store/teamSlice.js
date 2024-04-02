import {createSlice} from '@reduxjs/toolkit'

const teamSlice = createSlice({
    name: 'team',
    initialState: [],
    reducers: {
        add(state, action){
            console.log("payload is",action.payload)
            state.push(action.payload)

        },
        remove(state, action){
            console.log("payload is",action.payload)
            return state.filter(item => item.id !== action.payload)
        }
    }
})


export const {add, remove} = teamSlice.actions
export default teamSlice.reducer