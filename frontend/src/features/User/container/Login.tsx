import React, { Dispatch, SetStateAction } from "react";
import Alert from "../components/Alert";
import { ApiErrorResponse } from "@/lib/types";
import { WithForm } from "../HOC/withForm";
import {
	FormState,
	SubmitHandler,
	UseFormHandleSubmit,
	UseFormRegister,
} from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import FormInput from "../components/FormInput";
interface ILogin {
	register: UseFormRegister<ILoginInputs>;
	handleSubmit: UseFormHandleSubmit<ILoginInputs>;
	onSubmit: SubmitHandler<ILoginInputs>;
	formState: FormState<ILoginInputs>;
	error: ApiErrorResponse | null;
	setError: Dispatch<SetStateAction<ApiErrorResponse | null>>;
	setRedirect: Dispatch<SetStateAction<boolean>>;
}

interface ILoginInputs {
	email: string;
	password: string;
}

function Login({
	register,
	handleSubmit,
	onSubmit,
	formState,
	setRedirect,
	error,
	setError,
}: ILogin) {
	// console.log("🚀 ~ file: Login.tsx:37 ~ formState:", formState);

	return (
		<section className="flex justify-center items-center py-8">
			<div className="flex flex-col items-center w-[24em] lg:w-[30em] sm:w-[22em]">
				<div className="w-[90%] lg:w-[67%] flex flex-row items-center justify-between mb-5">
					<h1 className="text-2xl">Login</h1>
					<button
						onClick={() => {
							setRedirect(true);
						}}
						className="text-blue-600 font-semibold underline text-sm"
					>
						or create an account
					</button>
				</div>

				{error ? (
					<Alert errorObject={error} clearError={setError} />
				) : (
					""
				)}
				{/* import brand button here */}
				{/* import divider here */}
				<div>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-col items-center"
					>
						<FormInput
							id="email"
							labelname="email"
							label="Email"
							labelclassname="text-xs mb-1"
							containerclassname="w-72 lg:w-80 flex flex-col mb-5"
							type="email"
							inputclassname="h-10 border-2 border-gray-400 rounded focus:outline-blue-600 text-sm p-3"
							autoComplete="on"
							placeholder="yoursemail@domain.com"
							{...register("email", { required: true })}
						/>
						<FormInput
							id="password"
							labelname="password"
							label="Password"
							labelclassname="text-xs mb-1"
							containerclassname="w-72 lg:w-80 flex flex-col mb-5"
							type="password"
							inputclassname="h-10 border-2 border-gray-400 rounded focus:outline-blue-600 text-sm p-3"
							{...register("password", {
								required: true,
								minLength: 8,
							})}
						/>
						{/* import forgot password  */}
						<div className="mb-10">
							<button className="w-72 lg:w-80 h-12 bg-blue-600 hover:bg-blue-500 text-white font-semibold ">
								<span>Login </span>
								{formState?.isSubmitting ? (
									<FontAwesomeIcon
										icon={faCircleNotch}
										spin
									/>
								) : (
									""
								)}
							</button>
						</div>
					</form>
				</div>
			</div>
			{/* signin form container */}
		</section>
	);
}

const LoginWithForm = WithForm<ILogin, ILoginInputs>({
	Component: Login,
	url: "/api/login",
	redirectUrl: "/",
});

export default LoginWithForm;
