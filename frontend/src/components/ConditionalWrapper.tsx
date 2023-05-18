import React from "react";

const ConditionWrapper = ({
	children,
	condition,
}: {
	children: React.ReactNode;
	condition: boolean;
}) => {
	if (condition) return <>{children}</>;
	return <></>;
};

export default ConditionWrapper;
