import React from 'react'
import data from '../../db.json'
import { Link } from 'react-router-dom'
import image16 from "../../assets/image16.png"

const Tintuyensinh = () => {
  return (
    <section className='section-center page'>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a><Link to='/'>Trang chủ</Link></a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                <a><Link to='/tin-tuyen-sinh'>Tin tuyển sinh</Link></a>
              </li>
            </ol>
          </nav>
        </div>
      </nav>
        <div class="row">
            <div class="col-8">
                <h5 style={{backgroundColor:'#f2f2f2'}}>Tin tuyển sinh</h5>
                <table className="table table-hover">
                  <tbody style={{ textAlign: 'center' }}>
                    {data.Tuyensinh && data.Tuyensinh.map((tuyensinh) => (
                      <tr>
                        <td><img src={tuyensinh.imageUrl} height={128}/></td>
                        <td class='text-start'>{tuyensinh.title}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                  <img  src={image16}/>
                </table>
              </div>
        </div>
    </section>
  )
}

export default Tintuyensinh