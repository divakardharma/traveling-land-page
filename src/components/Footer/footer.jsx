import React,{useEffect} from 'react'
import "./footer.css"
import Video from '../../assets/footer.mp4'
import { IoIosSend } from "react-icons/io";
import { MdTravelExplore } from "react-icons/md";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { LiaTripadvisor } from "react-icons/lia";
import { RiInstagramFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import Aos from 'aos';
import "aos/dist/aos.css"

const footer = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src={Video} loop autoPlay muted type='video/mp4'></video>
      </div>
      

      <div className='secContent container'>
        <div className='contactDiv flex'>
          <div data-aos="fade-down" className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>Travel With us</h2>
          </div>

          <div className='inputDiv flex'>
            <input data-aos="fade-down" type="text" placeholder='Enter Email Address' />
            <button  data-aos="fade-down" className='btn flex' type='submit'>SEND<IoIosSend className='icon'/></button>

          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
            <a href="#" className='logo flex'>
              <MdTravelExplore className="icon"/>Travel.com
                </a>
            </div>

            <div className="footerParagrap">
            This is the version of our website addressed to speakers of English in India. If you are a resident of another country or region, please select the appropriate version of Tripadvisor for your country or region in the drop-down menu.


            </div>
            <div  data-aos="fade-down" className="footerSocials flex">
            <FaTwitter className='icon' />
            <FaYoutube className='icon'/>
            <LiaTripadvisor className='icon'/>
            <RiInstagramFill className='icon'/>


            </div>
          </div>

          <div className="footerLinks grid">

             <div className="linkGroup">
              <span className='groupTitle'>OUR AGENCY</span>

              <li className='footerList flex'>
              <IoIosArrowForward className='icon'/>
                Services
              </li>

              <li className='footerList flex'>
              <IoIosArrowForward className='icon'/>
                Insurance
              </li>

              <li className='footerList flex'>
              <IoIosArrowForward className='icon'/>
                Agency
              </li>

              <li className='footerList flex'>
              <IoIosArrowForward className='icon'/>
                Tourism
              </li>
              <li className='footerList flex'>
              <IoIosArrowForward className='icon'/>
                Paymet
              </li>
               </div>
 {/* ---------------------------------------------------------------- */}
               <div className="linkGroup">
              <span className='groupTitle'>PARTNERS</span>

              <li className='footerList flex'>
              <IoIosArrowForward className='icon'/>
                Booking
              </li>

              <li className='footerList flex'>
              <IoIosArrowForward className='icon'/>
                Rentcars
              </li>

              <li className='footerList flex'>
              <IoIosArrowForward className='icon'/>
               HostelWorld
              </li>

              <li className='footerList flex'>
              <IoIosArrowForward className='icon'/>
                Trivago
              </li>
              <li className='footerList flex'>
              <IoIosArrowForward className='icon'/>
                TripAdvisor
              </li>
               </div>
{/* ----------------------------------------------------------------------- */}
               <div className="linkGroup">
              <span className='groupTitle'>LAST MINUTE</span>

              <li className='footerList flex'>
              <IoIosArrowForward className='icon'/>
                London
              </li>

              <li className='footerList flex'>
              <IoIosArrowForward className='icon'/>
                California
              </li>

              <li className='footerList flex'>
              <IoIosArrowForward className='icon'/>
               Indonesia 
              </li>

              <li className='footerList flex'>
              <IoIosArrowForward className='icon'/>
                Europe
              </li>
              <li className='footerList flex'>
              <IoIosArrowForward className='icon'/>
                Oceania
              </li>
               </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE</small>
            <small>COPYRIGHTS RESERVED - DIVAKAR 2024</small>
          </div>


        </div>
      </div>
    </section>
  )
}

export default footer
