import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import Header from "./Components/Header";
import Man from "./assets/img/man.png";
import Canibal from "./assets/img/canibal.png";
import BoatImage from "./assets/img/boat.png";
import Timer from "./Components/Timer";
import { useAnimate } from "framer-motion";
import StartGameDialog from "./Components/StartGameDialog";
import SplashMenu from "./Components/SplashMenu";

const COUNTDOWN = 60 * 5; // five minutes

export default function App() {
	const [aSide, setASide] = useState({ man: 3, canibal: 3 });
	const [bSide, setBSide] = useState({ man: 0, canibal: 0 });
	const [boat, setBoat] = useState({ man: 0, canibal: 0, location: "a" });
	const [showStartDialog, setShowStartDialog] = useState(false);
	const [showMenu, setShowMenu] = useState(true);
	const [countdown, setCountDown] = useState(COUNTDOWN);
	const [ButtonMessage, setButtonMessage] = useState("قایق، حرکت کن!");
	const [score, setScore] = useState(0);
	const [started, setStarted] = useState(false);
	const [scope, animate] = useAnimate();
	const audioRef = useRef(null);
	const boatRef = useRef(null);

	useEffect(() => {
		if (
			(boat.location == "b" &&
				aSide.canibal > aSide.man &&
				aSide.man != 0 &&
				aSide.canibal != 0) ||
			(boat.location == "a" &&
				bSide.canibal > bSide.man &&
				bSide.man != 0 &&
				bSide.canibal != 0)
		) {
			alert("شما باختید!");
			saveMaxRecord();
			setScore(0);
			setStarted(false);
		}

		if (bSide.man == 3 && bSide.canibal == 3) {
			alert("شما برنده شدید.");
			saveMaxRecord();
		}

		document.body.classList.add("overflow-y-hidden");
		setScore((bSide.man + bSide.canibal) * 100);
	}, [aSide, bSide, boat]);

	const startGame = () => {
		setShowStartDialog(false);
		setStarted(true);
	};

	const goToB = () => {
		animate(scope.current, { x: -150, y: 140 });
		setBoat((boat) => ({ ...boat, location: "b" }));
	};

	const goToA = () => {
		animate(scope.current, { x: 0, y: -30 });
		setBoat((boat) => ({ ...boat, location: "a" }));
	};

	const saveMaxRecord = () => {
		let currentRecord = localStorage.getItem("record");

		if (!currentRecord || score > currentRecord.score) {
			let record = {
				score: score,
				time: COUNTDOWN - countdown,
			};

			localStorage.setItem("record", JSON.stringify(record));
		}
	};

	const pickUp = (type, side) => {
		if (side != boat.location) return;
		if (boat.man + boat.canibal == 2) {
			alert("قایق حداکثر 2 نفر ظرفیت دارد.");
			return;
		}

		if (type == "canibal") {
			if (boat.location == "a") {
				setASide((a) => ({ ...a, canibal: a.canibal - 1 }));
			} else {
				setBSide((b) => ({ ...b, canibal: b.canibal - 1 }));
			}
			setBoat((boat) => ({ ...boat, canibal: boat.canibal + 1 }));
		} else if (type == "man") {
			if (boat.location == "a") {
				setASide((a) => ({ ...a, man: a.man - 1 }));
			} else {
				setBSide((b) => ({ ...b, man: b.man - 1 }));
			}
			setBoat((boat) => ({ ...boat, man: boat.man + 1 }));
		}
	};

	const getOff = (type) => {
		if (type == "canibal") {
			if (boat.location == "a") {
				setASide((a) => ({ ...a, canibal: a.canibal + 1 }));
			} else {
				setBSide((b) => ({ ...b, canibal: b.canibal + 1 }));
			}

			setBoat((boat) => ({ ...boat, canibal: boat.canibal - 1 }));
		} else if (type == "man") {
			if (boat.location == "a") {
				setASide((a) => ({ ...a, man: a.man + 1 }));
			} else {
				setBSide((b) => ({ ...b, man: b.man + 1 }));
			}

			setBoat((boat) => ({ ...boat, man: boat.man - 1 }));
		}
	};

	const handleStep = () => {
		if (boat.location == "a") {
			goToB();
		} else {
			goToA();
		}
	};

	const onContinue = () => {
		setShowMenu(false);
		setShowStartDialog(true);
	};

	return (
		<main className="bg-green-200 max-w-md mx-auto relative min-h-screen overflow-x-hidden">
			<Header score={score} />

			<StartGameDialog open={showStartDialog} onStart={startGame} />
			<SplashMenu open={showMenu} onContinue={onContinue} />

			{/* aSide */}
			<div className="h-48 bg-green-200 flex items-end pb-20 px-6 gap-x-2">
				{Array.from({ length: aSide.man }).map((item, key) => (
					<button onClick={() => pickUp("man", "a")} key={key}>
						<img className="w-12" src={Man} alt="man" loading="lazy" />
					</button>
				))}

				{Array.from({ length: aSide.canibal }).map((item, key) => (
					<button onClick={() => pickUp("canibal", "a")} key={key}>
						<img className="w-12" src={Canibal} alt="canibal" loading="lazy" />
					</button>
				))}
			</div>

			{/* Boat */}
			<div className="h-44 bg-cyan-600 px-6">
				<div
					ref={scope}
					className="w-48 -translate-y-10 transition-all duration-[1s] ease-linear relative"
				>
					<img src={BoatImage} loading="lazy" />
					<div className="absolute -top-6 right-8">
						{Array.from({ length: boat.man }).map((item, key) => (
							<button onClick={() => getOff("man")} key={key}>
								<img className="w-10" src={Man} alt="man" loading="lazy" />
							</button>
						))}

						{Array.from({ length: boat.canibal }).map((item, key) => (
							<button onClick={() => getOff("canibal")} key={key}>
								<img
									className="w-10"
									src={Canibal}
									alt="canibal"
									loading="lazy"
								/>
							</button>
						))}
					</div>
				</div>
			</div>

			{/* bSide */}
			<div className="h-96 bg-green-200 px-6 pt-14">
				{Array.from({ length: bSide.man }).map((item, key) => (
					<button onClick={() => pickUp("man", "b")} key={key}>
						<img className="w-12" src={Man} alt="man" loading="lazy" />
					</button>
				))}

				{Array.from({ length: bSide.canibal }).map((item, key) => (
					<button onClick={() => pickUp("canibal", "b")} key={key}>
						<img className="w-12" src={Canibal} alt="canibal" loading="lazy" />
					</button>
				))}
			</div>

			<Timer
				countdown={countdown}
				setCountDown={setCountDown}
				started={started}
				onFinished={() => console.log("onFinished")}
			/>
			{boat.man > 0 || boat.canibal > 0 ? (
				<div className="fixed bottom-6 pr-6">
					<button
						onClick={handleStep}
						className="px-5 py-2.5 text-lg font-bold text-white rounded-full shadow-xl outline-none bg-cyan-600 hover:bg-cyan-700 transition-colors duration-200"
					>
						{ButtonMessage}
					</button>
				</div>
			) : (
				""
			)}
		</main>
	);
}
