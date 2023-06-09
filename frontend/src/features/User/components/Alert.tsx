import { ApiErrorResponse } from "@/lib/types";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { SetStateAction } from "react";

interface IAlert{
    errorObject:ApiErrorResponse,
    clearError:React.Dispatch<SetStateAction<ApiErrorResponse|null>>
}

export default function Alert({errorObject,clearError}: IAlert) {
    const {name,message} = errorObject.error
	return (
		<div className="w-[90%] lg:w-[67%] flex items-start bg-red-300 p-3 mb-5">
			<p>
				<span className="font-semibold">{name}</span>:
				{message}
			</p>
			<button onClick={()=>clearError(null)}>
				<FontAwesomeIcon icon={faTimes}/>
			</button>
		</div>
	);
}
