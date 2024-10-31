import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';


export default function Home() {
	const mainImageRef = useRef(null);
	const gridItemsRef = useRef([]);

	useEffect(() => {
		const observerOptions = {
		threshold: 0.1, 
		rootMargin: '0px 0px -100px 0px' 
		};

		const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
			entry.target.classList.add('visible'); 
			} else {
			entry.target.classList.remove('visible'); 
			}
		});
		}, observerOptions);

		gridItemsRef.current.forEach((item) => {
		if (item) observer.observe(item);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<div className="main-page">

			<div className="main-image" ref={mainImageRef}>
				<Layout title="Home">
				<p>Lorem ipsum dolor sit amet.</p>
				</Layout>
			</div>


			<div className="grid-section">
				{['/hotel', '/notice', '/map'].map((path, index) => (
				<div
					className="grid-item"
					key={index}
					ref={(el) => (gridItemsRef.current[index] = el)}
				>
					<Link to={path}>
					<img src={`/src/pages/img/img${index + 1}.jpg`} alt={`${index + 1}`} />
					</Link>
					<p>{index === 0 ? '객실' : index === 1 ? '공지사항' : '찾아오시는 길'}</p>
				</div>
				))}
			</div>
		</div>
	);
	}
