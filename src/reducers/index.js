import { ADD_PRODUCT, DELETE_PRODUCT } from "../actionTypes"

const initialState = {
    products: [{id: 1, name: "Gaurav"}],
    username: "GTG"
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case ADD_PRODUCT:
        return { ...state, products: [...state.products, payload] };
    
    case DELETE_PRODUCT:{
        const id = payload;
        const updatedProducts = state.products.filter(item => item.id !== id);
        return { ...state, products: updatedProducts};
    }

    default:
        return state
    }
}
