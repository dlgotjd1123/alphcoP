import { Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useState, useEffect, useRef } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Map from './pages/Map';
import Hotel from './pages/Hotel';
import Notice from './pages/Notice';
import NoticeForm from './pages/NoticeForm' 
import Home from './pages/Home';
import './App.css';

function App() {
	const location = useLocation();
	const [loading, setLoading] = useState(true);
	const nodeRef = useRef(null);

	useEffect(() => {
		setLoading(true);
		const handleLoad = () => {
			setTimeout (() => setLoading(false), 1000);
		};
		handleLoad();
	}, [location]);


	return (
		<>
			{loading && (
				<div className='loading'>
					<p>로딩중...</p>
				</div>
			)}
			
			<Header />
			{!loading && (
				<TransitionGroup>
					<CSSTransition key={location.key} nodeRef={nodeRef} classNames='fade' timeout={300} unmountOnExit>
						<Routes location={location}>
							<Route path='/' element={<Home />} />
							<Route path='/hotel' element={<Hotel />} />
							<Route path='/map' element={<Map />} />
							<Route path='/notice' element={<Notice />} />
							<Route path='/notice/create' element={<NoticeForm />} />
						</Routes>
					</CSSTransition>
				</TransitionGroup>
	)}

			<Footer />
		</>
	);
}

export default App;