import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  // 현재 출력되는 화면의 URL 패스 경로 가져옴
	const { pathname } = useLocation();

	return (
    <footer className="footer">
		<div className="footer-container">
        <div className="footer-left">
			<h2 className="logo">Hotel Project.</h2>
			<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, fuga quisquam? Enim quod perferendis illum.</p>
			<p>© 2024 HotelP, All rights reserved.</p>
        </div>
        <div className="footer-right">
			<ul className="footer-links">
			<li>
				<Link to="/" className={pathname === '/' ? 'on' : ''}>
					HOME
				</Link>
            </li>
            <li>
				<Link to="/hotel" className={pathname === '/hotel' ? 'on' : ''}>
					객실
				</Link>
            </li>
            <li>
				<Link to="/notice" className={pathname === '/notice' ? 'on' : ''}>
					공지사항
				</Link>
            </li>
            <li>
				<Link to="/map" className={pathname === '/map' ? 'on' : ''}>
					찾아오시는 길
				</Link>
            </li>
		</ul>
			<div className="footer-icons">
				<span>PayPal</span>
				<span>VISA</span>
			</div>
        </div>
	</div>
    </footer>
);
}
