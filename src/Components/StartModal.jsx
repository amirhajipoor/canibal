import React, { useEffect } from "react";

export default function StartModal({ open = true, onStart, className }) {
	return (
		<div>
			{/* backdrop */}
			<div
				// onClick={onClose}
				className={`fixed inset-0 flex justify-center items-start p-2 z-50 mx-auto
				${open ? "visible bg-black/25 backdrop-blur-sm" : "invisible"} ${className}`}
			>
				{/* modal */}
				<div
					onClick={(e) => e.stopPropagation()}
					className={`bg-white rounded-2xl shadow-lg p-5 mt-12 max-w-[400px]`}
				>
					<div className="text-slate-700 leading-8 farsi-numbers">
						<p>
							شما ماموریت دارید تا سه آدم و سه آدم‌خوار را به وسیله قایق به
							سلامت از رودخانه عبور دهید.
						</p>
						<h3 className="mt-8 font-bold">قوانین</h3>
						<p>1) قایق نمی‌تواند خالی برگردد.</p>
						<p>
							2) در هر لحظه اگر تعداد آدم‌خوار‌ها بیشتر از تعداد آدم‌ها شود،
							آدم‌خوار‌ها آدم‌ها را می‌خورند.
						</p>
						<div className="mt-6 mb-1">
							<button
								onClick={onStart}
								className="w-full py-2 text-lg font-bold text-white rounded-xl shadow-xl outline-none bg-cyan-600 hover:bg-cyan-700 transition-colors duration-200"
							>
								بزن بریم!
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
