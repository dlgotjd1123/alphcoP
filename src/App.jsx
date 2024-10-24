import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Membership from './pages/Membership';
import Gallery from './pages/Gallery';
import Hotel from './pages/Hotel';
import Act from './pages/Act';
import Program from './pages/Program';
import Home from './pages/Home';

function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/hotel' element={<Hotel />} />
				<Route path='/gallery' element={<Gallery />} />
				<Route path='/program' element={<Program />} />
				<Route path='/membership' element={<Membership />} />
				<Route path='/act' element={<Act />} />
			</Routes>

			<Footer />
		</>
	);
}

export default App;