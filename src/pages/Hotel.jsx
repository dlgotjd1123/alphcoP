import { useState, useEffect } from 'react';
import Layout from '../components/Layout'; 

const roomData = [
{
    type: "싱글룸",
    images: [
		"/src/pages/img/single1.jpg",
		"/src/pages/img/single2.jpg",
		"/src/pages/img/single3.jpg",
		"/src/pages/img/single4.jpg",
		"/src/pages/img/single5.jpg"
    ],
    description: "싱글룸 설명",
    subTitle: "Vista Walkerhill Seoul - Grand Walkerhill Seoul",
    info: "Human, Nature, and Technology"
},
{
    type: "커플룸",
    images: [
		"/src/pages/img/couple1.jpg",
		"/src/pages/img/couple2.jpg",
		"/src/pages/img/couple3.jpg",
		"/src/pages/img/couple4.jpg",
		"/src/pages/img/couple5.jpg"
    ],
    description: "커플룸 설명",
    subTitle: "Douglas House",
    info: "Romantic Getaway for Couples"
},
{
    type: "단체룸",
    images: [
		"/src/pages/img/group1.jpg",
		"/src/pages/img/group2.jpg",
		"/src/pages/img/group3.jpg",
		"/src/pages/img/group4.jpg",
		"/src/pages/img/group5.jpg"
    ],
    description: "단체룸 설명",
    subTitle: "Group-friendly Space",
    info: "Perfect for Group Gatherings"
}
];

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

const Hotel = () => {
	return (
    <Layout title="객실소개">
		<div className="hotel-container">
			{roomData.map((room, index) => (
			<RoomSlider key={index} room={room} />
        ))}
		</div>
    </Layout>
	);
};

export default Hotel;
