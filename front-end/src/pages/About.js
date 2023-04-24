import React from 'react'
import image4 from "../assets/image4.jpg"
import image5 from "../assets/image5.jpg"
import { Link } from 'react-router-dom'
import banner1 from '../assets/banner1.png'
import data from '../db.json'
import styled from 'styled-components'

const About = () => {
  return (
    <Wrapper>
      <section className='section-center'>
      <div class='wrap-body-container'>

        <div class='row wrap-general-news'>
          <div class='col-4-of-6 left-general-news'>
            <section class='section-center-left'>
              <div class='wrap-container-detail'>
                <div class='row news-category-title'> 
                  <div class='wrap-title'>Giới thiệu</div>
                </div>              
                <div class='row wrap-news-detail'>
                    <h1 class='news-detail-title'>Tổng quan UEF</h1>
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
            </section>
          </div>
                    <div class='col-2-of-6 right-general-news'>
            <section class='section-center-right'>
              <div class='wrap-home-notify'>
                <div class='row new-category-title'>
                  <Link >
                    <div class='wrap-title'>
                      Nổi bật
                    </div>
                  </Link>
                </div>
                <div class='row wrap-school-notify' style={{textAlign:'justify'}}>
                  {data.Noibat && data.Noibat.map((noibat,id) => (
                          
                          <div key={id} class='new-line'>
                        
                              <li>{noibat.title}</li>
                          </div>
                          ))}
                  </div>
                </div>
            </section>
            <section class='section-center-right'>
              <div>
                <div class='quick-reference'>
                  <ul>
                    <li class='wrap-link-image'>
                      <Link>
                        <span><img src={banner1} width='100%'/></span>
                      </Link>
                    </li>
                    <li class='wrap-link-image'>
                      <Link>
                        <span><img src={banner1} width='100%'/></span>
                      </Link>
                    </li>
                    <li class='wrap-link-image'>
                      <Link>
                        <span><img src={banner1} width='100%'/></span>
                      </Link>
                    </li>
                    <li class='wrap-link-image'>
                      <Link>
                        <span><img src={banner1} width='100%'/></span>
                      </Link>
                    </li>
                    <li class='wrap-link-image'>
                      <Link>
                        <span><img src={banner1} width='100%'/></span>
                      </Link>
                    </li>
                    <li class='wrap-link-image'>
                      <Link>
                        <span><img src={banner1} width='100%'/></span>
                      </Link>
                    </li>
                    <li class='wrap-link-image'>
                      <Link>
                        <span><img src={banner1} width='100%'/></span>
                      </Link>
                    </li>
                    <li class='wrap-link-image'>
                      <Link>
                        <span><img src={banner1} width='100%'/></span>
                      </Link>
                    </li>
                    <li class='wrap-link-image' width='100%'>
                      <Link>
                        <span><img src={banner1} width='100%'/></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section class='section-center-right'>
              <div class='wrap-video-container'>
                <div class='row news-category-title'>
                  <div class='wrap-title'>
                    Video
                  </div>
                  <div class='video'>
                    <Link>
                      <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" width="100%" height="300" src="https://www.youtube.com/embed/yjE6OlsTdFE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div class='wrap-video-container'>
                <div class='row news-category-title'>
                  <div class='wrap-title'>
                    UEF.Podcast
                  </div>
                  <div class='podcast'>&nbsp;</div>
                </div>
              </div>
            </section>
            <section class='section-center-right'>
              <div class='wrap-video-container'>
                <div class='row news-category-title'>
                  <div class='wrap-title'>Newsletter</div>
                  <div>&nbsp;</div>
                </div>
                <Link>
                  <div class='row news-category-title'>
                    <div class='wrap-title'>Kỷ yếu 15 năm</div>
                  </div>
                </Link>
              </div>
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