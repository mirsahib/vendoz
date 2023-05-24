import { ApiErrorResponse } from "@/lib/types";
import React, { Dispatch, SetStateAction } from "react";
import Alert from "../components/Alert";
import { WithForm } from "../HOC/withForm";
import {
	FormState,
	SubmitHandler,
	UseFormHandleSubmit,
	UseFormRegister,
} from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import {v4 as uuid4} from 'uuid'

interface IRegisterInputs {
	username: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

interface IRegister {
	register: UseFormRegister<IRegisterInputs>;
	handleSubmit: UseFormHandleSubmit<IRegisterInputs>;
	onSubmit: SubmitHandler<IRegisterInputs>;
	formState: FormState<IRegisterInputs>;
	error: ApiErrorResponse | null;
	setError: Dispatch<SetStateAction<ApiErrorResponse | null>>;
	setRedirect: Dispatch<SetStateAction<boolean>>;
}


function Register({
	register,
	handleSubmit,
	onSubmit,
	formState,
	error,
	setError,
	setRedirect,
}: IRegister) {
	const userName = uuid4();
	
	return (
		<section className="flex justify-center items-center py-8">
			<div className="flex flex-col items-center w-[24em] lg:w-[30em] sm:w-[22em]">
				<div className="w-[90%] lg:w-[67%] flex flex-row items-center justify-between mb-5">
					<h1 className="text-2xl">Create an account</h1>
					<button
						onClick={() => {
							setRedirect(false);
						}}
						className="text-blue-600 font-semibold underline"
					>
						or login
					</button>
				</div>
				{error ? (
					<Alert errorObject={error} clearError={setError} />
				) : (
					""
				)}
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
								className={`h-14 border-2 border-gray-400 rounded focus:outline-blue-600 text-sm p-3`}
								type="email"
								placeholder="yoursemail@domain.com"
								{...register("email")}
								required
								autoComplete="on"
							/>
						</div>
						<input
							type="hidden"
							{...register("username")}
							value={userName}
						/>
						<div className="w-72 lg:w-80 flex flex-col mb-5">
							<label htmlFor="firstName" className="text-xs mb-1">
								First Name
							</label>
							<input
								id="firstName"
								className="h-14 border-2 border-gray-400 rounded focus:outline-blue-600 text-sm p-3"
								type="text"
								{...register("firstName")}
								required
							/>
						</div>
						<div className="w-72 lg:w-80 flex flex-col mb-5">
							<label htmlFor="lastName" className="text-xs mb-1">
								Last Name
							</label>
							<input
								id="lastName"
								className="h-14 border-2 border-gray-400 rounded focus:outline-blue-600 text-sm p-3"
								type="text"
								{...register("lastName")}
								required
							/>
						</div>
						<div className="w-72 lg:w-80 flex flex-col mb-5">
							<label htmlFor="password" className="text-xs mb-1">
								Password
							</label>
							<input
								id="password"
								className="h-14 border-2 border-gray-400 rounded focus:outline-blue-600 text-sm p-3"
								type="password"
								{...register("password")}
								required
							/>
						</div>
						<div className="w-72 lg:w-80 mb-5">
							<p className="text-sm">
								By selecting "Agree and Sign up" I agree to the
								<span className="text-blue-600">
									{" "}
									Vendoz Terms
								</span>
								. Learn about how we use and protect your data
								in our Privacy Policy.
							</p>
						</div>
						<div className="mb-10">
							<button className="w-72 lg:w-80 h-12 bg-blue-600 text-white font-semibold">
								<span className="mr-1">Agree and Sign Up</span>
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

const RegisterWithForm = WithForm<IRegister, IRegisterInputs>({
	Component: Register,
	url: "/api/register",
	redirectUrl: "/",
});

export default RegisterWithForm;
