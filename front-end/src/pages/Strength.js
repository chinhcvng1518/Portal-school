import React from 'react'
import image6 from "../assets/image6.jpg"
import image7 from "../assets/image7.jpg"
import image8 from "../assets/image8.jpg"
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import banner1 from '../assets/banner1.png'
import data from '../db.json'

const Strength = () => {
  return (
    <Wrapper>

    <section className='section-center'>
      <div class='wrap-body-container'>

        <div class='row wrap-general-news'>
          <div class='col-4-of-6 left-general-news'>
            <section class='section-center-left'>
              <div class='wrap-container-detail'>
                <div class='row news-category-title'> 
                  <div class='wrap-title'>Thế mạnh UEF</div>
                </div>              
                <div class='row wrap-news-detail'>
                    <h1 class='news-detail-title'>Tại sao chọn UEF</h1>
                    <div class='news-date'></div>
                    <div class='wrap-contents news-contents'>
                      <p>
                        <p>Chương trình đào tạo được xây dựng theo chuẩn quốc tế, đào tạo bạn trở thành người dẫn đầu trong lĩnh vực nghề nghiệp mà mình lựa chọn. Chúng tôi mang đến cho bạn mô hình Đào tạo gắn liền thực tiễn qua quá trình “Đưa sinh viên đến với doanh nghiệp” – “Đưa doanh nghiệp đến với sinh viên”. Tại UEF, chúng tôi không chỉ mang lại cho bạn bằng cấp giá trị mà còn cung cấp cho bạn kiến thức để tiến xa hơn trên con đường sự nghiệp.</p>
                        <div class='text-center'>
                          <figure class="figure">
                            <img src={image6} class="figure-img img-fluid rounded" alt="..."/>
                          <figcaption class="figure-caption">Chương trình đào tạo được xây dựng theo chuẩn quốc tế</figcaption>
                        </figure>
                        </div>
                        <p>Cơ sở vật chất hiện đại với hệ thống phòng học, phòng thực hành trang bị máy lạnh, wifi phủ sóng 24/24. Trung tâm thư viện đa phương tiện với hàng ngàn đầu sách liên tục cập nhật từ các trường đại học danh tiếng. Hệ thống trung tâm Văn nghệ -  Thể thao – Giải trí tiện nghi bậc nhất, đạt chuẩn Quốc tế.</p>
                        <p>Tiếng Anh là ngôn ngữ chính trong chương trình học được UEF đầu tư xây dựng phù hợp với đa dạng đối tượng nhằm cung cấp cho sinh viên kiến thức chuyên môn, kỹ năng thực hành nghề nghiệp hiệu quả sau khi tốt nghiệp, hơn nữa giúp sinh viên hoàn toàn tự tin hòa nhập vào thị trường lao động toàn cầu.</p>
                        <div class='text-center'>
                          <figure class="figure">
                            <img src={image7} class="figure-img img-fluid rounded" alt="..."/>
                          <figcaption class="figure-caption">UEF luôn chú trọng đầu tư cơ sở vật chất, trang thiết bị phục vụ công tác đào tạo</figcaption>
                        </figure>
                        </div>
                        <p>Tiếng Anh là ngôn ngữ chính trong chương trình học được UEF đầu tư xây dựng phù hợp với đa dạng đối tượng nhằm cung cấp cho sinh viên kiến thức chuyên môn, kỹ năng thực hành nghề nghiệp hiệu quả sau khi tốt nghiệp, hơn nữa giúp sinh viên hoàn toàn tự tin hòa nhập vào thị trường lao động toàn cầu.</p>
                        <div class='text-center'>
                          <figure class="figure">
                            <img src={image8} class="figure-img img-fluid rounded" alt="..."/>
                            <figcaption class="figure-caption">Tiếng Anh là ngôn ngữ chính trong học tập và giảng dạy</figcaption>
                          </figure>
                        </div>
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
export default Strength