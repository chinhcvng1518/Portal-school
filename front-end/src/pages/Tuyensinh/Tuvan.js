import React from 'react'
import Nganhdaotao from '../../components/Nganhdaotao'
import data from "../../db.json"
import image16 from "../../assets/image16.png"
import { Link } from 'react-router-dom'
import banner1 from '../../assets/banner1.png'
const Tuvan = () => {
  return (
    <>
<section className='section-center'>
    <div class='wrap-body-container'>

        <div class='row wrap-general-news'>
          <div class='col-4-of-6 left-general-news'>
            <section class='section-center-left'>
              <div class='wrap-container-detail'>
                <div class='row news-category-title'> 
                  <div class='wrap-title'>Danh sách câu hỏi - Trả lời</div>
                </div>              
                <div class='row wrap-news-detail'>
                    <div class='news-date'></div>
                    <table className="table table-hover">
                    <thead style={{ textAlign: 'center' }}>
                        <tr>
                        <th scope="row">STT</th>
                        <th scope='col'>Câu hỏi</th>
                        <th scope='col'>Trả lời</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.Cauhoi && data.Cauhoi.map((cauhoi, index) => (
                        <tr>
                            <th scope='row'>{index + 1} </th>
                            <td class='text-start'>{cauhoi.question}</td>
                            <td class='text-justify'>{cauhoi.answer}</td>
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
              <div class='wrap-home-notify'>
                <div class='row new-category-title'>
                  <Link >
                    <div class='wrap-title'>
                      Đặt câu hỏi
                    </div>
                  </Link>
                </div>
                <div class='row wrap-school-notify' style={{textAlign:'justify'}}>
                    <div class='wrap-contents news-contents'>
                    <form>
                        <div class="form-group">
                            <label for="exampleInputName">Họ tên</label>
                            <input type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Nhập họ tên"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Tuổi</label>
                            <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Nhập tuổi"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Địa chỉ</label>
                            <input type="address" class="form-control" id="exampleInputPassword1" placeholder="Nhập địa chỉ"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Email</label>
                            <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Nhập email"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Điện thoại</label>
                            <input type="number" class="form-control" id="exampleInputPhoneNumber" placeholder="Nhập số điện thoại"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Câu hỏi</label>
                            <input type="text" class="form-control" id="exampleInputPhoneNumber" placeholder="Nhập câu hỏi"/>
                        </div><br/>
                        <button type="submit" class="btn btn-primary">Gửi câu hỏi</button>
                    </form>
                    </div>
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
          </div>
        </div>
      </div>
    
    </section>
    <Nganhdaotao/>
    </>
    
    
  )
}

export default Tuvan