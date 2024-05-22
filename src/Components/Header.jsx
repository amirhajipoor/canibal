import Logo from "../assets/img/logo.webp";

export default function Header({ score }) {
	return (
		<div className="h-16 flex items-center justify-between shadow-xl px-6 bg-white">
			<a href="/" className="flex gap-x-1 items-center">
				<img
					className="w-12"
					src={Logo}
					loading="lazy"
					alt="man-canibal game"
				/>
				<h1 className="font-bold text-lg">بازی آدم و آدم‌خوار</h1>
			</a>
			<div className="inline-flex items-center gap-x-3 px-2 py-1 rounded-full border-[3px] border-yellow-500 bg-yellow-100">
				<span className="farsi-numbers text-slate-800">
					{score.toLocaleString()}
				</span>
				<svg
					className="size-7"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M21 16V7.99999C20.9996 7.64927 20.9071 7.3048 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.26999L13 2.26999C12.696 2.09446 12.3511 2.00204 12 2.00204C11.6489 2.00204 11.304 2.09446 11 2.26999L4 6.26999C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.3048 3.00036 7.64927 3 7.99999V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z"
						stroke="#EAB308"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
						stroke="#EAB308"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
		</div>
	);
}
