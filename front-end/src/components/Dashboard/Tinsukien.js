import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../db.json'
const Tinsukien = () => {
  return (
    <div class='wrap-home-container'>
                <div class='row new-category-title'>
                  <Link>
                    <div class='wrap-title'>Tin tức sự kiện</div>
                  </Link>

                </div>
                <div class='row wrap-admission-news'>
                  <div class='col-3-of-6 wrap-first-news'>
                      <div class='wrap-image'>
                        <img src={data.Tinsukien[0].imageUrl} style={{width:'100%', height:'100%'}}/>
                      </div>
                      <div class='wrap-news' style={{clear:'both'}}>
                        <div class='news-title'>
                          {data.Tinsukien[0].title}
                        </div>
                        <div class='news-summary'>
                          ABC
                        </div>
                      </div>
                  </div>
                  <div class='col-3-of-6 wrap-next-news'>
                    {data.Tinsukien && data.Tinsukien.map((tinsukien,id) => (
                        
                        <div key={id} class='new-line'>
                      
                            <li>{tinsukien.title}</li>
                        </div>
                        ))}
                  </div>
                </div>
                <div class='view-more'>
                  <Link to='/thong-tin-tuyen-sinh'>Xem tiếp ></Link>
                </div>
              </div>
  )
}

export default Tinsukien