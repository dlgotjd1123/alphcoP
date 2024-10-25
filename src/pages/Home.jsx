import Layout from '../components/Layout';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
	const navigate = useNavigate();

	// css로 관리되는 배경 클릭시 hotel로 라우트
	const handleImageClick = () => {
		navigate('/hotel');
	};

	return (
		<div className="main-page">
			<div className="main-content">
					<div className="main-image" onClick={handleImageClick}>
					<Layout title='Home'>		
						<p>Lorem ipsum dolor sit amet.</p>				
					</Layout>
			
				</div>
				<div className="grid-section">
					<div className="grid-item">
						<Link to='/act'>
							<img src="/src/pages/img/img1.jpg" alt=" 1" />
						</Link>
						<p>Activities</p>
					</div>
					<div className="grid-item">
						<Link to='/gallery'>
							<img src="/src/pages/img/img2.jpg" alt=" 2" />
						</Link>
						<p>Gallery</p>
					</div>
					<div className="grid-item">
						<Link to='/program'>
							<img src="/src/pages/img/img3.jpg" alt=" 3" />
						</Link>
						<p>Program</p>
					</div>
				</div>
			</div>
		</div>
		);
	}
	