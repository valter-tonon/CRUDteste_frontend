import {createAction, createReducer} from '@reduxjs/toolkit'

const INITIAL_STATE = []

export const addUser = createAction("ADD_USER")

export default createReducer(INITIAL_STATE,{
    [addUser.type]:(action, state)=>[...state,action.payload]
}

)