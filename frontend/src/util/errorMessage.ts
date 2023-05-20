import { ApiErrorResponse } from "@/lib/types";

const errorMessage = (error: unknown,name?:string): ApiErrorResponse => {
	let message = "Unknow error";
	if (error instanceof Error) {
		message = error.message;
	}
	const ErrorResponse: ApiErrorResponse = {
		data: null,
		error: {
			status: 500,
			name: name?name:"Internal Server Error",
			message: message,
			details: error,
		},
	};
	console.log(ErrorResponse);
	return ErrorResponse;
};
export default errorMessage;
