import React from 'react'
import data from '../db.json'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import banner1 from '../assets/banner1.png'

const Huongnghiep = () => {
  return (
    <Wrapper>
    <section className='section-center'>
      <div class='wrap-body-container'>

        <div class='row wrap-general-news'>
          <div class='col-4-of-6 left-general-news'>
            <section class='section-center-left'>
              <div class='wrap-container-detail'>
                <div class='row news-category-title'> 
                  <div class='wrap-title'>Tin hướng nghiệp</div>
                </div>              
                <div class='row wrap-news-detail'>
                    <div class='news-date'></div>
                    <table className="table table-hover">
                      <tbody>
                        {data.Tinhuongnghiep && data.Tinhuongnghiep.map((tinhuongnghiep) => (
                          <tr>
                            <td><img src={tinhuongnghiep.imageUrl} height={128}/></td>
                            <td>{tinhuongnghiep.title}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                </div>
              </div>
            </section>
          </div>
                    <div class='col-2-of-6 right-general-news'>
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
              <div class='wrap-container'>
                <div class='row news-chon-nganh'>
                  Chọn ngành tại UEF
                </div>
                <div class='row huong-nghiep'>
                  <div class='faq-col-1'>
                    <div class='quick-refence-sub'>
                      
                      <Link>
                          Công nghệ thông tin
                      </Link>
                    </div>
                    <div class='quick-refence-sub'>
                      <Link>
                          Công nghệ thông tin
                      </Link>
                    </div>
                    <div class='quick-refence-sub'>
                      <Link>
                          Công nghệ thông tin
                      </Link>
                    </div>
                    <div class='quick-refence-sub'>
                      <Link>
                          Công nghệ thông tin
                      </Link>
                    </div>
                    <div class='quick-refence-sub'>
                      <Link>
                          Công nghệ thông tin
                      </Link>
                    </div>
                    <div class='quick-refence-sub'>
                      <Link>
                          Công nghệ thông tin
                      </Link>
                    </div><div class='quick-refence-sub'>
                      <Link>
                          Công nghệ thông tin
                      </Link>
                    </div>
                    <div class='quick-refence-sub'>
                      <Link>
                          Công nghệ thông tin
                      </Link>
                    </div>
                  </div>
                </div>
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
.faq-col-1 {
  padding-bottom: 0px;
  width: 100%;
}

`
export default Huongnghiep