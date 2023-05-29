import React from "react";
import { useCardContext } from "../context/CardContext";
import { useAppDispatch } from "@/store";
import { addItem } from "../action/cartAction";

type Props = {
	currency?: string
};

export default function CardAction({currency="$"}: Props) {
	const {product} = useCardContext()
	const dispatch = useAppDispatch()
	const handleClick = ()=>{
		dispatch(addItem(product))
	}
	return (
		<div className="flex justify-between items-center mt-4">
			<p className="">{currency} {product.attributes.price}</p>
			<button onClick={handleClick} className="bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded">
				Add To Cart
			</button>
		</div>
	);
}
