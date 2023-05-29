import React from "react";
import Card from "../components/Card";
import { IProduct } from "@/lib/types";
interface IProductList {
	products: IProduct[];
}

export default function Product({ products }: IProductList) {
	return (
		<section className="text-gray-700 body-font">
			<div className="w-[90%] px-5 py-24 mx-auto">
				<div className="flex flex-col items-center mb-10">
					<h3 className="text-2xl">Best Seller</h3>
					<p>Top Product</p>
				</div>
				<div className="flex flex-wrap ">
					{products.map((item) => (
						<div
							key={item.id}
							className="lg:w-1/4 md:w-1/2 sm:w-1/2  w-full"
						>
							<Card
								product={item}
								image={<Card.Image />}
								info={
									<Card.Info>
										<Card.Tag />
										<Card.Title />
									</Card.Info>
								}
								action={<Card.Action />}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
