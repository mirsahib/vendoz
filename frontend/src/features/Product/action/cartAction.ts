import { IProduct } from "@/lib/types"
import { AppDispatch } from "@/store"
import { addToCart, decreaseCart, increaseCart, removeFromCart } from "@/store/cart"

const addItem= (product:IProduct)=>{
    console.log('dispatch')
    return (dispatch:AppDispatch)=>{
        dispatch(addToCart(product))
    }
}
const removeItem = (product:IProduct|null)=>{
    return (dispatch:AppDispatch)=>{
        if(product!=null){
            dispatch(removeFromCart(product))
        }
    }
}
const increaseItem=(product:IProduct|null)=>{
    return (dispatch:AppDispatch)=>{
        if(product!=null){
            dispatch(increaseCart(product))
        }

    }
}
const decreaseItem=(product:IProduct|null)=>{
    return (dispatch:AppDispatch)=>{
        if(product!=null){
            dispatch(decreaseCart(product))
        }

    }
}
export {
    addItem,
    removeItem,
    increaseItem,
    decreaseItem,
}
 