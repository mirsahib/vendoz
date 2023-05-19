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
	const router = useRouter();
	const { catagory } = router.query;
	return (
		<>
			<Head>
				<title>Vendoz Online Shop</title>
			</Head>
			<main>
				<section className="flex flex-col">
					<div className="flex bg-slate-100">
						<div className="w-[80%] text-slate-600 m-auto ">
							<Link replace href={`/catagory/${catagory}`}>
								<span className=" font-semibold">
									Catagory:{" "}
								</span>{" "}
								/{catagory}
							</Link>
						</div>
					</div>
					<div className="w-[80%] flex flex-col m-auto">
						<div>
							<ul className="flex flex-wrap">
								{products.data.map((item,index) => {
									return (
										<li key={index} className="flex basis-full lg:basis-1/4 sm:basis-1/2">
											<Link href={`./${catagory}/product/${item.id}`}>
												<Card props={item}/>
											</Link>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}

export { getStaticProps, getStaticPaths } from "@/lib/Product/ReadByCatagory";
