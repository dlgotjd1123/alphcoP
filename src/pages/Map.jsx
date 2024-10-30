// React import
import { useEffect } from "react";
import "../styles/pages/_map.scss"; // 스타일 파일 불러오기
import Layout from '../components/Layout'; 

const Hotel = () => {
  useEffect(() => {
    // 카카오 지도 API 불러오기
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=56ef6c53df34be8a48e7ec30cb5d8d63&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // 지도 초기화
      window.kakao.maps.load(() => {
        const container = document.getElementById("map"); // 지도가 표시될 HTML 요소
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 서울의 위도와 경도
          level: 3, // 확대 레벨
        };

        const map = new window.kakao.maps.Map(container, options);

        // 마커 추가하기 (호텔 위치)
        const markerPosition = new window.kakao.maps.LatLng(37.5665, 126.9780);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };

    return () => document.head.removeChild(script);
  }, []);

  return (
    <Layout title='찾아오시는 길'>
      <div className="hotel-container">
        <div className="hotel-content">
          <div id="map" className="hotel-map"></div>
          <div className="hotel-info">
            <h2>지하철 정보</h2>
            <table className="subway-info">
              <tbody>
                <tr>
                  <th>노선</th>
                  <th>출구</th>
                </tr>
                <tr>
                  <td>1, 2호선</td>
                  <td>시청역 5번 출구</td>
                </tr>
              </tbody>
            </table>

            <h2>버스 정보</h2>
            <table className="bus-info">
              <thead>
                <tr>
                  <th>정류장명</th>
                  <th>버스번호</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>시청, 서울신문사(02706)</td>
                  <td>6005</td>
                </tr>
                <tr>
                  <td>프레스센터(02507)</td>
                  <td>6701, 종로09, 종로11, 402, N75, 799파주</td>
                </tr>
                <tr>
                  <td>시청앞, 덕수궁(02286)</td>
                  <td>401, 402, 406, N16, N51, N75, 1711, 7016, 7022, 790파주, 799파주</td>
                </tr>
                <tr>
                  <td>시청광장(02641)</td>
                  <td>172, 405, 472, N62, N73, P9110(퇴근)화성</td>
                </tr>
                <tr>
                  <td>시청역(02503)</td>
                  <td>종로09, 종로11</td>
                </tr>
                <tr>
                  <td>시청덕수궁(02662)</td>
                  <td>6005</td>
                </tr>
                <tr>
                  <td>롯데호텔(02639)</td>
                  <td>6701, N6701</td>
                </tr>
                <tr>
                  <td>서울프라자호텔(02699)</td>
                  <td>6701</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="hotel-notice">
          <p>* 주차공간이 협소하니 객실당 1대씩 부탁드립니다.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Hotel;
