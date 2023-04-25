import React, { useEffect, useState } from "react";
import data from '../../db.json'
import { Link } from 'react-router-dom'
import image16 from "../../assets/image16.png"
import axios from "axios";

const Tintuyensinh = () => {
  const [news, setNews] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/new")
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
    <div class='container-home'>
      <div class='wrap-body-container'>
        <div class='row header'>
          <div class='row wrap-general-news'>
            <div class='col-4-of-6 left-general-news'>
              <section class='section-center-left'>
                <div class='wrap-container'>
                  <div class='row news-category-title'>
                    <div class='wrap-title'>
                      Tuyển sinh - Đào tạo
                    </div>
                    <div class='row wrap-list-news'>
                      <div class='col-8-of-8 wrap-normal-news'>
                        <div class='col-2-of-8 wrap-image'>
                        {news.map((noibat) => (
                
                        <img src={noibat.image[0]}/>
                        ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div class='col-2-of-6 right-general-news'>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tintuyensinh