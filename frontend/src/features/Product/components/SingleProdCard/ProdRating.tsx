import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faSStar } from "@fortawesome/free-solid-svg-icons";
import {
	faFacebook,
	faTwitter,
	faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";

type Props = {};

function ProdRating({}: Props) {
	return (
		<div className="flex mb-4">
			<span className="flex items-center">
				<FontAwesomeIcon icon={faSStar} className="text-blue-600" />
				<FontAwesomeIcon icon={faSStar} className="text-blue-600" />
				<FontAwesomeIcon icon={faSStar} className="text-blue-600" />
				<FontAwesomeIcon icon={faSStar} className="text-blue-600" />
				<FontAwesomeIcon icon={faStar} className="text-blue-600" />

				<span className="text-gray-600 ml-3">4 Reviews</span>
			</span>
			<span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
				<Link href={"/"} className="text-gray-500 mr-1">
					<FontAwesomeIcon
						icon={faFacebook}
					/>
				</Link>
				<Link href={"/"} className="text-gray-500 mr-1">
					<FontAwesomeIcon
						icon={faTwitter}
					/>
				</Link>
				<Link href={"/"} className="text-gray-500">
					<FontAwesomeIcon icon={faFacebookMessenger} />
				</Link>
			</span>
		</div>
	);
}

export default ProdRating;
