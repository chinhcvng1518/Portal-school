import React, { useEffect, useState } from 'react'
import image4 from "../assets/image4.jpg"
import image5 from "../assets/image5.jpg"
import { Link } from 'react-router-dom'
import banner1 from '../assets/banner1.png'
import data from '../db.json'
import styled from 'styled-components'
import Noibat from '../components/Dashboard/Noibat'
import References from '../components/Dashboard/References'
import Podcast from '../components/Dashboard/Podcast'
import Video from '../components/Dashboard/Video'
import {formatISO9075} from "date-fns";
import axios from 'axios'


const About = () => {
  const [news, setNews] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/new")
      .then((response) => {
        // console.log(response.data.products)
        setNews(response.data.news);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (!news) return null;
  return (
    <Wrapper>
      <section className='section-center'>
      <div class='wrap-body-container'>

        <div class='row wrap-general-news'>
          <div class='col-md-8 left-general-news'>
            <section class='section-center-left'>
              <div class='wrap-container-detail'>
                <div class='row news-category-title'> 
                  <div class='wrap-title'>Giới thiệu</div>
                </div>              
                <div class='row wrap-news-detail'>
                    <div class='new-detail-title'>Tổng quan UEF</div>
                    <div class='new-date'>
                        <time>{formatISO9075(new Date())}</time>
                    </div>
                    <div class='news-date'></div>
                    <div class='wrap-contents news-contents'>
                      <p>
                        Trường Đại học Kinh tế - Tài chính thành phố Hồ Chí Minh (Ho Chi Minh City University of Economics and Finance - UEF) thành lập ngày 24 tháng 9 năm 2007 theo quyết định số 1272/QĐ-TTg của Thủ tướng chính phủ. UEF theo đuổi mục tiêu là đại học hàng đầu Việt Nam và hướng tới chuẩn mực đào tạo quốc tế gắn liền triết lý Chất lượng - Hiệu quả - Hội nhập.
                        Với mục tiêu nhất quán, UEF hướng tới tiêu chuẩn giáo dục đại học kết hợp tinh hoa giáo dục đại học quốc tế cùng chuyển biến kinh tế trong bối cảnh hội nhập, đào tạo chuyên sâu về Kinh tế Tài chính đáp ứng nhu cầu chất lượng nguồn nhân lực ngày càng cao của xã hội.
                      <div class='text-center'>
                        <figure class="figure">
                          <img src={image4} class="figure-img img-fluid rounded" alt="..."/>
                          <figcaption class="figure-caption">Môi trường học tập tiện nghi, hiện đại</figcaption>
                        </figure>
                      </div>
                        Đảm bảo yếu tố đầu ra chất lượng đòi hỏi đội ngũ giảng viên của UEF phải được chọn lọc theo các chuẩn mực: tâm huyết, giỏi chuyên môn, giàu kinh nghiệm thực tế, nhuần nhuyễn trong phương pháp, thân thiện và gần gũi với sinh viên. Môi trường làm việc năng động và mang đậm tính nhân văn tại UEF là động lực quan trọng để các thầy cô tận tâm dìu dắt sinh viên trưởng thành và phát triển.
                        Trụ sở 141 - 145 Điện Biên Phủ, Phường 15, Quận Bình Thạnh, Tp.HCM của UEF tọa lạc tại khu vực trung tâm thành phố với hệ thống học tập và tiện nghi hiện đại, chuẩn quốc tế. Ngoài ra, UEF đang triển khai dự án tại Khu Nam Sài Gòn có diện tích 5,5 ha với chiến lược xây dựng thành khu học xá phức hợp hiện đại bậc nhất tại Tp.HCM vào năm 2020. Đây chính là bước phát triển tiếp theo của nhà trường trong giai đoạn mới.
                      <div class='text-center'>
                        <figure class="figure">
                          <img src={image5} class="figure-img img-fluid rounded" alt="..."/>
                          <figcaption class="figure-caption">Cam kết cung cấp cho xã hội nguồn nhân lực ưu việt là mục tiêu hàng đầu</figcaption>
                        </figure>
                      </div>
                      Xác định hướng đi mang tầm chiến lược kết hợp cùng thành quả UEF đạt được trong 13 năm qua, phần nào đã đưa thương hiệu đào tạo của nhà trường đứng vững trong phân khúc đào tạo nhân lực cao cấp tại Việt Nam, mang đến sự tin tưởng tuyệt đối trong lòng thí sinh và phụ huynh cả nước.
                      </p>
                    </div>
                </div>
                
              </div>
              <div class='row news-relation-title'>
                Tin liên quan
              </div>
              <div class='news-related'>
              {news.map((Noibat, index) =>
                              {
                              
                              if(index >= 6) return null;

                              return(
                                <div class='title new-line'>
                                  <li key={Noibat.id}>
                                    <Link to={`/tin-tuyen-sinh/${Noibat._id}`}> {Noibat.title}</Link>
                                  </li>
                                </div>
                                
                              )}
                            )}
              </div>
            </section>
          </div>
          <div class='col-md-4 right-general-news'>
            <section class='section-center-right'>
              <Noibat/>
              <References/>
              <Video/>
              <Podcast/>
            </section>
           
          </div>
        </div>
      </div>
      </section>
    </Wrapper>

  )
}
const Wrapper = styled.section`
  .wrap-news-detail{
    text-align: justify;
    font-size: 14px;
    line-height: 25px;
    color: #000;
    padding: 20px;
  }
  h1{
    font-size: 18px;
    line-height: 25px;
    color: black;
    text-align: justify;
  }
`

export default About