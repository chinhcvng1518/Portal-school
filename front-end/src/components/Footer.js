import React from 'react'
import partner1 from "../assets/partner1.png"
import partner2 from "../assets/image15.jpg"
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper className='section-center'>
    <footer class="text-white text-center text-lg-start wrap-partner-container">
      <div class="container p-4">
        <div class="row">
          <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h6 class='text-body'>Trường Đại học Kinh tế - Tài chính Thành phố Hồ Chí Minh</h6>

            <p style={{color:'black'}}>
              * Trụ sở 141 - 145 Điện Biên Phủ Phường 15, Quận Bình Thạnh, TP.HCM
            </p>
            <p style={{color:'black'}}>
              * Cơ sở 276 - 282 Điện Biên Phủ Phường 17, Quận Bình Thạnh, TP.HCM
            </p>
          </div>

          <div class="col-lg-3 col-md-6 mb-4 mb-md-0 text-body">
            <h6 >
              <span><i class="bi bi-envelope"></i></span>
              <a href="#!" class="text-reset ">tuyensinh@uef.edu.vn</a>
            </h6>

            <ul class="list-unstyled mb-0">
              <li style={{margin:'10px 0px 0px 0px'}}>
                <span><i class="bi bi-telephone"></i></span>
                <a href="#!" class="text-reset" style={{fontSize:"15px"}}>(028) 5422 5555 - (028) 5422 6666</a>
              </li>
              <li style={{margin:'15px 0px 0px 0px'}}>
                <a href="#!" class="text-reset" style={{fontSize:"15px"}}>Hotline: 094 998 1717 - 091 648 1080</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 mb-4 mb-md-0 text-body">
            <div class="container">
                <div class="row row-cols-2">
                  <div class="col">
                  <h6 class="text-uppercase fw-bold mb-4">
                    <a href="" class="me-4 text-reset">
                      <i class="bi bi-facebook"></i>      
                    </a>
                  </h6>
                  </div>
                  <div class="col">
                    <h6 class="text-uppercase fw-bold mb-4">
                    <a href="" class="me-4 text-reset">
                      <i class="bi bi-facebook"></i>      
                    </a>
                  </h6>
                  </div>
                  <div class="col">
                    <h6 class="text-uppercase fw-bold mb-4">
                    <a href="" class="me-4 text-reset">
                      <i class="bi bi-facebook"></i>      
                    </a>
                  </h6>
                  </div>
                  <div class="col">
                    <h6 class="text-uppercase fw-bold mb-4">
                    <a href="" class="me-4 text-reset">
                      <i class="bi bi-facebook"></i>      
                    </a>
                  </h6>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </footer>

    {/* <section class='section-footer'>
        <div class='footer'>
          <div class='row footer-home'>
            <div>
              <div class='col-2-of-6 address'>
                <div class='university'>
                  Trường Đại học Kinh tế - Tài chính Thành phố Hồ Chí Minh 
                </div>
                <div class='location'>
                  * Trụ sở 141 - 145 Điện Biên Phủ Phường 15, Quận Bình Thạnh, TP.HCM <br/>
                  * Cơ sở 276 - 282 Điện Biên Phủ Phường 17, Quận Bình Thạnh, TP.HCM
                </div>
              </div>
              <div class='col-1-of-6 contact'>
                <div class='email'>
                  <span class='icon-email'>
                     tuyensinh@uef.edu.vn
                  </span>
                </div>
                <div class='phone'>
                  <span>
                    <Link>(028) 5422 5555</Link>
                     - 
                    <Link>(028) 5422 6666</Link>
                  </span>
                </div>
                <div class='phone'>
                  Hotline:
                    <Link>0949981717</Link>
                     -
                    <Link>0916481080</Link> 
                </div>
              </div>
              <div class='col-3-of-6 wrap-social'>
                <div class='w-social'>
                  <ul>
                    <Link>
                      <li><i class="bi bi-facebook"></i></li>
                    </Link>
                    <Link>
                      <li><i class="bi bi-facebook"></i></li>
                    </Link>
                    <Link>
                      <li><i class="bi bi-facebook"></i></li>
                    </Link>
                    <Link>
                      <li><i class="bi bi-facebook"></i></li>
                    </Link>
                    <Link>
                      <li><i class="bi bi-facebook"></i></li>
                    </Link>
                    <Link>
                      <li><i class="bi bi-facebook"></i></li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </Wrapper>
  )
}
const Wrapper = styled.section`

`
export default Footer