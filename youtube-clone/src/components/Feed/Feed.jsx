import { Link } from 'react-router-dom';

import { useFeed } from './hooks.js';

import './Feed.css';
import '../../index.css';

export default function Feed() {
	const { videos, calculateTimePassed } = useFeed();

	return (
		<div className='feed'>
			{videos.length ? (
				videos.map((video) => (
					<Link key={video.id} to={`/${video.id}`} className='card'>
						<img
							className='thumbnail-image'
							src={video.thumbnail}></img>{' '}
						<div className='   bottom-container  flex'>
							<img
								className='thumbnail-avatar'
								src={video.owner.avatar}></img>{' '}
							<div className='vertical-container'>
								<h3>{video.title}</h3> <p>{video.owner.username}</p>
								<p>
									{video.views} views •{' '}
									{calculateTimePassed(video.posted_at)}{' '}
								</p>{' '}
							</div>
						</div>
					</Link>
				))
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
}
