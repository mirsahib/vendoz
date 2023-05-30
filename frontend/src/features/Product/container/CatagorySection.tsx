import { IProduct } from "@/lib/types";
import Link from "next/link";
import React from "react";
import Card from "../components/Card";
import { useRouter } from "next/router";
type Props = {
	products: IProduct[];
};

function CatagorySection({ products }: Props) {
	const router = useRouter();
	const { catagory } = router.query;

	return (
		<section className="text-gray-600 body-font">
			<div className="container px-5 py-12 mx-auto">
				<div className="pb-6">
					<h1 className="font-semibold text-lg">Catogory: Fashion</h1>
				</div>
				<div className="flex flex-wrap -m-4">
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

export default CatagorySection;
