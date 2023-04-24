import React from 'react'
import image10 from '../../assets/image10.jpg'
import image16 from "../../assets/image16.png"
import data from "../../db.json"
import { Link } from 'react-router-dom'
const Cntc = () => {
  return (
    <>
        <section className='section-center'>
                <nav class="navbar navbar-expand-lg navbar-light ">
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
                <a><Link to='/cntt'>Công nghệ tài chính</Link></a>
              </li>
            </ol>
          </nav>
        </div>
      </nav>
            <div class='container'>
              <div class='row'>
                <div class='col-8'>
                  <h6>Công nghệ tài chính</h6>
                  <p>Công nghệ tài chính là một trong những tín hiệu thành công dẫn đầu cho cuộc cách mạng công nghiệp 4.0, mang đến cho con người những tiện ích thông qua sự phát triển công nghệ toàn diện, có tầm ảnh hưởng lớn đến các lĩnh vực thương mại, ngân hàng, tư vấn tài chính và sản phẩm tài chính. Vậy Công nghệ tài chính là gì?, Học những gì?, Cơ hội việc làm rao sao?, Điều kiện tuyển sinh như thế nào?,... Tất cả những thắc mắc đó sẽ được giải đáp trong bài viết dưới đây.
    
                  <h6>Công nghệ tài chính là gì?</h6>
                  Công nghệ tài chính (Fintech) là một ngành kết hợp giữa công nghệ và tài chính. Fintech là thuật ngữ mô tả sự đổi mới và hiệu quả nhờ công nghệ trong lĩnh vực tài chính. Các hoạt động Fintech hiện nay gắn liền với sự ra đời và ứng dụng của công nghệ chuỗi khối, phân tích dữ liệu lớn, trực quan hóa dữ liệu, trí tuệ nhân tạo,… Những công cụ này đã và đang đóng vai trò là chất xúc tác tạo đổi mới đáng kể trong ngành dịch vụ tài chính.</p>
                  <div class='text-center'>
                      <figure class="figure">
                          <img src={image10} class="figure-img img-fluid rounded" alt="..."/>
                          <figcaption class="figure-caption">Mã ngành Công nghệ tài chính là: 7340205</figcaption>
                      </figure>
                  </div>
                  <p>
                  <h6>Học ngành Công nghệ tài chính tại UEF ra sao?</h6>
                  Chọn học ngành Công nghệ tài chính tại Trường Đại học Kinh tế - Tài chính TP.HCM (UEF), sinh viên sẽ được đào tạo theo chương trình song ngữ, kiến thức gắn thực tiễn, học tập trong môi trường quốc tế, chú trọng tiếng Anh giao tiếp và chuyên môn. Bạn còn được cung cấp nền tảng kiến thức, kỹ năng vững chắc để tiến tới tạo dựng tên tuổi, nâng cao vị thế bản thân trong lĩnh vực Công nghệ tài chính. 
                  </p>
                  <h6>Kiến thức và kỹ năng đạt được:</h6>
                      <li>Sinh viên sẽ được đào tạo kiến thức nền tảng về kinh tế, kinh doanh, tài chính - ngân hàng cùng với các kiến thức khoa học tự nhiên và xã hội trong kỷ nguyên số.</li>
                      <li>Được trang bị các kiến thức về công nghệ, khoa học máy tính, khoa học dữ liệu, công cụ toán học và thống kê ứng dụng trong lĩnh vực tài chính.</li>
                      <li>Sinh viên ngành Công nghệ tài chính được rèn luyện đầy đủ các kỹ năng cần thiết, thái độ làm việc để đủ năng lực làm việc và thích ứng với môi trường thay đổi nhanh chóng của các tổ chức tài chính, tổ chức công nghệ tài chính.</li>
                      <li>Các môn học chuyên ngành tiêu biểu: Quản trị tài chính doanh nghiệp, Phát triển hệ thống thương mại điện tử, Trí tuệ nhân tạo, Tiền số và công nghệ Blockchain,...</li>
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

export default Cntc