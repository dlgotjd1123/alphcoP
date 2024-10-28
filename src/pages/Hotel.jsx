import { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../components/Layout'; 

const FlickrGallerySlider = () => {
const [roomData, setRoomData] = useState([]);

useEffect(() => {
    const fetchFlickrGalleries = async () => {
		const API_KEY = 'aa58021ad8808d283c66800a06f7539a'; 
		const galleryIds = [
        '72157723237478909', 
        '72157723235368508', 
        '72157723237483979'  
    ];

	try {
        const promises = galleryIds.map(galleryId => 
			axios.get(
			`https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=${API_KEY}&gallery_id=${galleryId}&per_page=5&format=json&nojsoncallback=1`
			)
        );

        const responses = await Promise.all(promises);

        // 가져온 데이터로 roomData 배열 생성
        const rooms = [
		{
            type: '싱글룸',
            images: responses[0].data.photos.photo.map(photo => `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`),
            description: '1인',
            subTitle: '평일 55,000원, 주말 70,000원',
            info: '싱글룸 설명',
		},
		{
            type: '커플룸',
            images: responses[1].data.photos.photo.map(photo => `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`),
            description: '1~2인',
            subTitle: '평일 80,000원, 주말 100,000원',
            info: '커플룸 설명',
		},
		{
            type: '단체룸',
            images: responses[2].data.photos.photo.map(photo => `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`),
            description: '4~8인',
            subTitle: '평일 150,000원, 주말 200,000원',
            info: '단체룸 설명',
		}
        ];

        setRoomData(rooms);
	} catch (error) {
        console.error('Error fetching Flickr galleries:', error);
	}
    };

    fetchFlickrGalleries();
}, []);

if (roomData.length === 0) {
    return <div>Loading...</div>;
}

return (
    <Layout title="객실 소개">
		<div className="hotel-container">
        {roomData.map((room, index) => (
			<RoomSlider key={index} room={room} />
        ))}
		</div>
    </Layout>
);
};

const RoomSlider = ({ room }) => {
const [currentImageIndex, setCurrentImageIndex] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % room.images.length);
    }, 3000); // 3초마다 이미지 변경

    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 타이머 정리
}, [room.images.length]);

return (
    <div className="room">
		<div className="room-info">
			<h2>{room.type}</h2>
			<p>{room.subTitle}</p>
			<p>{room.info}</p>
			<p>{room.description}</p>
		</div>
		<div className="room-slider">
			<div
				className="slider-images"
				style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
			}}
        >
			{room.images.map((image, index) => (
            <img
				key={index}
				src={image}
				alt={room.type}
				className="room-image"
            />
			))}
			</div>
		</div>
    </div>
);
};

export default FlickrGallerySlider;
