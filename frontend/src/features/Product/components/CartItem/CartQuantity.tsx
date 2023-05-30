import { IProduct } from "@/lib/types";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useCartItemCtx } from "../../context/CartItemContext";

type Props = {
	onIncrement:(product:IProduct|null)=>void;
	onDecrement:(product:IProduct|null)=>void;
};

function CartQuantity({onIncrement,onDecrement}: Props) {
	const {item} = useCartItemCtx()
	return (
		<div className="flex justify-center items-center w-1/3">
			<button onClick={()=>onDecrement(item.product)} className="bg-slate-300 hover:bg-slate-400 w-6 h-6 rounded mr-2">
				<FontAwesomeIcon icon={faMinus} />
			</button>
			<p>{item.count}</p>
			<button onClick={()=>onIncrement(item.product)}  className="bg-slate-300 hover:bg-slate-400 w-6 h-6 rounded ml-2">
				<FontAwesomeIcon icon={faPlus} />
			</button>
		</div>
	);
}

export default CartQuantity;
