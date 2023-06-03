import { ParsedUrlQuery } from "querystring";
interface IParams extends ParsedUrlQuery {
	productslug: string;
	catagory: string;
}
interface IAuthPayload {
	identifier?: string;
	username?: string;
	email?: string;
	password: string;
	firstName?: string;
	lastName?: string;
}

interface ApiSuccessResponse <T>{
	data: T ;
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

interface AuthSuccessResponse {
	jwt?: string;
	user?: {
		id: number;
		username: string;
		email: string;
		provider?: string;
		confirmed?: boolean;
		blocked?: boolean;
		createdAt: Date;
		updatedAt: Date;
	};
}

type AuthApiResponse = AuthSuccessResponse | ApiErrorResponse;
// type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

export type {
	ApiSuccessResponse,
	ApiErrorResponse,
	AuthSuccessResponse,
	AuthApiResponse,
	IParams,
	IAuthPayload,
};
