import React from "react";
import { useSingleProdContext } from "../../context/SingleProdContext";

type Props = {};

function ProdPrice({}: Props) {
	const {product} = useSingleProdContext()

	return (
		<span className="title-font font-medium text-2xl text-gray-900">
			${product.attributes.price}
		</span>
	);
}

export default ProdPrice;
