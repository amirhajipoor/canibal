import React from "react";
import Dialog from "./Dialog";

export default function StartGameDialog({ open, onStart }) {
	return (
		<Dialog className='mt-20 max-w-md' open={open}>
			<div className="text-slate-700 leading-8 farsi-numbers">
				<p>
					شما ماموریت دارید تا سه آدم و سه آدم‌خوار را به وسیله قایق به سلامت از
					رودخانه عبور دهید.
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
		</Dialog>
	);
}
