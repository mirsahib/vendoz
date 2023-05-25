import { IProduct } from "@/lib/types";
import Image from "next/image";
import React from "react";
import { urlBuilder } from "@/util/UrlBuilder";
import { truncate } from "@/util/truncate";
import { addItem } from "@/features/Product/action/cartAction";
import { useAppDispatch } from "@/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { toast } from "react-toastify";

interface ICard {
	props: IProduct;
}



export default function Card({ props }: ICard) {
	const product = props.attributes;
	const dispatch = useAppDispatch();
	const notify = ()=>toast('Product added to cart')
	return (
		<div className="flex flex-col justify-evenly bg-slate-100 hover:bg-slate-200 relative m-3 pb-5 h-96 hover:shadow-lg">
			<div className="relative w-[100%] h-[90%] mx-auto overflow-hidden">
				<Image
					src={urlBuilder(product.img?.data?.attributes?.url)}
					fill
					alt="men"
					style={{ objectFit: "cover", objectPosition: "center" }}
				/>
				<div className="flex justify-center items-center absolute top-5 right-5 w-8 h-8  bg-slate-100 hover:bg-blue-700 hover:text-white rounded-full">
					<button
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							console.log("click");
						}}
						className="flex justify-center items-center "
					>
						<FontAwesomeIcon icon={faHeart} />
					</button>
				</div>
			</div>
			<div className="px-5">
				<div className="flex flex-col my-2">
					<h4 className="text-gray-800 text-lg  mb-2">
						{truncate(product?.title)}
					</h4>
					<div className="flex">
						<h3 className="p-1 font-bold text-xs bg-blue-900 text-white">
							{product?.type}
						</h3>
					</div>
				</div>
				<div className="flex justify-between items-center">
					<h3 className="text-lg font-semibold text-gray-800">
						$ {product?.price}
					</h3>
					<button
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							dispatch(addItem(props));
							notify()

						}}
						className="p-2 bg-blue-700 hover:bg-blue-600 hover:opacity-90 text-white rounded"
					>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
}
 