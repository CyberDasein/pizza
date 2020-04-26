export const CHANGE_SIZE = "CHANGE_SIZE";
export const CHANGE_CHEESE = "CHANGE_CHEESE";
export const CHANGE_BACON = "CHANGE_BACON";

const initialState = {
  size: "",
  cheese: "",
  bakon: "",
};

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SIZE:

      return { ...state, size: action.payload };

    case CHANGE_CHEESE:
      return { ...state, cheese: action.payload };

    case CHANGE_BACON:
      return { ...state, bakon: action.payload };
    default:
      return state;
  }
};
