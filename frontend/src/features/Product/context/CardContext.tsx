import { IProduct } from "@/lib/types";
import { createContext, useContext } from "react";

const CardContext = createContext<{product:IProduct}|null>(null)

export const useCardContext = ()=>{
    const context = useContext(CardContext)

    if(!context){
        throw new Error("Component is out of Card Context")
    }
    return context
}

export default CardContext