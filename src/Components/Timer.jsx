import { useEffect, useRef, useState } from "react";

export default function Timer({ started, onFinished }) {
	const [countdown, setCountDown] = useState(5 * 60); // five minutes
	const intervalRef = useRef(null);

	useEffect(() => {
		if (started) {
			if (intervalRef) clearInterval(intervalRef.current);

			if (started) {
				intervalRef.current = setInterval(() => {
					setCountDown((current) => {
						if (current > 0) {
							return current - 1;
						} else {
							onFinished();
							clearInterval(intervalRef.current);
						}
					});
				}, 1000);
			}
		} else {
			if (intervalRef) clearInterval(intervalRef.current);
		}
	}, [started]);

	return (
		<div className="px-4 py-2 rounded-full bg-white shadow-lg fixed bottom-6 left-6 flex items-center gap-x-2">
			<span className="text-lg text-slate-800 font-bold farsi-numbers">
				{countdown}
			</span>
			<svg
				className="size-8"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<line x1="10" x2="14" y1="2" y2="2" />
				<line x1="12" x2="15" y1="14" y2="11" />
				<circle cx="12" cy="14" r="8" />
			</svg>
		</div>
	);
}
