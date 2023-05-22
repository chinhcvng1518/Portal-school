import React, { useEffect, useState } from 'react'
import data from '../../db.json'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Noibat = () => {
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
    <div class='wrap-home-notify'>
      <div class='row new-category-title'>
        <Link to='/noi-bat'>
          <div class='wrap-title'>
            Nổi bật
          </div>
        </Link>
      </div>
      <div class='col wrap-school-notify' style={{textAlign:'justify'}}>
      {news.map((Noibat, index) =>
          {
          
          if(index >= 6) return null;

          return(
            <div class='title new-line'>
              <li key={Noibat.id}>
                <Link to={`/tin-tuyen-sinh/${Noibat._id}`}> {Noibat.title}</Link>
              </li>
            </div>
            
          )}
        )}
        </div>
      </div>
  )
}

export default Noibat