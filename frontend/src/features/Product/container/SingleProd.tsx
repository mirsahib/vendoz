import { IProduct } from "@/lib/types";
import React, { ReactNode } from "react";
import ProdImage from "../components/SingleProdCard/ProdImage";
import ProdBrand from "../components/SingleProdCard/ProdBrand";
import ProdTitle from "../components/SingleProdCard/ProdTitle";
import ProdRating from "../components/SingleProdCard/ProdRating";
import ProdDesc from "../components/SingleProdCard/ProdDesc";
import ProdColor from "../components/SingleProdCard/ProdColor";
import ProdSize from "../components/SingleProdCard/ProdSize";
import ProdPrice from "../components/SingleProdCard/ProdPrice";
import ProdAction from "../components/SingleProdCard/ProdAction";
import SingleProdContext from "../context/SingleProdContext";
type Props = {
	product: IProduct;
	image?: ReactNode;
	brand?: ReactNode;
	title?: ReactNode;
	rating?: ReactNode;
	desc?: ReactNode;
	color?: ReactNode;
	size?: ReactNode;
	price?: ReactNode;
	action?: ReactNode;
};

function SingleProd({
	product,
	image,
	brand,
	title,
	rating,
	desc,
	color,
	size,
	price,
	action,
}: Props) {
	return (
		<SingleProdContext.Provider value={{product}}>
			<section className="text-gray-600 body-font overflow-hidden">
				<div className="container px-5 py-24 mx-auto">
					<div className="lg:w-4/5 mx-auto flex flex-wrap justify-center">
						{image}
						<div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
							{brand}
							{title}
							{rating}
							{desc}
							<div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
								{color}
								{size}
							</div>
							<div className="flex">
								{price}
								{action}
							</div>
						</div>
					</div>
				</div>
			</section>
		</SingleProdContext.Provider>
	);
}

SingleProd.Image = ProdImage;
SingleProd.Brand = ProdBrand;
SingleProd.Title = ProdTitle;
SingleProd.Rating = ProdRating;
SingleProd.Description = ProdDesc;
SingleProd.Color = ProdColor;
SingleProd.Size = ProdSize;
SingleProd.Price = ProdPrice;
SingleProd.Action = ProdAction;

export default SingleProd;
