import React, { useEffect } from "react";

export default function Modal({ open = false, onClose, children }) {
	useEffect(() => {
		if (open) document.body.classList.add("overflow-y-hidden");
		else document.body.classList.remove("overflow-y-hidden");
	}, [open]);

	return (
		<div
			className={`absolute inset-0 bg-black/25 backdrop-blur-sm z-50 flex duration-500 mt-16 transition-opacity items-start pt-10 justify-center max-w-[450px] mx-auto px-6 ${
				open ? "opacity-100" : "opacity-0"
			}`}
		>
            {children}
		</div>
	);
}
