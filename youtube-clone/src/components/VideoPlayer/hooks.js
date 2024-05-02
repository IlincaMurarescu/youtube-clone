import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import getVideo from '../../utils/getvideobyid';

export const useVideoPlayer = (isSidebarOpen) => {
	let status = isSidebarOpen === true ? 'smaller-container' : '';

	const [video, setVideo] = useState(null);

	const { videoId } = useParams();

	const navigate = useNavigate();
	const fetchVideo = async () => {
		const response = await getVideo(videoId);
		const data = await response;

		if (data.id) {
			setVideo(data);
			console.log(data);
			console.log(data.video);
		} else {
			navigate('/404');
		}
	};

	useEffect(() => {
		fetchVideo();
	}, [videoId]);

	return { video, status };
};
