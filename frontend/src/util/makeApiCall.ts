type HTTPMETHOD = "GET" | "POST";
const makeApiCall = async <Success, Error, T = void>(
	endpoint: string,
	method: HTTPMETHOD,
	payload?: T,
	token?:string
): Promise<Success | Error> => {
	// console.log("🚀 ~ file: makeApiCall.ts:8 ~ endpoint:", endpoint)
	let options: RequestInit = {
		method: method,
		headers: {
			Authorization: "Bearer " + process.env.REACT_API_TOKEN,
		},
	};

	if(token){
		options.headers={
			Authorization: "Bearer " + token,	
		}
	}

	if (method === "POST" && payload) {
		options = {
			method:method,
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		};
	}
	const url = process.env.REACT_API_URL+endpoint
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
