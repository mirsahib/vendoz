import { IProduct } from "@/lib/types"
import { AppDispatch } from "@/store"
import { addToCart } from "@/store/cart"

export const addItemToCart = (product:IProduct)=>{
    console.log('dispatch')
    return (dispatch:AppDispatch)=>{
        dispatch(addToCart(product))
    }
}
 