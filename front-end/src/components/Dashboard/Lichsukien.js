import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../db.json'

const Lichsukien = () => {
  return (
    <div class='wrap-home-events'>
      <div class='row new-category-title'>
        <Link>
          <div class='wrap-title'>Lịch sự kiện</div>
        </Link>

      </div>
      <div class='row'>
        {data.Lichsukien && data.Lichsukien.map((sukien,id) => (
        <div class='col-md-6' style={{fontSize:'13px'}}>
          <div class='date-block-home col-md-4' >
            <div class='col'>{sukien.sort}</div>
            <div class='col'>{sukien.date}</div>
          </div>
          <div class='content-block-home col-md-8'>
            <div class='event-title'>
              {sukien.title}
            </div>
            <div class='event-period-home'></div>
          </div>

        </div>
        ))} 
      </div>
    </div>
  )
}

export default Lichsukien