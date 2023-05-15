import Image from "next/image";
import React, { SetStateAction } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

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
	const onSubmit: SubmitHandler<IRegisterForm> = (data) => {
		console.log("register", data);
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

				<div>
					<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center" >
						<div className="w-72 lg:w-80 flex flex-col mb-5">
							<label htmlFor="email" className="text-xs mb-1">
								Email
							</label>
							<input
								className="h-14 border-2 border-gray-400 rounded focus:outline-blue-600 text-sm p-3"
								type="email"
								placeholder="yoursemail@domain.com"
								{...register('email')}
							/>
						</div>
						<div className="w-72 lg:w-80 flex flex-col mb-5">
							<label htmlFor="firstName" className="text-xs mb-1">
								First Name
							</label>
							<input
								className="h-14 border-2 border-gray-400 rounded focus:outline-blue-600 text-sm p-3"
								type="text"
								{...register('firstName')}
							/>
						</div>
						<div className="w-72 lg:w-80 flex flex-col mb-5">
							<label htmlFor="lastName" className="text-xs mb-1">
								Last Name
							</label>
							<input
								className="h-14 border-2 border-gray-400 rounded focus:outline-blue-600 text-sm p-3"
								type="text"
								{...register('lastName')}
							/>
						</div>
						<div className="w-72 lg:w-80 flex flex-col mb-5">
							<label htmlFor="firstName" className="text-xs mb-1">
								Password
							</label>
							<input
								className="h-14 border-2 border-gray-400 rounded focus:outline-blue-600 text-sm p-3"
								type="password"
								{...register('password')}
							/>
						</div>
						<div className="w-72 lg:w-80 my-10">
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
