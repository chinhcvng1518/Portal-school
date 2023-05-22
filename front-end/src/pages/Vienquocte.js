import React from 'react'
import image16 from "../assets/image16.png"
import data from "../db.json"
import styled from 'styled-components'
import Carousel from './Carousel'
import image20 from "../assets/image20.jpg"
import image21 from "../assets/image21.jpg"
import { Link } from 'react-router-dom'

const Vienquocte= () => {
  return (
    
    <section className='section-center'>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={image20} class="d-block w-100"  alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={image21} class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class='row wrap-general-news'>
          <div class='col-md-8 left-general-news'>
            <section class='section-center-left'>
              <div class='wrap-home-container'>
                <div class='row new-category-title'>
                  <Link to='/thong-tin-tuyen-sinh'>
                    <div class='wrap-title'>Thông tin tuyển sinh</div>
                  </Link>

                </div>
                <div class='row wrap-admission-news'>
                  <div class='col-md-6 wrap-first-news'>
                      <div class='wrap-image'>
                        <img src={data.Sukien[0].imageUrl} style={{width:'100%', height:'100%'}}/>
                      </div>
                      <div class=''>
                        <div class='news-title'>
                          {data.Sukien[0].title}
                        </div>
                        <div class='news-summary'>
                          ABC
                        </div>
                      </div>
                  </div>
                  <div class='col-md-6 wrap-next-news'>
                    {data.Sukien && data.Sukien.map((sukien,id) => (
                        
                        <div class='title new-line' key={id}>
                            <li>{sukien.title}</li>
                        </div>

                        ))}
                        
                  </div>
                </div>
              </div>
            </section>
            <section class='section-center-left'>
              <div class='wrap-home-container'>
                <div class='row new-category-title'>
                  <Link>
                    <div class='wrap-title'>Tin tức sự kiện</div>
                  </Link>

                </div>
                <div class='row wrap-admission-news'>
                  <div class='col-md-6 wrap-first-news'>
                      <div class='wrap-image'>
                        <img src={data.Thongtinthuctap[0].imageUrl} style={{width:'100%', height:'100%'}}/>
                      </div>
                      <div class='wrap-news' style={{clear:'both'}}>
                        <div class='news-title'>
                          {data.Thongtinthuctap[0].title}
                        </div>
                        <div class='news-summary'>
                          ABC
                        </div>
                      </div>
                  </div>
                  <div class='col-md-6 wrap-next-news'>
                    {data.Thongtinthuctap && data.Thongtinthuctap.map((thongtinthuctap,id) => (
                        
                        <div key={id} class='new-line'>
                      
                            <li>{thongtinthuctap.title}</li>
                        </div>
                        ))}
                  </div>
                </div>
              </div>
            </section>
            <section class='section-center-left'>
              <div class='wrap-home-container'>
                <div class='row new-category-title'>
                  <Link>
                    <div class='wrap-title'>Đối tác chuyển tiếp quốc tế</div>
                  </Link>

                </div>
                <div class='row'>
                  <div class='col-md-6 wrap-first-news'>
                      <div class='wrap-image'>
                        <img src={data.Hanhtrangnghenghiep[0].imageUrl} style={{width:'100%', height:'100%'}}/>
                      </div>
                      <div class='wrap-news' style={{clear:'both'}}>
                        <div class='news-title'>
                          {data.Hanhtrangnghenghiep[0].title}
                        </div>
                        <div class='news-summary'>
                          ABC
                        </div>
                      </div>
                  </div>
                  <div class='col-md-6 wrap-next-news' style={{ textAlign:'justify'}}>
                    {data.Hanhtrangnghenghiep && data.Hanhtrangnghenghiep.map((hanhtrangnghenghiep,id) => (
                        
                        <div key={id} class='new-line'>
                      
                            <li>{hanhtrangnghenghiep.title}</li>
                        </div>
                        ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class='col-md-4 right-general-news'>
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

          </div>
        </div>
    </section>

  )
}
const Wrapper = styled.section`
`
export default Vienquocte