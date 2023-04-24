import React from 'react'
import image12 from "../../assets/image12.jpg"
import image16 from "../../assets/image16.png"
import data from "../../db.json"
import { Link } from 'react-router-dom'

const Cntthong = () => {
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
                <a><Link to='/cntthong'>Công nghệ truyền thông</Link></a>
              </li>
            </ol>
          </nav>
        </div>
      </nav>
        <div class='container'>
          <div class='row'>
            <div class='col-8'>
              <h6>Công nghệ truyền thông</h6>
        <p>Được xem là một “làn gió mới” trong hệ thống ngành nghề đào tạo tại UEF, Công nghệ truyền thông sẽ là nơi khởi nguồn cho các nhà quản lý tài năng – những người trẻ “sành” công nghệ, yêu thích lĩnh vực sản xuất phim ảnh, âm nhạc, sân khấu và giải trí nói chung.</p>
        <div class='text-center'>
            <figure class="figure">
                <img src={image12} class="figure-img img-fluid rounded" alt="..."/>
                <figcaption class="figure-caption">Mã ngành Công nghệ truyền thông: 7320106</figcaption>
            </figure>
        </div>
        <h6>Công nghệ truyền thông là gì?</h6>
        <p>Công nghệ truyền thông là gì? Công nghệ truyền thông là ngành học nghiên cứu về quá trình sản xuất truyền thông thông qua các công nghệ hiện đại (sản xuất phim điện ảnh, chương trình phát thanh, truyền hình, phim quảng cáo, multimedia và các thể loại sản phẩm truyền thông hiện đại khác), quá trình kinh doanh truyền thông nghe nhìn (kinh doanh và marketing phim ảnh, chương trình, bản quyền nội dung nghe nhìn, thời lượng quảng cáo,…).</p>
        <h6>Học ngành Công nghệ truyền thông tại UEF ra sao?</h6>
        <p>Chọn học ngành Công nghệ truyền thông tại Trường Đại học Kinh tế - Tài chính thành phố Hồ Chí Minh (UEF), bạn sẽ được đào tạo theo phương pháp hiện đại, gắn thực tiễn, học tập trong môi trường chuẩn Quốc tế, chú trọng tiếng Anh giao tiếp và chuyên môn. Bạn được cung cấp nền tảng kiến thức, kỹ năng vững chắc để tiến tới tạo dựng tên tuổi, nâng cao vị thế bản thân trong lĩnh vực công nghệ truyền thông.</p>
        <h6>Kiến thức và kỹ năng đạt được: </h6>
        <li>Được học các môn đầy hấp dẫn và bổ ích như: Truyền thông đa phương tiện, Quy trình sản xuất sản phẩm truyền thông nghe nhìn, Xây dựng chương trình Báo phát thanh, Sản xuất phim truyện, Thiết kế cho In ấn và Quảng cáo, Xuất bản Truyền thông, Xây dựng chương trình Truyền hình, Kỹ xảo Điện ảnh số - Digital FX,...</li>
        <li>Trang bị kỹ năng giao tiếp, trình bày đa phương tiện, tiếng Anh, quản lý dự án, kỹ năng lãnh đạo, quản trị các nguồn lực (con người, tài chính, thời gian,…), kỹ năng làm việc trong tổ chức,…</li>
        <li>Phát triển năng lực quản trị kinh doanh sản phẩm truyền thông: nghiên cứu thị hiếu khán thính giả, lập kế hoạch truyền thông, Marketing và triển khai hiệu quả kế hoạch kinh doanh sản phẩm truyền thông;</li>
        <li>Được cung cấp khối kiến thức nền tảng về quy trình sản xuất các thể loại sản phẩm truyền thông (phát thanh, truyền hình, điện ảnh, Multimedia,…).</li>
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

export default Cntthong
