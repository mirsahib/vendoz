import React from "react";
import { useCardContext } from "../../context/CardContext";
import { useAppDispatch } from "@/store";
import { addItem } from "../../action/cartAction";
import { toast } from "react-toastify";

type Props = {
	currency?: string
};

export default function CardAction({currency="$"}: Props) {
	const {product} = useCardContext()
	const notify = ()=>toast('Product added to cart')
	const dispatch = useAppDispatch()
	const handleClick = ()=>{
		dispatch(addItem(product))
		notify()
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
