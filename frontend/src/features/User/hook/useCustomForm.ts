import { AuthContext } from "@/context/AuthContext";
import errorMessage from "@/util/errorMessage";
import { useRouter } from "next/router";
import { SetStateAction, useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IUseCustomForm<ErrorResponse> {
	url: string;
	redirectUrl: string;
	setErrorState: React.Dispatch<SetStateAction<ErrorResponse | null>>;
}

const useCustomForm = <T extends Record<string, any>, ErrorResponse>({
	url,
	redirectUrl,
	setErrorState,
}: IUseCustomForm<ErrorResponse>) => {
	
    const router = useRouter()
	const {saveUser} = useContext(AuthContext)
    const {
		register,
		handleSubmit,
		watch,
		formState,
	} = useForm<T>();


	const onSubmit: SubmitHandler<T> = async (data) => {
		console.log("🚀 ~ file: useCustomForm.ts:30 ~ constonSubmit:SubmitHandler<T>= ~ data:", data)
		try {
			const res = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			const response = await res.json();
			if ("error" in response) {
				setErrorState(response);
			} else {
				saveUser(response)
				router.push(redirectUrl);
			}
		} catch (error) {
			const errorResponse = errorMessage(error) as ErrorResponse;
			setErrorState(errorResponse);
		}
	};

	return {
		handleSubmit,
		register,
		onSubmit,
		formState
	};
};

export default useCustomForm;
