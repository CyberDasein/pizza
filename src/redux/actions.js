import { CHANGE_SIZE,CHANGE_CHEESE , CHANGE_BACON} from "./menuReducer";
import { CHANGE_TOTAL_PRICE, CHANGE_PRICE_SIZE } from "./priceReducer";

export function changeSize (size, price) {
    return {
        type: CHANGE_SIZE,
        payload: size, price
    }
}
export function changeTotalPrice ( price) {
    
    return {
        type: CHANGE_TOTAL_PRICE,
        payload: price
    }
}
export function changePriceSize ( priceSize) {

    return {
        type: CHANGE_PRICE_SIZE,
        payload: priceSize
    }
}

export function addCheese(cheese) {
    return {
        type: CHANGE_CHEESE,
        payload: cheese
    }
}
export function addBakon(bakone) {
    return {
        type: CHANGE_BACON,
        payload: bakone
    }
}