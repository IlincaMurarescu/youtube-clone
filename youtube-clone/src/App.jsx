import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

import './App.css';

function App() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	return (
		<>
			<Header setIsSidebarOpen={setIsSidebarOpen}>.</Header>
			<Routes>
				<Route
					path='/'
					element={<Home isSidebarOpen={isSidebarOpen} />}
				/>
				<Route
					path='/:videoId'
					element={<VideoPlayer isSidebarOpen={isSidebarOpen} />}
				/>
			</Routes>
		</>
	);
}

export default App;
