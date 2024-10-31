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
						객실
					</Link>
				</li>
				<li>
					<Link to='/notice' className={pathname === '/notice' ? 'on' : ''}>
						공지사항
					</Link>
				</li>
			<li>
				<Link to="/map" className={pathname === '/map' ? 'on' : ''}>
					찾아오시는 길
				</Link>
            </li>

			</ul>
		</header>
	);
}