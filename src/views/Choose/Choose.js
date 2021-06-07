import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './choose.scss';

import { Seat } from '../../components/Seat/Seat';
import { select } from '../../app/states/seats/seatsSlice';
import { useHistory } from 'react-router-dom';

export const Choose = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const seats = useSelector((state) => state.seats.plan);
	const seatsToChoose = useSelector((state) => state.options.seatsToChoose);
	const sideBySide = useSelector((state) => state.options.sideBySide);
	const selectedSeats = useSelector((state) => state.seats.selected);

	const numberOfChoosen = seatsToChoose - selectedSeats.length;

	const handleRandomChoose = () => {
		if (seats.length > 0) {
			const seatsAvailable = seats.filter((seat) => !seat.reserved);

			if (seatsToChoose <= seatsAvailable.length) {
				const found = [];

				while (found.length < seatsToChoose) {
					const randomIndex = Math.floor(Math.random() * seatsAvailable.length);
					const seatIndex = seatsAvailable.indexOf(seatsAvailable[randomIndex]);

					found.push(seatsAvailable[randomIndex]);
					seatsAvailable.splice(seatIndex, 1);
				}

				found.forEach((seat) => dispatch(select(seat)));
			}
		}
	};

	const handleSideBySideChoose = () => {
		let found = [];

		seats.forEach((seat) => {
			if (found.length < seatsToChoose) {
				if (
					!seat.reserved &&
					found.every((_seat) => _seat.cords.x === seat.cords.x)
				) {
					found.push(seat);
				} else {
					found = [];
					if (!seat.reserved) {
						found.push(seat);
					}
				}
			}
		});

		if (found.length === parseInt(seatsToChoose)) {
			found.forEach((seat) => dispatch(select(seat)));
		}
	};

	const handleNextStep = () => {
		history.push('/confirm');
	};

	useEffect(() => {
		if (sideBySide) {
			handleSideBySideChoose();
		} else {
			handleRandomChoose();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [seats]);

	return (
		<div className="d-flex flex-column align-items-center">
			<div className="plan mt-3">
				{seats.map((seat, key) => (
					<Seat key={key} seat={seat} />
				))}
			</div>
			<div className="legend d-flex align-items-center bg-light container-fluid fixed-bottom">
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="legend-item available">Miejsca dostępne</div>
						</div>
						<div className="col">
							<div className="legend-item not-available">Miejsca zajęte</div>
						</div>
						<div className="col">
							<div className="legend-item yours">Wybrane miejsca</div>
						</div>
						<div className="col">
							<button
								className="btn btn-outline-primary w-100 h-100"
								onClick={numberOfChoosen === 0 ? handleNextStep : null}>
								Rezerwuj{' '}
								{numberOfChoosen ? (
									<span className="badge bg-primary">{numberOfChoosen}</span>
								) : null}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
