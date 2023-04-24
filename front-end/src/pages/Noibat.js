import React from 'react'
import data from "../db.json"
import image16 from "../assets/image16.png"

const Noibat = () => {
  return (
    <section className='section-center page'>
        <div class="row">
            <div class="col-8">
                <h5 style={{backgroundColor:'#f2f2f2'}}>Nội bật</h5>
                <table className="table table-hover">
                  <tbody style={{ textAlign: 'center' }}>
                    {data.Tintucsukien && data.Tintucsukien.map((tintucsukien) => (
                      <tr>
                        <td class='text-start'>{tintucsukien.title}</td>
                        <td><img src={tintucsukien.imageUrl}/></td>
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

export default Noibat