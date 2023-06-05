import { IProduct } from "@/lib/types";
import { useAppSelector } from "@/store";

const useProductInCart = (product:IProduct)=>{
    const cartItem = useAppSelector((state) => state.cartStore.itemList);
	const productInCart = cartItem.find(
		(item) => item.product?.id === product.id
	);

    return {productInCart}
}

export default useProductInCart