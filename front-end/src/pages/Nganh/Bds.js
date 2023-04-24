import React from 'react'
import image9 from "../../assets/image9.jpg"
import image16 from "../../assets/image16.png"
import data from "../../db.json"
import { Link } from 'react-router-dom'
const Bds = () => {
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
                <a><Link to='/bds'>Bất động sản</Link></a>
              </li>
            </ol>
          </nav>
        </div>
      </nav>
          <div class='container'>
            <div class='row'>
              <div class='col-8'>
                <h1 class='detail-title' style={{fontSize:'18px', lineHeight:'25px', fontWeight:'700'}}>Bất động sản</h1>
            <div style={{textAlign:'justify'}}><strong>Bất động sản</strong> hay còn gọi là Kinh doanh bất động sản là một ngành thuộc nhóm kinh doanh. Hiện nay, kinh doanh bất động sản đang là ngành nghề “hot” và là một trong những động lực quan trọng đối với sự phát triển của nền kinh tế. Tại Việt Nam, lĩnh vực bất động sản đã và đang nhận được sự quan tâm rất lớn từ các thành phần khác nhau trong xã hội. Nhằm giúp các bạn trẻ yêu thích lĩnh vực kinh doanh hiểu rõ về ngành học này, bài viết dưới đây sẽ cung cấp thông tin chi tiết từng vấn đề mà các bạn quan tâm.
            </div>
            <div class='text-center'>
                <figure class="figure">
                    <img src={image9} class="figure-img img-fluid rounded" alt="..."/>
                    <figcaption class="figure-caption">Mã ngành Bất động sản: 7340116</figcaption>
                </figure>
            </div>
            
            <div style={{textAlign:'justify'}}><strong>Bất động sản là gì? Ra trường làm việc gì?</strong><br/>
            Kinh doanh bất động sản có thể hiểu là việc đầu tư nguồn vốn nhằm thực hiện hoạt động mua, xây dựng, nhận chuyển nhượng để bán (chuyển nhượng tức cho thuê, cho thuê lại hoặc cho thuê mua bất động sản, thực hiện môi giới bất động sản, dịch vụ tư vấn bất động sản, dịch vụ sàn giao dịch bất động sản hoặc quản lý bất động sản nhằm vào mục đích sinh lợi). Sinh viên tốt nghiệp ngành Bất động sản có thể tự hoạt động như một trung gian môi giới Bất động sản, hoặc ứng cử vào vị trí nhân viên, quản lý của các văn phòng giao dịch, các công ty về Bất động sản.</div>
            <strong>BẠN SẴN SÀNG CHƯA?</strong>
            <div>Tại Trường Đại học Kinh tế - Tài chính TP.HCM (UEF), bạn sẽ được đào tạo ngành Bất động sản theo mô hình chất lượng cao, học tập trong môi trường quốc tế, giúp bạn nắm vững các kỹ năng thu thập thông tin và phân tích thị trường bất động sản, triển khai các dịch vụ sàn giao dịch bất động sản và môi giới bất động sản, thực hiện thẩm định giá và quản lý bất động sản.</div>
            <strong>Kiến thức và kỹ năng đạt được:</strong>
            <p>
                    <li>Chương trình đào tạo cung cấp cho người học kiến thức nền tảng về kinh tế, tài chính, luật, kinh doanh, quy hoạch và kiến thức chuyên sâu về môi giới, kinh doanh, đầu tư, quản lý bất động sản.</li>
                    <li>Đồng thời, trang bị kỹ năng thu thập thông tin và phân tích thị trường bất động sản, triển khai các dịch vụ sàn giao dịch bất động sản và môi giới bất động sản, thực hiện thẩm định giá và quản lý bất động sản,… trong bối cảnh một nền kinh tế đang chuyển đổi và hội nhập.</li>
                    <li>Các môn học chuyên ngành tiêu biểu: Luật về bất động sản, Kinh tế bất động sản, Thẩm định giá bất động sản, Đầu tư và tài trợ bất động sản, Doanh nghiệp kinh doanh bất động sản, Phân tích thị trường bất động sản, Quản trị tài sản bất động sản, Phát triển bất động sản,...</li>
            
            </p>
              </div>
              <div class='col-4'>
                <div style={{textAlign:"justify"}}><strong>Nổi bật</strong></div>
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

export default Bds