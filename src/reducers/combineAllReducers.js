//combine all reducers anc export the same so that it 
//can be used to create store in index.js


import { combineReducers } from 'redux';
import fNameReducer from './fNameReducer';
import lnamereducer from './lNameReducers';
import scorereducer from './scoreReducer';


const allReducers = combineReducers({

    firstname: fNameReducer,
    lastname: lnamereducer,
    score: scorereducer,
   
})

export default allReducers