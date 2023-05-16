import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import data from '../../db.json'
import styled from "styled-components";

const Tuyensinh = () => {
  const [news, setNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/new")
      .then((response) => {
        setNews(response.data.news);
        console.log(response.data.news)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (!news) return <p>Loading</p>;
  console.log(news[0])
  return (

    <div class='wrap-home-container'>
      <div class='row new-category-title'>
        <Link to='/tin-tuyen-sinh'>
          <div class='wrap-title'>Tuyển sinh - Đào tạo</div>
        </Link>

      </div>
      <div class='row wrap-admission-news'>
      {news[0] ? <>
        <div class='col-3-of-6 wrap-first-news'>
            <div class='wrap-image'>
              
              <img src={!news[0].image[0] ? '' :news[0].image[0] } style={{width:'400px', height:'250px'}} alt=""/>
            </div>
            <div class='wrap-news'>
              <div class='news-title'>
                {news[0].title}
              </div>
              <div class='news-summary'>                
                <div dangerouslySetInnerHTML={{__html:news[0].content.slice(0,251) + "..."}}/>
              </div>
            </div>
             
        </div>
      </> : <><p>Loadiing</p></>}
        
        <div class='col-3-of-6 wrap-next-news'>
          {news && news.map((Tuyensinh, index) =>
            {
            
            if ( index>0 && index <=6) 

            return(
              <div class='title new-line'>
                <li key={Tuyensinh.id}>
                  <Link to={`/tin-tuyen-sinh/${Tuyensinh._id}`}> {Tuyensinh.title}</Link>
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

export default Tuyensinh