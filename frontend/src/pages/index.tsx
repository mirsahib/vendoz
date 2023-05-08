import Head from "next/head";
import Hero from "@/components/Hero";
import Catagory from "@/components/Catagory";
import Product from "@/components/Product";
import { getStaticProps } from "@/lib/Product/ReadAll";
import { InferGetStaticPropsType } from "next";

export default function Home({products}:InferGetStaticPropsType<typeof getStaticProps>) {

	return (
		<>
			<Head>
				<title>Vendoz | Online Shopping, Order now in vendoz.com</title>
			</Head>
			<main>
				<Hero/>
				{/* hero section */}
				<Catagory/>
				{/* catagory section */}
				<Product products={products?.data} />
				{/* <Product/>
				<Product/> */}
				{/* product section */}
				{/* <Featured/> */}
				{/* featured section */}
				{/* <Trending/> */}
				{/* trending */}
			</main>
		</>
	);
}
export {getStaticProps} from '@/lib/Product/ReadAll'