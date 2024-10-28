export default function Layout(props) {
	// props.title이 정의되어 있는지 확인하여 처리
	const title = props.title ? props.title.toLowerCase() : 'default-title';

	console.log(props); //{title: '페이지제목', children: 모든 자식 jsx요소 }

	return (
		// 클래스명에 등록할때는 무조건 소문자로 변형해서 등록
		<main className={title}>
			<h2>{props.title || 'Default Title'}</h2> {/* title이 없으면 기본값 표시 */}
			{props.children}
		</main>
	);
}
