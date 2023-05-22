import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Noibat from '../components/Dashboard/Noibat'
import References from '../components/Dashboard/References'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const SingleNew = () => {
    const {id} = useParams()
    const [news, setNews] = useState()
    const [selectedNew, setSelectedNew] = useState([])

   
    useEffect(() => {
        if (id) {
            axios
            .get(`http://localhost:5000/api/new/${id}`)
            .then((response) => {
                setSelectedNew(response.data.news)
                console.log(response.data.news)
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }, [id])

    if(!selectedNew ) return null
   
  return (
    <Wrapper className='section-center'>
        <div class='wrap-body-container'>
            <div class='row wrap-general-news'>
                <div class='col-md-8 left-general-news'>
                    <section class='section-center-left'>
                        <div class='wrap-container-detail'>
                            <div class='row news-category-title'>
                                <div class='wrap-title'>Tin tuyển sinh</div>
                            </div>
                        </div>
                        <div class='row wrap-news-detail'>
                            <h1 class='new-detail-title'>{selectedNew.title}</h1>
                            <div class='new-date'>
                                {new Date(selectedNew.createdAt).toDateString()}
                            </div>
                            <div class='wrap-content '>
                                <div dangerouslySetInnerHTML={{__html:selectedNew.content}}/>
   
                                <div style={{textAlign:'center'}}>
                                {!selectedNew.image ? <p>Loading</p> : selectedNew.image.map((m) => (
                                        <div>
                                            <img src={m} alt='new-img' class='img-fluid'/>
                                        </div>
                                    ))}
                                </div>
                                {/* <div>
                                    <img src={selectedNew.image} alt='new-img' class='img-fluid'/>
                                </div> */}
                                <div class='author'>
                                    <strong>
                                        <span>Tác giả: {selectedNew.author}</span>
                                    </strong>
                                </div>
                            </div>
                            <div class='new-related'>
                                <div class='new-detail-block'>
                                    {/* <li>
                                        <Link>{setNews.title}</Link>
                                    </li> */}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div class='col-md-4 right-general-news'>
                    <section class='section-center-right'>
                        <Noibat/>
                    </section>
                    <section class='section-center-right'>
                        <References/>
                    </section>
                </div>
            </div>
        </div>
    </Wrapper>
    

  )
}
const Wrapper = styled.section`
`
export default SingleNew