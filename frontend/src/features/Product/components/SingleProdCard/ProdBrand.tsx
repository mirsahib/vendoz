import React from "react";
import { useSingleProdContext } from "../../context/SingleProdContext";
import Link from "next/link";

type Props = {};

function ProdBrand({}: Props) {
	const {product} = useSingleProdContext()
	const catagory = product.attributes.catagories?.data[0].attributes.title
	return (
		<Link href={`/catagory/${catagory}`} className="text-sm title-font text-gray-500 hover:underline tracking-widest">
			Catagory: {catagory}
		</Link>
	);
}

export default ProdBrand;
