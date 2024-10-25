import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

export default function Home() {


	return (
		<div className="main-page">
			<div className="main-content">
					<div className="main-image">
					<Layout title='Home'>		
						<p>Lorem ipsum dolor sit amet.</p>				
					</Layout>
			
				</div>
				<div className="grid-section">
					<div className="grid-item">
						<Link to='/hotel'>
							<img src="/src/pages/img/img1.jpg" alt=" 1" />
						</Link>
						<p>객실</p>
					</div>
					<div className="grid-item">
						<Link to='/act'>
							<img src="/src/pages/img/img2.jpg" alt=" 2" />
						</Link>
						<p>공지사항</p>
					</div>
					<div className="grid-item">
						<Link to='/map'>
							<img src="/src/pages/img/img3.jpg" alt=" 3" />
						</Link>
						<p>찾아오시는 길</p>
					</div>
				</div>
			</div>
		</div>
		);
	}
	