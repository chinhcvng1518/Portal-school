import React from 'react'
import image11 from '../../assets/image11.jpg'
import image16 from "../../assets/image16.png"
import data from "../../db.json"
import { Link } from 'react-router-dom'
const Cntt = () => {
  return (
    <>
        <section className='section-center'>
                <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a><Link to='/'>Trang chủ</Link></a>
              </li>
              <li class="breadcrumb-item">
                <a><Link to='/'>Ngành</Link></a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                <a><Link to='/cntt'>Công nghệ thông tin</Link></a>
              </li>
            </ol>
          </nav>
        </div>
      </nav>
          <div class='container'>
            <div class='row'>
              <div class='col-8'>
                <h5>Ngành</h5>
                <h6>Công nghệ thông tin</h6>
                <p>Có những thành tựu công nghệ làm thay đổi cả thế giới nhưng quy về mục đích chung vẫn là phục vục con người và xã hội, với chúng tôi mong muốn lớn nhất là đào tạo bạn thành những chuyên gia công nghệ thông tin giỏi chuyên môn để mang đến giá trị công nghệ thực sự cho cộng đồng, thực hiện được ước mơ chinh phục chân trời bao la của thế giới công nghệ<hr/>

                <h6>Công nghệ thông tin là gì? Ra trường làm việc gì?</h6>
                Khái niệm Công nghệ thông tin là gì? Công nghệ thông tin (IT – Information Technology) là một thuật ngữ bao gồm phần mềm, mạng lưới internet, hệ thống máy tính sử dụng cho việc phân phối và xử lý dữ liệu, trao đổi, lưu trữ và sử dụng thông tin dưới hình thức khác nhau.<br/>
                Một cách dễ hiểu hơn, Công nghệ thông tin là việc sử dụng công nghệ hiện đại vào việc tạo ra, xử lý, truyền dẫn thông tin, lưu trữ, khai thác thông tin....Tốt nghiệp ra trường, sinh viên có thể làm việc ở các vị trí Lập trình viên, Kiểm duyệt chất lượng phần mềm, Chuyên viên phân tích thiết kế hệ thống, quản lý dữ liệu, quản trị mạng, kỹ thuật phần cứng máy tính; Chuyên gia quản lý, kinh doanh, điều phối các dự án công nghệ thông tin;...</p>
                <div class='text-center'>
                    <figure class="figure">
                        <img src={image11} class="figure-img img-fluid rounded" alt="..."/>
                        <figcaption class="figure-caption">Mã ngành Công nghệ tài chính là: 7340205</figcaption>
                    </figure>
                </div>
                <h6>Công nghệ thông tin gồm các chuyên ngành:</h6>
                <li>An toàn thông tin</li>
                <li>Mạng máy tính và truyền thông</li>
                <li>Công nghệ phần mềm</li>       
                <li>Trí tuệ nhân tạo</li>
                <h6>Bạn sẵn sàng chưa</h6>
                <p>Tại UEF, bên cạnh hệ thống kiến thức chuyên môn, ngoại ngữ, sinh viên còn được thực hành tại trung tâm máy tính hiện đại và đa tiện ích; tham gia các lớp kỹ năng mềm; tham gia sân chơi học thuật về công nghệ giúp sinh viên trở thành những cá thể đa năng, phát triển toàn diện kỹ năng chuyên môn, nghiệp vụ để tự tin hòa nhập, chinh phục thế giới phẳng luôn chuyển động và đầy mới lạ.</p>
                <h6>Kiến thức và kỹ năng đạt được: </h6>
                <li>An toàn thông tin</li>
                <li>Khối kiến thức đại cương về khoa học tự nhiên</li>
                <li>Kiến thức chuyên sâu về công nghệ phần mềm, hệ thống thông tin, mạng máy tính, kỹ thuật máy tính</li>       
                <li>Kỹ năng triển khai ứng dụng công nghệ thông tin và nắm bắt các xu thế mới</li>
                <li>Lập trình phần mềm máy tính, điện thoại di động, game, thương mại điện tử; xây dựng hệ thống thông tin; phân tích và lập dự án triển khai các phần mềm ứng dụng</li>
                <li>Các môn học nền tảng về: Lập trình di động, Kiểm thử phần mềm, Kỹ thuật truyền số liệu (CTI), Mạng máy tính nâng cao, Phân tích và thiết kế hệ thống thông tin, Khai phá dữ liệu, Hệ thống thông tin quản lý, Bảo mật cơ sở dữ liệu, An ninh mạng,… </li>
              </div>
               <div class='col-4'>
                <h5>Nổi bật</h5>
                <table className="table table-hover">
                  <tbody>
                    {data.Noibat && data.Noibat.map((noibat) => (
                      <tr>
                        <td>{noibat.title}</td>
                      </tr>
                    ))}
                  </tbody>
                  <img src={image16}/>
                </table>
              </div>
            </div>
          </div>
        </section>
        
    </>
    )
}

export default Cntt