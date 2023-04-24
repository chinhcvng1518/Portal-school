import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../db.json'

const Hdqt = () => {
  return (
    <div class='wrap-home-container'>
                <div class='row new-category-title'>
                  <Link>
                    <div class='wrap-title'>Hoạt động quốc tế</div>
                  </Link>

                </div>
                <div class='row'>
                  <div class='col-3-of-6 wrap-first-news'>
                      <div class='wrap-image'>
                        <img src={data.Hoatdongquocte[0].imageUrl} style={{width:'100%', height:'100%'}}/>
                      </div>
                      <div class='wrap-news' style={{clear:'both'}}>
                        <div class='news-title'>
                          {data.Tuyensinh[0].title}
                        </div>
                        <div class='news-summary'>
                          ABC
                        </div>
                      </div>
                  </div>
                  <div class='col-3-of-6 wrap-next-news' style={{ textAlign:'justify'}}>
                    {data.Hoatdongquocte && data.Hoatdongquocte.map((hoatdongquocte,id) => (
                        
                        <div key={id} class='new-line'>
                      
                            <li>{hoatdongquocte.title}</li>
                        </div>
                        ))}
                  </div>
                </div>
              </div>
  )
}

export default Hdqt