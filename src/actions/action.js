export const addToCart = (item) => {
    return {
        type: "ADD_TO_CART",
        payload: item
    }
}
export const deleteItem = (item) => {
    return {
        type: "DELETE_FROM_CART",
        payload: item
    }
}