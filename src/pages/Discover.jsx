import React, { useEffect, useRef, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import './Discover.css'
import 'react-alice-carousel/lib/alice-carousel.css'
import Slide from './Slide'
import { FaTv, FaClock, FaCalendarAlt } from 'react-icons/fa'
import { RiFolderInfoFill } from 'react-icons/ri'
import { requests } from '../core/movie/instance'
import EpisodesSlider from './EpisodesSlider'
import jujustu from '../assets/jujustu.jpg'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Movie from './Movie'
import EpisodesRow from './EpisodesRow'

const Discover = () => {
  const [mainIndex, setMainIndex] = useState(0)
  const carouselRef = useRef()

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext()
    }
  }

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev()
    }
  }

  useEffect(() => {
    const handleSlideChange = () => {
      setMainIndex(carouselRef.current._activeIndex)
    }

    if (carouselRef.current) {
      carouselRef.current.onSlideChanged = handleSlideChange
    }
  }, [carouselRef])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <>
      {/* <div className='absolute'>
        <div className='carousel' id='media' style={{ marginTop: '10px' }}>
          <AliceCarousel
            ref={carouselRef}
            disableDotsControls
            disableButtonsControls
            items={Slide.map((item, index) => (
              <div key={index} className='item'>
                <div className='carousel-info'>
                  <h2 className='title'>{item.title}</h2>{' '}
                  <p className='season'>{item.season}</p>
                  <p className='details'>
                    <span className='info-icon'>
                      <FaTv />
                    </span>{' '}
                    {item.type},&nbsp;
                    <span className='info-icon'>
                      <FaClock />
                    </span>{' '}
                    {item.duration},&nbsp;
                    <span className='info-icon'>
                      <FaCalendarAlt />
                    </span>{' '}
                    {item.releaseDate}
                  </p>{' '}
                  <p className='desc'>{item.description}</p>{' '}
                  <p className='additional-info'>{item.details}</p>
                  <button
                    className='watch-now-button'
                    onClick={() => alert(`Watch Now: ${item.title}`)}
                  >
                    Watch Now
                  </button>
                </div>
                <img src={item.image} alt={item.title} />
              </div>
            ))}
            buttonsDisabled
            autoPlay={false}
            stopAutoPlayOnHover={false}
          />

          <div className='custom-dots'>
            {Slide.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === mainIndex ? 'active' : ''}`}
                title={Slide[index].title}
              />
            ))}
          </div>

          <div className='btn-prev' onClick={slidePrev}>
            &lang;
          </div>
          <div className='btn-next' onClick={slideNext}>
            &rang;
          </div>
        </div>
      </div> */}

      <Movie />

      <div className='relative'>
        <div className='px-[1.5rem] mx-auto text-white w-full space-y-24'>
          <EpisodesSlider title='Trending Now' url={requests.fetchTrending} />
          <EpisodesSlider title='Newly Added' url={requests.fetchTopRated} />
          <EpisodesRow title='Latest Episodes' url={requests.fetchTopRated} />
        </div>{' '}
      </div>
    </>
  )
}

export default Discover
