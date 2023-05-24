import { ApiErrorResponse } from "@/lib/types";
import { ComponentType, useState } from "react";
import useCustomForm from "../hook/useCustomForm";

interface IWithForm<T> {
	Component: ComponentType<T>;
	url: string;
	redirectUrl: string;
}

export function WithForm<T, FormInputTypes extends Record<string, any>>({
	Component,
	url,
	redirectUrl,
}: IWithForm<T>) {
    // do not need to pass below props from the invoked component
    type Props = Omit<T,'error'|'setError'|'register'|'handleSubmit'|'onSubmit'|'formState' >
    return function WithProps(hocProps: Props){
		const [error, setError] = useState<ApiErrorResponse | null>(null);
		const { register, handleSubmit, onSubmit,formState } = useCustomForm<
			FormInputTypes,
			ApiErrorResponse
		>({ url: url, redirectUrl: redirectUrl, setErrorState: setError });
		return (
			<Component
				{...(hocProps as T)}
				register={register}
				handleSubmit={handleSubmit}
				onSubmit={onSubmit}
                error={error}
                setError={setError}
                formState={formState}
			/>
		);
	};
}
