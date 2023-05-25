import Head from "next/head";
import Hero from "@/components/Hero";
import Catagory from "@/components/Catagory";
import { getStaticProps } from "@/lib/Product/ReadAll";
import { InferGetStaticPropsType } from "next";
import Product from "@/features/Product";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

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
				<Product.Container.ProductSection products={products?.data}/>
				<ToastContainer/>
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