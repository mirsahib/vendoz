import makeApiCall from "@/util/makeApiCall";
import { ApiErrorResponse, ApiSuccessResponse } from "../types";

const getStaticProps = async () => {
	try {
		const products = await makeApiCall<ApiSuccessResponse,ApiErrorResponse>('/products?populate=*','GET');
		if(products && 'error' in products) {
			return {notFound: true}
		}else{
			return {
				props: {
					products,
				},
			};
		}
	} catch (error) {
        return {notFound: true}
    }
};

export { getStaticProps };
