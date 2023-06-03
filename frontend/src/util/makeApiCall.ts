type HTTPMETHOD = "GET" | "POST";
const makeApiCall = async <Success, Error, T = void>(
	endpoint: string,
	options?:RequestInit,
	baseurl?:string,
): Promise<Success | Error> => {
	// console.log("🚀 ~ file: makeApiCall.ts:8 ~ endpoint:", endpoint)
	let url = process.env.REACT_API_URL+endpoint
	if(!options){
		options = {
			method:"GET",
			headers: {
				Authorization: "Bearer " + process.env.REACT_API_TOKEN,
			},
		};
	}
	if(baseurl){
		url = baseurl + endpoint
	}	
	console.log("🚀 ~ file: makeApiCall.ts:19 ~ url:", url)
	// if(token){
	// 	options.headers={
	// 		Authorization: "Bearer " + token,	
	// 	}
	// }

	// if (method === "POST" && payload) {
	// 	options = {
	// 		method:method,
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify(payload),
	// 	};
	// }
	// console.log("🚀 ~ file: makeApiCall.ts:31 ~ url:", url)
	// console.log("🚀 ~ file: makeApiCall.ts:31 ~ url:", process.env.REACT_API_URL)

	const response = await fetch(url, options);
	const data = await response.json();
	if (response.ok) {
		return data as Success;
	} else {
		return data as Error;
	}
};

export default makeApiCall;
