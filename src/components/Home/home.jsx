import React, { useEffect } from 'react'
import "./home.css"
import { GoLocation } from "react-icons/go";
import { FaFilter } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiTripadvisor } from "react-icons/si";
import { FaListUl } from "react-icons/fa";
import { TbApps } from "react-icons/tb";
import Vid from "../../assets/home.mp4"
import Aos from 'aos';
import "aos/dist/aos.css"


const home = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <section className='home'>
      <div className="overlay">

      </div>
      <video src={Vid} muted autoPlay loop type='video/mp4'></video>

      <div className="homeContent container">
     <div className="textDiv">
        <span data-aos="fade-up" className="smallText">
            Our Packages
        </span>
        <h1 data-aos="fade-up" className="homeTitle">
            Search Your Holidays
        </h1>
     </div>


    <div data-aos="fade-up" className="cardDiv grid">
    <div className="destinationInput">
        <label htmlFor="city">
            Search Your Destination:
        </label>
        <div className='input flex'>
            <input type="text" placeholder='Enter Name here....'/>
            <GoLocation className='icon' />
        </div>
      </div>


    <div className="dateInput">
        <label htmlFor="date">
           select you date:
        </label>
        <div className='input flex'>
            <input type="date"/>
        </div>
      </div>


      <div className="priceInput">
      <div className="label_total flex">
        <label htmlFor="price">Max price</label>
        <h3 className='total'>5000</h3>

      </div>
      <div className='input flex'>
        <input type="range" max="5000" min="1000" />
      </div>
      </div>

      <div className="searchOption flex">
      <FaFilter className='icon'/>
    <span>MORE FILTERS</span>
      </div>
    </div>
    <div data-aos="fade-up" className="homeFooterIcons flex">
      <div className="rightIcons">
      <FiFacebook className='icon'/>
      <AiOutlineInstagram className='icon'/>
      <SiTripadvisor className='icon' />
      </div>
      <div className="leftIcons">
      <FaListUl className='icon'/>
      <TbApps className='icon'/>
        
      </div>
    </div>
      </div>
    </section>
  )
}

export default home
