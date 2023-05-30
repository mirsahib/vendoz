import { IProduct } from "@/lib/types";
import { useRouter } from "next/router";

const useRelativePath = (product:IProduct)=>{
    const router = useRouter()
	const catagory = product.attributes.catagories?.data[0].attributes.title
    let url = `catagory/${catagory}/product/${product.id}`
    if(Object.keys(router.query).length!=0){
        url = `./${catagory}/product/${product.id}`
    }
    return {url}
}

export default useRelativePath