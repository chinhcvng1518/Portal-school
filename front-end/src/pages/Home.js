import { Link } from 'react-router-dom';
import styled from 'styled-components';
import banner from '../assets/banner.jpg';
import { Redirect } from 'react-router-dom';
import { useGlobalContext } from '../context';
import Carousel from '../components/Carousel';
import Tuyensinh from '../components/Dashboard/Tuyensinh'
import Tinsukien from '../components/Dashboard/Tinsukien'
import Hdqt from '../components/Dashboard/Hdqt'
import Footer from '../components/Footer';
import Lichsukien from '../components/Dashboard/Lichsukien';
import Noibat from '../components/Dashboard/Noibat'
import References from '../components/Dashboard/References';
import Video from '../components/Dashboard/Video';
import Podcast from '../components/Dashboard/Podcast';
import Newsletter from '../components/Dashboard/Newsletter';
import Nganhdaotao from '../components/Nganhdaotao'
function Home() {
  const { user } = useGlobalContext();
  return (
    <Wrapper className='section-center'>
      <Carousel/>
      <div class='row wrap-general-news'>
        <div class='col-4-of-6 left-general-news' style={{borderBottom:'inset'}}>
          <section class='section-center-left'>
            <Tuyensinh/>
            <Tinsukien/>
            <Hdqt/>
            <Lichsukien/>
          </section>
        </div>
        <div class='col-2-of-6 right-general-news' style={{borderLeft:'outset', borderBottom:'inset'}}>
          <section class='section-center-right'>
            <Noibat/>
            <References/>
            <Video/>
            <Podcast/>
            <Newsletter/>
          </section>
        </div>
      </div>
      
      <Nganhdaotao/>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  
`

export default Home;
