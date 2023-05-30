import { InitialStateType } from "@/store/cart";
import { createContext, useContext } from "react";

interface IContext {
    item: InitialStateType['itemList'][0]
}
const CartItemCtx = createContext<IContext|null>(null)
export const useCartItemCtx= ():IContext=> {
    const ctx = useContext(CartItemCtx) 
    if(!ctx){
        throw new Error('Component is out of CartItem Context');
    }
    return ctx 
}
  
export default CartItemCtx