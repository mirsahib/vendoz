import React from "react";
import { useSingleProdContext } from "../../context/SingleProdContext";

type Props = {};

function ProdTitle({}: Props) {
	const {product} = useSingleProdContext()
	return (
		<h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
			{product.attributes.title}
		</h1>
	);
}

export default ProdTitle;
