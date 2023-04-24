import React from 'react'
import data from "../../db.json"
import image13 from "../../assets/image13.jpg"
import image14 from "../../assets/image14.jpg"
import { Link } from 'react-router-dom'
const Hocphi = () => {
  return (
    <section className='section-center'>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a><Link to='/'>Trang chủ</Link></a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                <a><Link to='/hphb'>Học phí học bổng</Link></a>
              </li>
            </ol>
          </nav>
        </div>
      </nav>
        <div class='container'>
            <div class='row'>
                <div class='col-8'>
                    <h5>Tin tuyển sinh</h5>
                    <h6>Chính sách học phí học bổng</h6>
                    <p>UEF với cơ sở đào tạo hiện đại, trang thiết bị học tập tiện nghi nhằm mang đến cho bạn mọi điều kiện tốt nhất, giúp các bạn có một nghề nghiệp vững chắc, có tác phong làm việc chuyên nghiệp, có kiến thức và kỹ năng chuyên môn cao, có tinh thần trách nhiệm với xã hội và cộng đồng. Chúng tôi hy vọng rằng, UEF sẽ là người bạn đồng hành để biến ước mơ của bạn thành hiện thực.</p>
                    <div class='text-center'>
                      <figure class="figure">
                          <img src={image13} class="figure-img img-fluid rounded" alt="..."/>
                          <figcaption class="figure-caption">Hãy đầu tư đúng cách cho nghề nghiệp tương lai của bạn</figcaption>
                      </figure>
                    </div>
                    <p>
                        <h6>Học phí</h6>
                        <li class='text-justify'>Học phí tại UEF được thu vào đầu mỗi học kỳ phụ thuộc vào số tín chỉ sinh viên đăng ký trong học kỳ đó.</li>    
                        <li class='text-justify'>Một năm chia thành 4 học kỳ. Học phí bình quân: 18 - 20 triệu đồng/học kỳ.</li>
                        <li class='text-justify'>Học phí công bố đã bao gồm 7 cấp độ tiếng Anh đạt chuẩn IELTS 5.5. Học phí ổn định trong suốt năm học, năm tiếp theo nếu có thay đổi sẽ không vượt quá 6% theo quy định. Sinh viên có chứng chỉ IELTS đầu vào từ 5.0 được miễn 3 cấp độ tiếng Anh khoảng 25 triệu đồng; Sinh viên có chứng chỉ IELTS đầu vào từ 5.5 được miễn 4 cấp độ tiếng Anh khoảng 33 triệu đồng.</li>
                        <li class='text-justify'>UEF công khai học phí trước mỗi khóa học và đảm bảo cung cấp cho người học chất lượng tương xứng với học phí đã thu vào và được xã hội chấp nhận. Sinh viên UEF được thụ hưởng môi trường học tập hiện đại, luôn được doanh nghiệp đánh giá có lợi thế cạnh tranh trên thị trường lao động vì vững chuyên môn, kỹ năng mềm và khả năng ngoại ngữ tốt.</li>
                    </p>
                    <p>
                        <h6>Học bổng</h6>
                        Nếu bạn là sinh viên giàu tiềm năng của UEF và là một sinh viên xuất sắc, bạn có mong muốn theo đuổi môi trường học tập quốc tế, chúng tôi khuyến khích bạn tìm hiểu chương trình học bổng và nộp hồ sơ cho loại học bổng mà bạn đủ tiêu chuẩn. Năm 2023, trường có các chính sách học bổng sau:
                        <div class='text-center'>
                            <figure class="figure">
                                <img src={image14} class="figure-img img-fluid rounded" alt="..."/>
                                <figcaption class="figure-caption">Học bổng tuyển sinh</figcaption>
                            </figure>
                        </div>
                    </p>
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
              </table>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Hocphi