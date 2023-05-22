import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../../db.json'
import axios from 'axios';
const Tinsukien = () => {
  const [news, setNews] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/new")
      .then((response) => {
        // console.log(response.data.products)
        setNews(response.data.news);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (!news) return null;
  return (
    <div class='wrap-home-container'>
      <div class='row new-category-title'>
        <Link to='/tin-su-kien'>
          <div class='wrap-title'>Tin tức - Sự kiện</div>
        </Link>

      </div>
      <div class='row wrap-admission-news'>
      {news[0] ? <>
        <div class='col-md-6 wrap-first-news'>
            <div class='wrap-image'>      
            <Link to={`/tin-tuyen-sinh/${news[0]._id}`}>
                <img src={!news[0].image[0] ? '' :news[0].image[0] } style={{width:'100%', height:'100%'}}  alt=""/>
              </Link>            </div>
            <div class='wrap-news'>
            <div class='news-title' key={news.id}>
                <Link to={`/tin-tuyen-sinh/${news[0]._id}`}>{news[0].title}</Link>
                
              </div>
              <div class='news-summary'>                
              <div dangerouslySetInnerHTML={{__html:news[0].content.slice(0,251) + "..."}}/>
              </div>
            </div>
             
        </div>
      </> : <><p>Loadiing</p></>}
        
        <div class='col-md-6 wrap-next-news'>
          {news && news.map((Tinsukien, index) =>
            {
            
            if ( index>0 && index <=6) 

            return(
              <div class='title new-line'>
                <li key={Tinsukien.id}>
                  <Link to={`/tin-tuyen-sinh/${Tinsukien._id}`}> {Tinsukien.title}</Link>
                </li>
              </div>
              
            )}
          )}
        </div>
      </div>
      <div class='view-more'>
        <Link to='/tin-tuyen-sinh'>Xem tiếp > </Link>
      </div> 
    </div>
  )
}

export default Tinsukien