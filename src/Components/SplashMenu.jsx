import { useEffect, useState } from "react";
import Dialog from "./Dialog";

export default function SplashMenu({ onStart, onContinue, open = true }) {
	const [name, setName] = useState("");
	const [record, setRecord] = useState({});

	useEffect(() => {
		setName(localStorage.getItem("name") ?? "");
		setRecord(
			localStorage.getItem("record")
				? JSON.parse(localStorage.getItem("record"))
				: {}
		);
	}, []);

	function handleContinue(e) {
		e.preventDefault();
		if (!name) return;
		localStorage.setItem("name", name);
		onContinue();
	}

	return (
		<Dialog className="mt-20 max-w-md" open={open}>
			<form onSubmit={handleContinue}>
				<div>
					<label htmlFor="name" className="block text-sm text-slate-700">
						نام شما
					</label>
					<input
						required={true}
						onChange={(e) => setName(e.target.value)}
						value={name}
						className="px-4 py-2 rounded-lg shadow-sm text-slate-800 border border-slate-300 mt-2 w-full"
						type="text"
						name="name"
						id="name"
					/>
					<div className="mt-6">
						<h3 className="font-bold text-slate-900">بهترین رکورد شما:</h3>
						<div className="mt-2 text-slate-700 farsi-numbers">
							{record.score ? (
								<span>
									{record.score} امتیاز در {record.time} ثانیه
								</span>
							) : (
								<span>رکوردی یافت نشد</span>
							)}
						</div>
					</div>
					<div className="mt-4">
						<button
							type="submit"
							className="rounded-lg px-6 py-2 bg-sky-500 text-white shadow-sm"
						>
							ادامه
						</button>
					</div>
				</div>
			</form>
		</Dialog>
	);
}
