import like from '../../assets/videoplayer/like.svg';
import dislike from '../../assets/videoplayer/dislike.svg';
import share from '../../assets/videoplayer/share.svg';
import Feed from '../Feed/Feed';
import Sidebar from '../Sidebar/Sidebar';
import { useVideoPlayer } from './hooks';

import styles from './VideoPlayer.module.css';

export default function VideoPlayer({ isSidebarOpen }) {
	const { video, status } = useVideoPlayer;

	return (
		<>
			<Sidebar isSidebarOpen={isSidebarOpen} />
			<div className={status}>
				<div className={styles.mainContainer}>
					<div className={styles.playVideo}>
						<video
							src={video?.video}
							type='video/mp4'
							autoPlay
							muted
							controls
						/>
						<h3>{video?.title}</h3>
						<div className={styles.flexContainer}>
							<div className={styles.userData}>
								<img src={video?.owner.avatar} />
								<div className={styles.smallContainer}>
									<p className={styles.username}>
										{video?.owner.username}
									</p>
									<p className={styles.subscribers}>
										{' '}
										436 Subscribers
									</p>
								</div>
								<button>Subscribe</button>
							</div>
							<div className={styles.rightButtons}>
								<button>
									<img src={like} />
								</button>
								<button>
									{' '}
									<img src={dislike} />{' '}
								</button>
								<button>
									{' '}
									<img src={share} />
								</button>
							</div>
						</div>
						<div className={styles.description}>
							{video?.description}
						</div>
						<div className={styles.commentsContainer}>
							<h4>Comments</h4>{' '}
							<div className={styles.comments}>
								{video ? (
									video.comments.map((comment) => (
										<div
											key={comment.user}
											className={styles.comment}>
											<img
												className={styles.commentAvatar}
												src={comment.user.avatar}
											/>
											<div className={styles.commentContainer}>
												<p className={styles.commentUsername}>
													{comment.user.username}
												</p>
												<p className={styles.commentContent}>
													{comment.content}
												</p>
											</div>
										</div>
									))
								) : (
									<p>Loading comments...</p>
								)}
							</div>
						</div>
					</div>
					<div className={styles.sideContainer}>
						<Feed />
					</div>
				</div>
			</div>
		</>
	);
}
