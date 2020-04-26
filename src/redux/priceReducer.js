export const CHANGE_TOTAL_PRICE = "CHANGE_TOTAL_PRICE";
export const CHANGE_PRICE_SIZE = "CHANGE_PRICE_SIZE";

const initialState = {
    price: '0',
};

export const priceReducer = (state = initialState, action) => {
  switch (action.type) {


    case CHANGE_TOTAL_PRICE:
      return { ...state, price: [...state.price, action.payload] };

    default:
      return state;
  }
};
