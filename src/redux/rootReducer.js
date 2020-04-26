import {combineReducers} from 'redux'
import { menuReducer } from './menuReducer'
import { priceReducer } from './priceReducer'


export const rootReducer = combineReducers({
    menu: menuReducer,
    price: priceReducer
})