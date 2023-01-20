const initialState = {
    cart: []
}

export const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case "DELETE_FROM_CART":
            const data = state.cart.filter((ele)=> ele.id !== action.payload);
            return {
                ...state,
                cart: data
            }
        default:
            return state;
    }
}