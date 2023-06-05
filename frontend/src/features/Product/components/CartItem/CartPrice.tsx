import React from "react";
import { useCartItemCtx } from "../../context/CartItemContext";

type Props = {};

function CartPrice({}: Props) {
	const {item} = useCartItemCtx()
	return <h3 className="w-1/3 flex justify-center font-semibold">$ {item.productPrice}</h3>;
}

export default CartPrice;
