import {
	GetStaticPropsContext,
	GetStaticPropsResult,
} from "next";
import {
	ApiErrorResponse,
	ApiResponse,
	ApiSuccessResponse,
	IParams,
	IProduct
} from "../types";
import makeApiCall from "@/util/makeApiCall";

type ApiSuccessResponseByID = {
	data:IProduct,
	meta:ApiSuccessResponse['meta']
}

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
			const catagory =
				item.attributes?.catagories?.data[0]?.attributes?.title;
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
): Promise<GetStaticPropsResult<ApiSuccessResponseByID>> {
	const { productslug } = ctx.params as IParams;
	try {
		const product = await makeApiCall<ApiSuccessResponseByID, ApiErrorResponse>(
			`/products/${productslug}?populate=*`,
			"GET"
		);
		if (product && "error" in product) {
			return { notFound: true };
		} else {
			return {
				props: {
					...product,
				},
			};
		}
	} catch (error) {
		return { notFound: true };
	}
}

export { getStaticPaths, getStaticProps };
