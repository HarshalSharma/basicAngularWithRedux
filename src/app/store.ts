import { INCREMENT } from "app/actions";
import { tassign }  from 'tassign';
import { combineReducers } from "redux";

export interface IAppState{
    counter : number
}

export const INITIAL_STATE : IAppState = {
    counter: 0
}

export function rootReducer(state : IAppState, action) : IAppState{
    switch (action.type) {
        case INCREMENT: 
            return tassign(state, { counter:state.counter + 1 });
        default:
            break;
    }
    return state;
}

//IN case when there are multiple sub redux reducers..
// export const rootReducer = combineReducers(
//     a : aClass,
//     b : bClass
// );