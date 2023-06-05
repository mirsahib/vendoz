import { IProduct } from "@/lib/types";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useCartItemCtx } from "../../context/CartItemContext";
import { useAppDispatch } from "@/store";
import { removeItem } from "../../action/cartAction";

type Props = {
	onClick:(product:IProduct|null)=>void
};

function CartAction({onClick}: Props) {
	const {item} = useCartItemCtx()
	
	return (
		<button onClick={()=>onClick(item.product)} className="hover:text-red-500">
			<FontAwesomeIcon icon={faTrash} />
		</button>
	);
}

export default CartAction;
