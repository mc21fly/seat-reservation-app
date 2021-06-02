import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './choose.scss';

import { Seat } from '../../components/Seat/Seat';
import { select, fetchSeats, clear } from '../../app/states/seats/seatsSlice';
import { useHistory } from 'react-router-dom';

export const Choose = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const seats = useSelector((state) => state.seats.plan);
	const seatsToChoose = useSelector((state) => state.options.seatsToChoose);
	const sideBySide = useSelector((state) => state.options.sideBySide);
	const selectedSeats = useSelector((state) => state.seats.selected);

	useEffect(() => {
		dispatch(fetchSeats());
	}, [dispatch]);

	const handleRandomChoose = () => {
		const randomIndex = () => {
			const index = Math.floor(Math.random() * seats.length);

			if (!seats[index].reserved && !selectedSeats.includes(seats[index])) {
				return index;
			} else return randomIndex();
		};

		if (seats.length > 0) {
			for (let i = 0; i < seatsToChoose; i++) {
				let randomSeat = seats[randomIndex()];
				dispatch(select(randomSeat));
			}
		}
	};

	const handleSideBySideChoose = () => {
		let found = [];

		for (let i = 0; i < seats.length; i++) {
			if (found.length < seatsToChoose - 1) {
				if (
					!seats[i].reserved &&
					found.every((seat) => seats[i + 1].cords.x === seat.cords.x)
				) {
					found.push(seats[i]);
				} else {
					found = [];
				}
			} else if (found.length < seatsToChoose) {
				if (
					!seats[i].reserved &&
					found.every((seat) => seats[i].cords.x === seat.cords.x)
				) {
					found.push(seats[i]);
				} else {
					found = [];
				}
			}
		}

		if (found.length < seatsToChoose) {
			dispatch(clear());
		} else {
			found.map((seat) => dispatch(select(seat)));
		}
	};

	useEffect(() => {
		if (sideBySide) {
			handleSideBySideChoose();
		} else {
			handleRandomChoose();
		}
	}, [seats]);

	const handleNextStep = () => {
		history.push('/confirm');
	};

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
							<div className="legend-item navailable">Miejsca zajęte</div>
						</div>
						<div className="col">
							<div className="legend-item yours">Wybrane miejsca</div>
						</div>
						<div className="col">
							<button
								className="btn btn-outline-primary w-100 h-100"
								onClick={
									seatsToChoose - selectedSeats.length === 0
										? handleNextStep
										: null
								}>
								Rezerwuj{' '}
								<span className="badge bg-primary">
									{seatsToChoose - selectedSeats.length}
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
