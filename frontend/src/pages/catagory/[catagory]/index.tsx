import Head from "next/head";
import Link from "next/link";
import React from "react";
import Card from "@/components/Card";
import { InferGetStaticPropsType } from "next";
import { getStaticProps } from "@/lib/Product/ReadByCatagory";
import { useRouter } from "next/router";

export default function Catagory(
	products: InferGetStaticPropsType<typeof getStaticProps>
) {
  const router = useRouter()
  const {catagory} = router.query
	return (
		<>
			<Head>
				<title>Vendoz Online Shop</title>
			</Head>
			<main>
      <div className="bg-slate-100 py-1">
					<div className="w-[76%] m-auto text-slate-600">
						<Link replace href={`/`}>
							<span className=" font-semibold">Catagory: </span>{" "}
							/
						</Link>
					</div>
				</div>
				{/* nav section */}
				<section className="flex w-[75%] m-auto">
					<ul className="flex flex-wrap">
						{products.data.map((item) => {
							return (
								<li
									key={item.id}
									className="flex flex-col basis-1/4"
								>
									<Link 
										href={`./${catagory}/product/${item.id}`}
									>
										<Card props={item.attributes} />
									</Link>
								</li>
							);
						})}
					</ul>
				</section>
				{/* product section */}
			</main>
		</>
	);
}

export { getStaticProps, getStaticPaths } from "@/lib/Product/ReadByCatagory";
