import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import partner1 from "../assets/partner1.png"
import partner2 from "../assets/image15.jpg"

const Nganhdaotao = () => {
  return (
    <Wrapper>
        <section class='section-bottom'>
            <div class='wrap-container'>
                <div class='wrap-program-title'>
                    <div class='wrap-major-title'>Các ngành đào tạo</div>
                </div>
                <div class='row wrap-major-content' style={{clear:'both'}}>
                    <div class='col' style={{width:'25%'}}>
                        <div class='major-home-title'>
                            <Link to='/qtkd'>
                                1. Quản trị kinh doanh
                            </Link>
                        </div>
                        <div class='major-home-title'>
                            <Link>
                                2. Marketing
                            </Link>
                        </div>
                        <div class='major-home-title'>
                            <Link>
                                3. Quản trị nhân lực
                            </Link>
                        </div>
                        <div class='major-home-title'>
                            <Link>
                                4. Kinh doanh quốc tế
                            </Link>
                        </div>
                        <div class='major-home-title'>
                            <Link>
                                5. Logistics và quản lý chuỗi cung ứng
                            </Link>
                        </div>
                        <div class='major-home-title'>
                            <Link to='/bds'>
                                6. Bất động sản
                            </Link>
                        </div>
                        <div class='major-home-title'>
                            <Link>
                                7. Kinh tế quốc tế
                            </Link>
                        </div>
                        <div class='major-home-title'>
                            <Link>
                                8. Tài chính - Ngân hàng
                            </Link>
                        </div>
                        <div class='major-home-title'>
                            <Link>
                                9. Kế toán
                            </Link>
                        </div>

                    </div>
                    <div class='col' style={{width:'25%'}}>
                        <div class='major-home-title'>
                            <Link>
                                10. Kinh doanh thương mại
                            </Link>
                        </div>
                        <div class='major-home-title'>
                            <Link>
                                11. Tài chính quốc tế
                            </Link>
                        </div>
                        <div class='major-home-title'>
                            <Link>
                                12. Công nghệ tài chính
                            </Link>
                        </div>
                        <div class='major-home-title'>
                            <Link>
                                13. Kiểm toán
                            </Link>
                        </div>
                        <div class='major-home-title'>
                            <Link>
                                14. Công nghệ thông tin
                            </Link>
                        </div>
                        <div class='major-home-title'>
                            <Link>
                                15. Thương mại điện tử
                            </Link>
                        </div>
                        <div class='major-home-title'>
                            <Link>
                                16. Khoa học dữ liệu
                            </Link>
                        </div>
                        <div class='major-home-title'>
                            <Link>
                                17. Thiết kế đồ họa
                            </Link>
                        </div>


                    </div>
                    <div class='col' style={{width:'25%'}}>
                        <div class='major-home-title'>
                            <Link>
                                18. Quan hệ quốc tế
                            </Link>
                        </div>
                        <div class='major-home-title'>
                            <Link>
                                19. Ngôn ngữ Anh
                            </Link>
                        </div>
                        <div class='major-home-title'>
                            <Link>
                                20. Ngôn ngữ Nhật
                            </Link>
                        </div>
                        <div class='major-home-title'>
                            <Link>
                                21. Ngôn ngữ Hàn Quốc
                            </Link>
                        </div>
                        <div class='major-home-title'>
                            <Link>
                            22. Ngôn ngữ Trung Quốc
                            </Link>
                        </div>
                        <div class='major-home-title'>
                            <Link>
                                23. Quản trị khách sạn
                            </Link>
                        </div>
                        <div class='major-home-title'>
                            <Link>
                                24. QT dv du lịch và lữ hành
                            </Link>
                        </div>
                        <div class='major-home-title'>
                            <Link>
                                25. QT nhà hàng và dv ăn uống
                            </Link>
                        </div>


                    </div>
                    <div class='col' style={{width:'25%'}}>
                        <div class='major-home-title'>
                            <Link>
                                26. Luật kinh tế
                            </Link>
                        </div>
                        <div class='major-home-title'>
                            <Link>
                                27. Luật quốc tế
                            </Link>
                        </div>
                        <div class='major-home-title'>
                            <Link>
                                28. Luật
                            </Link>
                        </div>
                        <div class='major-home-title'>
                            <Link>
                                29. Quan hệ công chúng
                            </Link>
                        </div>
                        <div class='major-home-title'>
                            <Link>
                                30. Công nghệ truyền thông
                            </Link>
                        </div>
                        <div class='major-home-title'>
                            <Link>
                                31. Tâm lý học
                            </Link>
                        </div>
                        <div class='major-home-title'>
                            <Link>
                                32. Truyền thông đa phương tiện
                            </Link>
                        </div>
                        <div class='major-home-title'>
                            <Link>
                                33. Quản trị sự kiện
                            </Link>
                        </div>
                        <div class='major-home-title'>
                            <Link>
                                34. Digital Makerting
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <section class='section-bottom'>
            <div class='wrap-partner-container'>
                <div class='row'>
                    <div class='wrap-partner-title'>Doanh nghiệp đối tác</div>
                </div>
                <div class='row wrap-slider-partner'>
                          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active text-center">
              <ul class='company-list' style={{listStyleType:'none', padding:'0', display:'inline-flex'}}>
                <li style={{margin:'0px 10px'}}>
                  <img src={partner1} style={{height:96}} />
                </li>
                <li style={{margin:'0px 20px'}}>
                  <img src={partner1} style={{height:96}} />
                </li>
                <li style={{margin:'0px 20px'}}>
                  <img src={partner1} style={{height:96}}/>
                </li>
                <li style={{margin:'0px 20px'}}>
                  <img src={partner1} style={{height:96}}/>
                </li>
                <li style={{margin:'0px 20px'}}>
                  <img src={partner1} style={{height:96}}/>
                </li>
                <li style={{margin:'0px 20px'}}>
                  <img src={partner1} style={{height:96}}/>
                </li>
                
              </ul>
            </div>
            <div class="carousel-item text-center">
              <ul class='company-list' style={{listStyleType:'none', padding:'0', display:'inline-flex'}}>
                <li style={{margin:'0px 20px'}}>
                  <img src={partner2} style={{height:128}}/>
                </li>
                <li style={{margin:'0px 20px'}}>
                  <img src={partner2} style={{height:128}}/>
                </li>
                <li style={{margin:'0px 20px'}}>
                  <img src={partner2} style={{height:128}}/>
                </li>
                <li style={{margin:'0px 20px'}}>
                  <img src={partner1} style={{height:128}}/>
                </li>
              </ul>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>  
                </div>
            </div>
        </section>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.wrap-major-title{
    padding: 10px 12px;
}
.wrap-major-content{
    padding: 0 0 10px 30px;
}

.major-home-title{
    width: 100%;
    display: block;
    padding: 10px 0px 10px 2px;
}
.wrap-partner-title{
    font-size: 14px;
    font-weight: bold;
    float: left;
    padding: 10px 12px;
}

  a{
    color:#b22124;
    font-size:12px;
    line-height: 14px;
  }
`

export default Nganhdaotao