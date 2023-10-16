import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    product:[
    ],
}

const productSlice = createSlice({
    
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const product={
                product:action.payload
            };
            state.product.push(product)
    },
    removeProduct: (state, action) => {
 
        const item=state.product.findIndex((product)=>product.id===action.payload.id);
        state.product.splice(item, 1);
},

editProduct: (state, action) => {
    const itemIndex = state.product.findIndex((product) => product.id === action.payload.id.id);

    if (itemIndex !== -1) {
        // console.log(action.payload.quantity);
        state.product[itemIndex].product.quantity +=action.payload.quantity;
    } else {
        console.log(`Product with id ${action.payload.id} not found.`);
    }
}
}})
export const{addProduct,removeProduct,editProduct}=productSlice.actions
export default productSlice.reducer