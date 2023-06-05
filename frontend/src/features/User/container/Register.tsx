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
import FormInput from "../components/FormInput";

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
						<FormInput
							id="email"
							label={<label className="text-xs mb-1">Email</label>}
							containerclassname="w-72 lg:w-80 flex flex-col mb-5"
							type="email"
							inputclassname="h-10 border-2 border-gray-400 rounded focus:outline-blue-600 text-sm p-3"
							autoComplete="on"
							placeholder="yoursemail@domain.com"
							{...register("email", { required: true })}
						/>
						<input
							type="hidden"
							{...register("username")}
							value={userName}
						/>
						<FormInput
							id="firstName"
							label={<label className="text-xs mb-1">First Name</label>}
							containerclassname="w-72 lg:w-80 flex flex-col mb-5"
							type="text"
							inputclassname="h-14 border-2 border-gray-400 rounded focus:outline-blue-600 text-sm p-3"
							{...register("firstName", { required: true })}
						/>
						<FormInput
							id="lastName"
							label={<label className="text-xs mb-1">Last Name</label>}
							containerclassname="w-72 lg:w-80 flex flex-col mb-5"
							type="text"
							inputclassname="h-14 border-2 border-gray-400 rounded focus:outline-blue-600 text-sm p-3"
							{...register("lastName", { required: true })}
						/>
						<FormInput
							id="password"
							label={<label className="text-xs mb-1">Password</label>}
							containerclassname="w-72 lg:w-80 flex flex-col mb-5"
							type="password"
							inputclassname="h-14 border-2 border-gray-400 rounded focus:outline-blue-600 text-sm p-3"
							{...register("password", { required: true })}
						/>
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
