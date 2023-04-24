import React from 'react'
import data from '../../db.json'
import { Link } from 'react-router-dom'

const Noibat = () => {
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
        {data.Noibat && data.Noibat.map((noibat,id) => (
                
                <div key={id} class='new-line'>
              
                    <li>{noibat.title}</li>
                </div>
                ))}
        </div>
      </div>
  )
}

export default Noibat