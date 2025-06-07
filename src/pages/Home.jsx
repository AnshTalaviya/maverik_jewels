import React, { useEffect } from 'react'
import home from '../../public/images/Website_Homepage_Banner.webp'
import Collection from './Collection'
import ViewAll from '../components/ViewAll'
import { useNavigate } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";
import Ring from '../components/Ring'
import Necklace from '../components/Necklace'
import Earing from '../components/Earing'
import Guide from '../components/Guide'
import InstagramContent from '../components/InstagramContent'
import ReviewSlider from '../components/ReviewSlider'
import CategorySection from '../components/CategorySection'

const Home = () => {
  const navigate = useNavigate();
  const handleViewAllClick = () => {
    navigate("/viewAllJewellary");
  };

  // Animation
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      delay: 2000, 
    });
  }, []);


  return (
    <div className='w-full'>
      <img src={home} className='w-full' />

      <div className='mt-9 mx-auto  text-center'>
        <h1 className='text-4xl ' data-aos="fade-up">Mj Jewellery</h1>

        <p data-aos="fade-up" className='text-center text-textGreyColor py-6 m-auto w-1/2' >Welcome to the fascinating world of lab-grown diamonds! These stunning gems offer a captivating alternative to natural diamonds, combining the timeless beauty of traditional diamonds with an innovative and sustainable approach to jewellery</p>
      </div>
      <div>
        <CategorySection/>
      </div>

      <div  data-aos="fade-up">

        <Collection />
        <ViewAll  onClick={handleViewAllClick}  />
      </div>

      <div>
        <Ring />

      </div>
      <div>
        <Necklace />

      </div>
      <div>
        <Earing />

      </div>
      <div>
        <Guide />
      </div>
      <div>
        <InstagramContent/>
      </div>
      <div>
        <ReviewSlider/>
      </div>

    </div>
  )
}

export default Home
