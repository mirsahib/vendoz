import React from "react";
import { useCardContext } from "../context/CardContext";
import { truncate } from "@/util/truncate";

export default function CardTitle() {
	const {product} = useCardContext()
	return (
		<h2 className="text-gray-900 title-font text-lg font-medium">
			{truncate(product.attributes.title)}
		</h2>
	);
}
