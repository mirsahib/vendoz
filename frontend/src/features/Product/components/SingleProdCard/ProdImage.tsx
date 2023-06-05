import Image from "next/image";
import React from "react";
import { useSingleProdContext } from "../../context/SingleProdContext";
import { urlBuilder } from "@/util/UrlBuilder";

type Props = {};

function ProdImage({}: Props) {
	const {product} = useSingleProdContext()

	return (
		<div className="relative w-[400px] h-[400px]">
			<Image
				fill
				alt=""
				style={{
					objectFit: "cover",
					objectPosition: "center",
				}}
				src={urlBuilder(product.attributes.img?.data?.attributes.url)}
			/>
		</div>
	);
}

export default ProdImage;
