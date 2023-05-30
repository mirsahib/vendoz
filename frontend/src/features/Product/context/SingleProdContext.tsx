import { IProduct } from "@/lib/types";
import { createContext, useContext } from "react";

const SingleProdContext = createContext<{product:IProduct}|null>(null)

export const useSingleProdContext = ()=>{
    const context = useContext(SingleProdContext)

    if(!context){
        throw new Error("Component is out of Card Context")
    }
    return context
}

export default SingleProdContext