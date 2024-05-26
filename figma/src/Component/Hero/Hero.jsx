import React, { useEffect, useState } from "react";
import './hero.css';
import axios from 'axios'

export const Hero = () => {

  const [data, setData] = useState()

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/get_data/")
      setData(response?.data)
      localStorage.setItem('data', JSON.stringify(response.data))
      console.log(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
    setData(JSON.parse(localStorage.getItem('data')))
  }, [])

  const navclick = (e, id) => {
    const sliderLink = document.querySelector(`.slider-link-${id}`);
    const sliderContent = document.getElementById('slider-content');
    const sliderHeading = document.getElementById('slider-heading');
    const sliderText = document.getElementById('slider-text');

    e.preventDefault();
    const heading = sliderLink.getAttribute('data-heading');
    const text = sliderLink.getAttribute('data-text');

    sliderContent.classList.add('slide-leave-active');

    setTimeout(() => {

      sliderHeading.textContent = heading;
      sliderText.textContent = text;

      sliderContent.classList.remove('slide-leave-active');
      sliderContent.classList.add('slide-enter');

      void sliderContent.offsetWidth;

      sliderContent.classList.remove('slide-enter');
      sliderContent.classList.add('slide-enter-active');

      setTimeout(() => {
        sliderContent.classList.remove('slide-enter-active');
      }, 500);
    }, 500);
  }



  return (
    <div className="bg-gray-100">
      <div className="relative w-full overflow-hidden">
        <div id="slider" className="relative w-full h-64 md:h-96 bg-cover bg-center">
          <div className="hero-bg absolute inset-0"></div>
          <div id="slider-content" className="absolute inset-0 flex flex-col justify-center items-start p-6 md:p-12 text-white transition-transform">
            <h1 id="slider-heading" className="text-2xl md:text-4xl font-bold">Projects of National Importance</h1>
            <p id="slider-text" className="mt-4 text-sm md:text-lg">This EPC project developer chose Moglix Business as its strategic sourcing and fabrication solutions partner to accelerate the commissioning of its solar energy project.</p>
            <div className="mt-6 flex space-x-4">
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg">Know Why</button>
              <button className="border border-red-600 text-white px-4 py-2 rounded-lg">Download Brochure</button>
            </div>
          </div>
        </div>
        <div className="flex justify-around bg-white py-4 text-zinc-700 text-sm md:text-base">
          {
            data ?
              <>
                {
                  data.map((item, i) => {
                    return (
                      <a href="#" key={i} className={`slider-link slider-link-${item.id} hover:text-red-600`}
                        data-heading={item.heading} data-text={item.sub_heading} onClick={(e) => navclick(e, item.id)}>
                        {item.ancher}
                      </a>
                    )
                  })
                }
              </>
              :
              <></>
          }

          {/* <a href="#" className="slider-link hover:text-red-600" data-heading="Fueling the Future of Solar Energy" data-text="Text for Fueling the Future of Solar Energy" onClick={navclick}>Fueling the Future of Solar Energy</a>
          <a href="#" className="slider-link hover:text-red-600" data-heading="Shaping Tomorrow with Solar Energy" data-text="Text for Shaping Tomorrow with Solar Energy" onClick={navclick}>Shaping Tomorrow with Solar Energy</a>
          <a href="#" className="slider-link hover:text-red-600" data-heading="Buy Solar Energy Equipment Online" data-text="Text for Buy Solar Energy Equipment Online" onClick={navclick}>Buy Solar Energy Equipment Online</a>
          <a href="#" className="slider-link hover:text-red-600" data-heading="Brand Identity Statement" data-text="Text for Brand Identity Statement" onClick={navclick}>Brand Identity Statement</a> */}
        </div>
      </div>
    </div>
  );
};
