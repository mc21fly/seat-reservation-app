import { useDispatch, useSelector } from 'react-redux';

import { select } from '../../app/states/seats/seatsSlice';

import './seat.scss';

export const Seat = ({ seat }) => {
	const dispatch = useDispatch();

	const seatsToChoose = useSelector((state) => state.options.seatsToChoose);
	const selectedSeats = useSelector((state) => state.seats.selected);

	const position = {
		gridColumnStart: seat.cords.y + 1,
		gridRowStart: seat.cords.x + 1,
	};

	const togglePick = () => {
		const seatsLeft = seatsToChoose - selectedSeats.length;
		const isPicked = selectedSeats.includes(seat);
		const isReserved = seat.reserved;

		if ((!isReserved && seatsLeft > 0) || (isPicked && seatsLeft === 0)) {
			dispatch(select(seat));
		}
	};

	return (
		<div
			className="seat"
			style={position}
			data-reserved={seat.reserved}
			data-picked={selectedSeats.includes(seat)}
			onClick={togglePick}>
			<div className="seat-desc">
				<div>Rząd {seat.cords.x + 1}</div>
				<div>Miejsce {seat.cords.y + 1}</div>
			</div>
		</div>
	);
};
