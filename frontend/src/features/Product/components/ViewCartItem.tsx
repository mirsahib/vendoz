import { decreaseItem, increaseItem, removeItem } from "../action/cartAction";
import { useAppDispatch } from "@/store";
import { InitialStateType } from "@/store/cart";
import { urlBuilder } from "@/util/UrlBuilder";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ViewCartItem({
	products,
}: {
	products: InitialStateType["itemList"][0];
}) {
	const dispatch =useAppDispatch()
    const catagories = products.product?.attributes.catagories?.data[0].attributes.title
    const id = products.product?.id
    console.log('catagories',catagories)

	return (
		<li className=" mb-5">
			<div className="flex lg:flex-row  lg:justify-between lg:items-center">
				<div className="flex relative w-[120px] h-[150px] lg:basis-[10%] mr-5 lg:mr-0">
					{
						<Image
							src={urlBuilder(
								products.product?.attributes.img?.data
									?.attributes.url
							)}
							fill
							alt={""}
							style={{ objectFit: "contain" }}
						/>
					}
				</div>
				{/* image container */}
				<div className="  flex flex-col lg:flex-row sm:flex-col basis-[75%] lg:items-center justify-between">
					<div className="lg:w-[40%]">
						<Link href={`/catagory/${catagories}/product/${id}`}>
							<h3 className=" font-normal lg:font-medium sm:font-medium hover:text-blue-600 transition duration-300 ease-in-out">
								{products.product?.attributes?.title}
							</h3>
						</Link>
					</div>
					<div className="">
						{" "}
						<p className=" font-medium hidden lg:flex sm:hidden">
							$ {products.product?.attributes.price}
						</p>
					</div>
					<div className="flex flex-row items-center my-4 lg:my-0 sm:my-0">
						<button onClick={()=>dispatch(decreaseItem(products.product))} className="p-1 bg-slate-200 hover:bg-slate-300 rounded mr-3">
							<i className="fas fa-minus"></i>
						</button>
						<p>{products.count}</p>
						<button onClick={()=>dispatch(increaseItem(products.product))} className="p-1 bg-slate-200 hover:bg-slate-300 rounded ml-3">
							<i className="far fa-plus"></i>
						</button>
					</div>
					<div>
						{" "}
						<div className="font-medium">
							$ {products.productPrice}
						</div>
					</div>
				</div>
				{/* details container */}

				<div className="flex justify-end basis-[10%]">
					<button onClick={()=>dispatch(removeItem(products.product))} className="text-blue-600 hover:text-red-600">
						<i className="far fa-trash-alt"></i>
					</button>
				</div>
			</div>
		</li>
	);
}
