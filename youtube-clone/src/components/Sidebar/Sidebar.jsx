import { useEffect, useState } from 'react';

import home from '../../assets/sidebar/home-filled.svg';
import music from '../../assets/sidebar/music-note.svg';
import gaming from '../../assets/sidebar/trophy.svg';
import sport from '../../assets/sidebar/gaming.svg';
import podcast from '../../assets/sidebar/podcast.svg';
import getUsers from '../../utils/getusers';

import '../../styles/global.css';
import './Sidebar.css';

export default function Sidebar({ isSidebarOpen }) {
	const [subscribed, setSubscribed] = useState([]);

	const fetchData = async () => {
		const response = await getUsers();
		// console.log(response);
		setSubscribed(response);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div
			className={` sidebar ${isSidebarOpen ? '' : 'small-sidebar'}`}>
			<div className='subscribed-list'>
				<h3>Subscribed</h3>
				<div className='side-links'>
					{subscribed.length ? (
						subscribed.map((user) => (
							<div key={user.username} className='side-link'>
								<img src={user.avatar}></img>
								<p>{user.username}</p>
							</div>
						))
					) : (
						<div>Loading...</div>
					)}
				</div>
			</div>

			<div className='explore shortcut-link'>
				<h3>Explore</h3>
				<div className='side-link'>
					<img src={home} alt='' className='' />
					<p>Home</p>
				</div>
				<div className='side-link'>
					<img src={music} alt='' className='' />
					<p>Music</p>
				</div>
				<div className='side-link '>
					<img src={gaming} alt='' className='' />
					<p>Gaming</p>
				</div>
				<div className='side-link'>
					<img src={sport} alt='' className='' />
					<p>Sport</p>
				</div>
				<div className='side-link'>
					<img src={podcast} alt='' className='' />
					<p>Podcasts</p>
				</div>
			</div>
		</div>
	);
}
