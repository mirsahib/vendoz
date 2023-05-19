type HTTPMETHOD = "GET" | "POST";
const makeApiCall = async <Success, Error, T = void>(
	endpoint: string,
	method: HTTPMETHOD,
	payload?: T
): Promise<Success | Error> => {
	let options: RequestInit = {
		method: method,
		headers: {
			Authorization: "Bearer " + process.env.REACT_API_TOKEN,
		},
	};

	if (method === "POST" && payload) {
		options = {
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		};
	}
	const url = process.env.REACT_API_URL+endpoint
	const response = await fetch(url, options);
	const data = await response.json();
	if (response.ok) {
		return data as Success;
	} else {
		return data as Error;
	}
};

export default makeApiCall;
