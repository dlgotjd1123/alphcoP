import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Map from './pages/Map';
import Hotel from './pages/Hotel';
import Act from './pages/Act';
import Home from './pages/Home';

function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/hotel' element={<Hotel />} />
				<Route path='/map' element={<Map />} />
				<Route path='/act' element={<Act />} />
			</Routes>

			<Footer />
		</>
	);
}

export default App;