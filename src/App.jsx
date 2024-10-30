import { Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Map from './pages/Map';
import Hotel from './pages/Hotel';
import Act from './pages/Act';
import Home from './pages/Home';
import './App.css';

function App() {
	const location = useLocation();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const handleLoad = () => {
			setTimeout (() => setLoading(false), 1000);
		};
		handleLoad();
	}, [location]);


	return (
		<>
			<Header />
			{loading ? (
				<div className='loading'>
					<p>로딩중...</p>
				</div>
			) : (
			<TransitionGroup>
				<CSSTransition key={location.key} classNames='fade' timeout={300} unmountOnExit>
					<Routes location={location}>
						<Route path='/' element={<Home />} />
						<Route path='/hotel' element={<Hotel />} />
						<Route path='/map' element={<Map />} />
						<Route path='/act' element={<Act />} />
					</Routes>
				</CSSTransition>
			</TransitionGroup>
	)}

			<Footer />
		</>
	);
}

export default App;