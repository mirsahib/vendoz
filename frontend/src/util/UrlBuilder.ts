import { IMediaFormat } from "@/lib/types";

export const urlBuilder = (data:string|undefined) => {
	let url = '/default.jpg'
	if(data!=undefined) {
		url = process.env.REACT_API_BASE_URL + data
	}
	return url;
};
