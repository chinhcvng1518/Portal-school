import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import image16 from "../assets/image16.png"
import axios from "axios";

const Tintuyensinh = () => {
  const [news, setNews] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
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
    <div class='section-center'>
      <div class='wrap-body-container'>
          <div class='row wrap-general-news'>
            <div class='col-md-8 left-general-news'>
              <section class='section-center-left'>
                <div class='wrap-container'>
                  <div class='row news-category-title'>
                    <div class='wrap-title'>
                      Tuyển sinh - Đào tạo
                    </div>

                    {news && news.map((Tuyensinh, index) =>

                    <div class='row wrap-list-news'>
                      <div class='col wrap-normal-news'>
                        <div class='col-4 wrap-image'>                
                            <img src={Tuyensinh.image[0]} style={{width:'100%', height:'100%'}} alt=""/>
                        </div>
                        <div class='col-8 wrap-news-info'>
                            <div class='news-title'>
                                <li key={Tuyensinh.id}>
                                    <Link to={`/tin-tuyen-sinh/${Tuyensinh._id}`}> {Tuyensinh.title}
                                    </Link>
                                </li>
                            </div>
                            <div class='news-summary'>
                                <div dangerouslySetInnerHTML={{__html:news[0].content.slice(0,251) + "..."}}/>
                            </div>
                        </div>
                      </div>
                    </div>
                    )}
                  </div>
                </div>

              </section>
            </div>
            <div class='col-md-4 right-general-news'>
                <section></section>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Tintuyensinh