import React from 'react'
import { Link } from 'react-router-dom'
const Video = () => {
  return (
    <div class='wrap-video-container'>
        <div class='row news-category-title'>
            <div class='wrap-title'>
            Video
            </div>
            <div class='video'>
            <Link>
                <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" width="100%" height="300" src="https://www.youtube.com/embed/yjE6OlsTdFE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Video