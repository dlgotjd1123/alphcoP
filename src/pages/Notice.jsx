import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';

export default function Notice() {
  const [notices, setNotices] = useState([]); // 공지사항 상태

useEffect(() => {
    // Django API에서 공지사항 데이터를 가져오기
    axios.get('http://localhost:8000/api/notices/')
	.then((response) => {
        setNotices(response.data); // 응답 데이터를 공지사항 상태에 저장
	})
	.catch((error) => {
        console.error('공지사항을 가져오는 중 오류가 발생했습니다:', error);
	});
}, []);

return (
    <Layout title='공지사항'>
		{notices.length > 0 ? (
        <ul>
			{notices.map((notice) => (
            <li key={notice.id}>
				<h2>{notice.title}</h2>
				<p>{notice.body}</p>
				<p>{new Date(notice.created).toLocaleDateString()}</p>
            </li>
		))}
        </ul>
		) : (
        <p>공지사항이 없습니다.</p>
	)}
    </Layout>
);
}
