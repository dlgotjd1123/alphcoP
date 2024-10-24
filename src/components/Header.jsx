import { Link, useLocation } from 'react-router-dom';

export default function Header() {
	//현재 출력되는 화면의 url 패스 경로 가져옴
	const { pathname } = useLocation();	
	console.log(pathname);

	return (
		<header className='header'>
			<h1 className='logo'>
				<Link to='/'>Hotel Project</Link>
			</h1>

			<ul className='gnb'>
				<li>
					<Link to='/hotel' className={pathname === '/hotel' ? 'on' : ''}>
						HOTEL
					</Link>
				</li>
				<li>
					<Link to='/act' className={pathname === '/act' ? 'on' : ''}>
						ACTIVITIES
					</Link>
				</li>
				<li>
					<Link to='/gallery' className={pathname === '/gallery' ? 'on' : ''}>
						GALLERY
					</Link>
				</li>
				<li>
					<Link to='/program' className={pathname === '/program' ? 'on' : ''}>
						PROGRAM
					</Link>
				</li>
				<li>
					<Link to='/membership' className={pathname === '/membership' ? 'on' : ''}>
						MEMBERSHIP
					</Link>
				</li>
			</ul>
		</header>
	);
}