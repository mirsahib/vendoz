import {
	GetStaticPropsContext,
	GetStaticPropsResult,
} from "next";
import { ApiResponse } from "../types";
import { ParsedUrlQuery } from "querystring";

interface IParams extends ParsedUrlQuery {
	productslug: string;
    catagory: string;
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
): Promise<GetStaticPropsResult<ApiResponse>> {
	const { productslug, catagory } = ctx.params as IParams;
	const res = await fetch(
		`${process.env.REACT_API_URL}/products?populate=*&filters[catagories][title][$eq]=${catagory}`,
		{
			headers: {
				Authorization: "Bearer " + process.env.REACT_API_TOKEN,
			},
		}
	);
	const product = (await res.json()) as ApiResponse;

	//console.log('read by id',product);
	return {
		props: {
			...product
		},
	};
}

export { getStaticPaths, getStaticProps };
