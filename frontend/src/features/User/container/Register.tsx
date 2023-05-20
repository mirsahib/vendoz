import { ApiErrorResponse } from "@/lib/types";
import errorMessage from "@/util/errorMessage";
import { useRouter } from "next/router";
import React, { SetStateAction, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { generateUsername } from "unique-username-generator";
import Alert from "../components/Alert";

interface IRegisterForm {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

interface IRegister {
	setRedirect: React.Dispatch<SetStateAction<boolean>>;
}

export default function Register({ setRedirect }: IRegister) {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<IRegisterForm>();
	const [error,setError]= useState<ApiErrorResponse|null>(null)
	const router = useRouter()

	const onSubmit: SubmitHandler<IRegisterForm> = async (data) => {
		const userName = generateUsername();
		const formData = { ...data, username: userName };
		console.log("register", formData);
		try {
			const res = await fetch("/api/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			const response = await res.json();
			console.log('reg component',response);
			if('error' in response) {
				console.log("login response",response)
				setError(response)
			}else{
				router.push('/')
			}
		} catch (error) {
			console.log("register component", error);
			const errorResponse = errorMessage(error)
			setError(errorResponse)
		}
	};
	

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
				{error?<Alert errorObject={error} clearError={setError}/>:''}
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
								className={`h-14 border-2 border-gray-400 rounded focus:outline-blue-600 text-sm p-3`}
								type="email"
								placeholder="yoursemail@domain.com"
								{...(register("email"))}
								required
							/>
						</div>
						<div className="w-72 lg:w-80 flex flex-col mb-5">
							<label htmlFor="firstName" className="text-xs mb-1">
								First Name
							</label>
							<input
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
								className="h-14 border-2 border-gray-400 rounded focus:outline-blue-600 text-sm p-3"
								type="text"
								{...register("lastName")}
								required
							/>
						</div>
						<div className="w-72 lg:w-80 flex flex-col mb-5">
							<label htmlFor="firstName" className="text-xs mb-1">
								Password
							</label>
							<input
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
								Agree and Sign Up
							</button>
						</div>
					</form>
				</div>
			</div>
			{/* signin form container */}
		</section>
	);
}
