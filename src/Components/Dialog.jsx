import React, { useEffect, useRef } from "react";

export default function Dialog({ open = true, className, children }) {
	const dialogRef = useRef(null);

	useEffect(() => {
		if (open) {
			dialogRef.current.showModal();
		} else {
			dialogRef.current.close();
		}
	});

	return (
		<dialog
			ref={dialogRef}
			className={`w-full rounded-xl p-5 shadow-xl fixed block z-50 opacity-0 pointer-events-none open:opacity-100 open:pointer-events-auto backdrop:backdrop-blur-sm backdrop:bg-black/25 m-4 inset-0 mx-auto sm:m-auto ${className}`}
		>
			{children}
		</dialog>
	);
}
