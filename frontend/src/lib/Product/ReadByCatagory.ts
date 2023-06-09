import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import { ApiErrorResponse, ApiSuccessResponse,IParams } from "../types";
import makeApiCall from "@/util/makeApiCall";

const getStaticPaths = async () => {
	const products = await makeApiCall<ApiSuccessResponse, ApiErrorResponse>(
		"/products?populate=*",
		"GET"
	);
	let paths: any;
	if (products && "error" in products) {
		paths = [];
	} else {
		paths = products.data.map((item) => {
			const catagory=item.attributes?.catagories?.data[0]?.attributes?.title;
			return {
				params: {
					productslug: item.id.toString(),
					catagory: catagory,
				},
			};
		});
	}
	return {
		paths,
		fallback: false,
	};
};

async function getStaticProps(
	ctx: GetStaticPropsContext<IParams>
): Promise<GetStaticPropsResult<ApiSuccessResponse>> {
	const { catagory } = ctx.params as IParams;
	try {
		const products = await makeApiCall<
			ApiSuccessResponse,
			ApiErrorResponse
		>(
			`/products?populate=*&filters[catagories][title][$eq]=${catagory}`,
			"GET"
		);
		if (products && "error" in products) {
			return { notFound: true };
		} else {
			return {
				props: {
					...products,
				},
			};
		}
	} catch (error) {
		return { notFound: true };
	}
}

export { getStaticPaths, getStaticProps };
