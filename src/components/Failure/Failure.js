import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const Failure = ({ code }) => {
	const [percent, setPercent] = useState(0);
	const history = useHistory();

	const valueAfterTime = (value, time) => {
		return new Promise((res) => {
			setTimeout(() => res(value), time);
		});
	};

	const randomRange = (from, to) => {
		return Math.floor(Math.random() * (to - from + 1) + from);
	};

	useEffect(() => {
		const progress = async () => {
			setPercent(
				await valueAfterTime(randomRange(1, 15), randomRange(500, 1500))
			);
			setPercent(
				await valueAfterTime(randomRange(16, 45), randomRange(500, 1500))
			);
			setPercent(
				await valueAfterTime(randomRange(46, 65), randomRange(500, 1500))
			);
			setPercent(
				await valueAfterTime(randomRange(66, 85), randomRange(500, 1500))
			);
			setPercent(
				await valueAfterTime(randomRange(86, 99), randomRange(500, 1500))
			);
			setPercent(await valueAfterTime(100, 500));
		};

		progress();
	}, []);

	useEffect(() => {
		if (percent === 100) {
			setTimeout(() => {
				history.push('/');
			}, 1500);
		}
	}, [percent]);

	return (
		<div className="container-fluid bg-primary">
			<div className="container d-flex align-items-center vh-100">
				<div className="row">
					<div className="col mb-3 text-light">
						<h1 className="display-1">:(</h1>
						<p className="lead fs-4">
							Aplikacja napotkała problem i należy ją uruchomić ponownie. Trwa
							zbieranie informacji o błędzie. Po zakończeniu tego procesu
							aplikacja zostanie automatycznie uruchomiona ponownie.
						</p>
						<p className="lead fs-4">Ukończono {percent}%</p>
						<p className="lead fs-6">Kod zatrzymania: {code}</p>
						{/* 
						<a href="/" className="link-light small text-decoration-none">
							<i className="fas fa-long-arrow-alt-left"></i> Wróć na początek
						</a> */}
					</div>
				</div>
			</div>
		</div>
	);
};
