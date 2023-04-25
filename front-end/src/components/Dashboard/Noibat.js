import React, { useEffect, useState } from 'react'
import data from '../../db.json'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Noibat = () => {
  const [news, setNews] = useState();
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
    <div class='wrap-home-notify'>
      <div class='row new-category-title'>
        <Link >
          <div class='wrap-title'>
            Nổi bật
          </div>
        </Link>
      </div>
      <div class='row wrap-school-notify' style={{textAlign:'justify'}}>
        {news.map((noibat) => (
                
                <div class='new-line'>
              
                    <li>{noibat.title}</li>
                </div>
                ))}
        </div>
      </div>
  )
}

export default Noibat