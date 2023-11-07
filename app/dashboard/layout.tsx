import React from "react";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="flex justify-center items-center">
			<div className="h-screen">
				{children}
			</div>
		</main>
	);
}