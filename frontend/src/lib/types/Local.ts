import { ParsedUrlQuery } from "querystring";
import { IProduct } from "./Product";
interface IParams extends ParsedUrlQuery {
	productslug: string;
	catagory: string;
}

interface ApiSuccessResponse {
	data: IProduct[];
	meta: {
		pagination: {
			page: number;
			pageSize: number;
			pageCount: number;
			total: number;
		};
	};
}

interface ApiErrorResponse {
	data: any;
	error: {
		status: number;
		name: string;
		message: string;
		details: any;
	};
}

type ApiResponse = ApiSuccessResponse | ApiErrorResponse;

export type { ApiSuccessResponse, ApiErrorResponse, ApiResponse,IParams };
