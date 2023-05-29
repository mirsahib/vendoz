import React, { useContext } from "react";
import { useCardContext } from "../context/CardContext";

type Props = {
	children: string|null
};

export default function CardTag() {
	const {product} = useCardContext()
	return (
		<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
			{product.attributes.type}
		</h3>
	);
}
