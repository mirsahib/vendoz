import React from "react";
import { useSingleProdContext } from "../../context/SingleProdContext";

type Props = {};

function ProdDesc({}: Props) {
	const {product} = useSingleProdContext()

	return (
		<p className="leading-relaxed">
			{product.attributes.desc}
		</p>
	);
}

export default ProdDesc;
