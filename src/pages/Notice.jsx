import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';


export default function Notice() {
    const [notices, setNotices] = useState([]);
    const [expandedId, setExpandedId] = useState(null); // 펼쳐진 공지사항 ID

    useEffect(() => {
        fetchNotices();
    }, []);

  // 공지사항 데이터 가져오기 함수
    const fetchNotices = () => {
        axios.get('http://localhost:8000/api/notices/')
        .then((response) => {
            setNotices(response.data);
        })
        .catch((error) => {
            console.error('공지사항을 가져오는 중 오류가 발생했습니다:', error);
        });
    };

  // 공지사항을 클릭하면 펼치기/접기 기능을 제공하는 함수
    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <Layout title="공지사항">
        <div className="notice-container">
            {notices.length > 0 ? (
            <ul className="notice-list">
                {notices.map((notice) => (
                <li key={notice.id} className="notice-item">
                    <div className="notice-title" onClick={() => toggleExpand(notice.id)}>
                    <span>{notice.title}</span>
                    <span className="notice-date">{new Date(notice.created).toLocaleDateString()}</span>
                    <button className="expand-button">
                        {expandedId === notice.id ? '▲' : '▼'}
                    </button>
                    </div>
                    {expandedId === notice.id && (
                    <div className="notice-body">
                        <p>{notice.body}</p>
                    </div>
                    )}
                </li>
                ))}
            </ul>
            ) : (
            <p className="no-notice">공지사항이 없습니다.</p>
            )}
        </div>
        </Layout>
    );
    }
