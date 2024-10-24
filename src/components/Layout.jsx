//모든 페이지 컴포넌트가 해당 컴포넌트를 호출해서 공통의 jsx구조를 공유
//props를 통해 각 페이지 컴포넌트로부터 제목텍스트와 컨텐츠 내용을 전달 받음
export default function Layout(props) {
	console.log(props); //{title: '페이지제목', children: 모든 자식 jsx요소 }
	return (
		// 클래스명에 등록할때는 무조건 소문자로 변형해서 등록
		<main className={props.title.toLowerCase()}>
			<h2>{props.title}</h2>
			{props.children}
		</main>
	);
}