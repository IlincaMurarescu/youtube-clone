import { useState, useEffect } from 'react';

import getVideos from '../../utils/getvideos';

export const useFeed = () => {
	const [videos, setVideos] = useState([]);

	function calculateTimePassed(postedAt) {
		const postedDate = new Date(postedAt);
		const currentDate = new Date();

		const timeDifference = currentDate - postedDate;

		const millisecondsInHour = 1000 * 60 * 60;
		const millisecondsInDay = millisecondsInHour * 24;
		const millisecondsInMonth = millisecondsInDay * 30;
		const millisecondsInYear = millisecondsInDay * 365;

		const hoursPassed = Math.floor(
			timeDifference / millisecondsInHour,
		);
		const daysPassed = Math.floor(timeDifference / millisecondsInDay);
		const monthsPassed = Math.floor(
			timeDifference / millisecondsInMonth,
		);
		const yearsPassed = Math.floor(
			timeDifference / millisecondsInYear,
		);

		if (yearsPassed > 0) {
			return (
				yearsPassed +
				(yearsPassed === 1 ? ' year' : ' years') +
				' ago'
			);
		} else if (monthsPassed > 0) {
			return (
				monthsPassed +
				(monthsPassed === 1 ? ' month' : ' months') +
				' ago'
			);
		} else if (daysPassed > 0) {
			return (
				daysPassed + (daysPassed === 1 ? ' day' : ' days') + ' ago'
			);
		} else {
			return (
				hoursPassed +
				(hoursPassed === 1 ? ' hour' : ' hours') +
				' ago'
			);
		}
	}

	const fetchData = async () => {
		const response = await getVideos();
		setVideos(response);
		console.log(response);
	};

	useEffect(() => {
		fetchData();
	}, []);


  return { videos, calculateTimePassed };
};
