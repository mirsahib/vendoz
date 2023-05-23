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
interface ILogin {
	register: UseFormRegister<ILoginInputs>;
	handleSubmit: UseFormHandleSubmit<ILoginInputs>;
	onSubmit: SubmitHandler<ILoginInputs>;
	formState:FormState<ILoginInputs>
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
	console.log("🚀 ~ file: Login.tsx:37 ~ formState:", formState)

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

				{/* <div className="mb-5">
					<button className=" w-72 lg:w-80 flex items-center justify-evenly py-2 border border-gray-400">
						<Image
							src={"/icon/google.svg"}
							width={24}
							height={24}
							alt="google"
						/>
						<span className="text-sm">Continue with Google</span>
					</button>
				</div> */}
				{/* google login */}
				{/* <div className="mb-5">
					<button className="w-72 lg:w-80 flex items-center justify-evenly py-2 border border-gray-400">
						<Image
							src={"/icon/apple.svg"}
							width={24}
							height={24}
							alt="apple"
						/>
						<span className="text-sm">Continue with Google</span>
					</button>
				</div> */}
				{/* apple login */}

				{/* <div className="flex flex-row items-center mb-5">
					<div className="w-24 border-t border-gray-400 flex"></div>
					<span className="mx-4">or</span>
					<div className="w-24 border-t border-gray-400 flex"></div>{" "}
				</div> */}

				<div>
					<form

						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-col items-center"
					>
						<div className="w-72 lg:w-80 flex flex-col mb-5">
							<label htmlFor="email" className="text-xs mb-1">
								Email
							</label>
							<input
								id="email"
								className="h-10 border-2 border-gray-400 rounded focus:outline-blue-600 text-sm p-3"
								type="email"
								placeholder="yoursemail@domain.com"
								{...register("email")}
								autoComplete="on"
								required
							/>
						</div>
						<div className="w-72 lg:w-80 flex flex-col mb-5">
							<label htmlFor="email" className="text-xs mb-1">
								Password
							</label>
							<input
								id="password"
								className="h-10 border-2 border-gray-400 rounded focus:outline-blue-600 text-sm p-3"
								type="password"
								{...register("password")}
								required
								autoComplete="on"
								minLength={8}
							/>
						</div>
						{/* <div className="flex w-full justify-end mb-5">
							<Link href={'/'} className="text-blue-600 underline text-sm">Forgot Password?</Link>
						</div> */}
						<div className="mb-10">
							<button className="w-72 lg:w-80 h-12 bg-blue-600 hover:bg-blue-500 text-white font-semibold ">
								<span>Login </span>
								{formState?.isSubmitting?<FontAwesomeIcon icon={faCircleNotch} spin/>:''}
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
