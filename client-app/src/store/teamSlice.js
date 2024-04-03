import {createSlice} from '@reduxjs/toolkit'



const teamSlice = createSlice({
    name: 'team',
    initialState: [],
    reducers: {

        add(state, action){
            const existingUser = state.find(user => user.id === action.payload.id)
            const existingDomain = state.find(user => user.domain === action.payload.domain)

            if (!existingUser && !existingDomain && (action.payload.available == true))
            {state.push(action.payload)}

        },
        remove(state, action){
            return state.filter(item => item.id !== action.payload)
        }
    }
})


export const {add, remove} = teamSlice.actions
export default teamSlice.reducer