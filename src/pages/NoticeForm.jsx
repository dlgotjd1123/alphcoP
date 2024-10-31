import { useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';


function NoticeForm() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/notices/', { title, body })
        .then((response) => {
            setMessage('공지사항이 성공적으로 등록되었습니다.');
            setTitle('');
            setBody('');
    })
        .catch((error) => {
            setMessage('공지사항 등록 중 오류가 발생했습니다.');
            console.error('Error posting notice:', error);
    });
};

return (
    <Layout title="공지사항 등록">
        <div className="notice-form-container">
            <h2>공지사항 등록</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">제목:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="body">내용:</label>
                    <textarea
                    id="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                    />
                </div>
                <button type="submit">등록하기</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    </Layout>
);
}

export default NoticeForm;
