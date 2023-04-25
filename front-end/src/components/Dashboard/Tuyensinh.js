import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import data from '../../db.json'
import styled from "styled-components";

const Tuyensinh = () => {
  const [news, setNews] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/new")
      .then((response) => {
        // console.log(response.data.products)
        setSelectedCategory(response.data.news);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (!news) return null;
  return (
    <div class='wrap-home-container'>
      <div class='row new-category-title'>
        <Link to='/thong-tin-tuyen-sinh'>
          <div class='wrap-title'>Tuyển sinh - Đào tạo</div>
        </Link>

      </div>
      {selectedCategory.map(({category}, index) => (
      <div class='row wrap-admission-news'>
        <div class='col-3-of-6 wrap-first-news'>
            <div class='wrap-image'>
              {/* <img src={data.Tuyensinh[0].imageUrl} style={{width:'100%', height:'100%'}}/> */}
            </div>
            <div class='wrap-news'>
              <div class='news-title' key={index} onClick={() =>setSelectedCategory(selectedCategory.title)}>
                {selectedCategory.title}
                
              </div>
              <div class='news-summary'>
                Từ ngày 14 đến 28/4, sinh viên các khóa của UEF sẽ bước vào kỳ thi kết thúc học phần học kỳ 2A năm học 2022 - 2023. Để có sự chuẩn bị tốt trước kỳ thi, các bạn cần lưu ý các thông tin quan trọng.
              </div>
            </div>
        </div>
        <div class='col-3-of-6 wrap-next-news'>
                        
                        <div class='new-line' >

                            <li>{Tuyensinh.title}</li>
                        </div>
                        
              
        </div>
      </div>
      ))}
      <div class='view-more'>
        <Link to='/thong-tin-tuyen-sinh'>Xem tiếp ></Link>
      </div> 
    </div>
  )
}

export default Tuyensinh