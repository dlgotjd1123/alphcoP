import Layout from '../components/Layout';

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
						<img src="/src/pages/img/img1.jpg" alt=" 1" />
						<p>Activities</p>
					</div>
					<div className="grid-item">
						<img src="/src/pages/img/img2.jpg" alt=" 2" />
						<p>Gallery</p>
					</div>
					<div className="grid-item">
						<img src="/src/pages/img/img3.jpg" alt=" 3" />
						<p>Program</p>
					</div>
				</div>
			</div>
		</div>
		);
	}
	