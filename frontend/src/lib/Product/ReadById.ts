import {
	GetStaticProps,
	GetStaticPropsContext,
	GetStaticPropsResult,
} from "next";
import { ApiResponse, IProduct } from "../types";
import { ParsedUrlQuery } from "querystring";

interface IParams extends ParsedUrlQuery {
	productslug: string;
}
interface SPApiResponse{
	data: IProduct
    meta:ApiResponse['meta']
}

const getStaticPaths = async () => {
	const res = await fetch(
		`${process.env.REACT_API_URL}/products?populate=*`,
		{
			headers: {
				Authorization: "Bearer " + process.env.REACT_API_TOKEN,
			},
		}
	);
	const products = (await res.json()) as ApiResponse;
	const paths = products.data.map((item) => {
		const catagory =
			item.attributes?.catagories?.data[0]?.attributes?.title;
		return {
			params: {
				productslug: item.id.toString(),
				catagory: catagory,
			},
		};
	});

	return {
		paths,
		fallback: true,
	};
};

async function getStaticProps(
	ctx: GetStaticPropsContext<IParams>
): Promise<GetStaticPropsResult<SPApiResponse>> {
	const { productslug, catagory } = ctx.params as IParams;
	const res = await fetch(
		`${process.env.REACT_API_URL}/products/${productslug}?populate=*`,
		{
			headers: {
				Authorization: "Bearer " + process.env.REACT_API_TOKEN,
			},
		}
	);
	const product = (await res.json()) as SPApiResponse;

	//console.log('read by id',product);
	return {
		props: {
			...product
		},
	};
}

export { getStaticPaths, getStaticProps };
