import React,{useEffect} from 'react'
import "./main.css"
// import { MdDescription } from 'react-icons/md'
import img from '../../assets/img7.jpg'
import img2 from '../../assets/mysore.jpeg'
import img3 from '../../assets/varkala1.jpeg'
import img4 from '../../assets/kochin2.jpg'
import img5 from '../../assets/wy1.jpg'
import img6 from '../../assets/kk.jpg'
import img7 from '../../assets/kodai3.jpg'
import img8 from '../../assets/ooty.jpg'
import img9 from '../../assets/yercard.webp'
import Aos from 'aos';
import "aos/dist/aos.css";


import { IoLocation } from "react-icons/io5";
import { BsClipboard2Check } from "react-icons/bs";

const Data =[
{id:1,
  imgSrc:img,
  destTitle:'Batu Caves Murugan statue',
  location:'Malaysia',
  grade:'CULTURAL RELAX',
  fees:"₹5000",
  description:"The Batu Caves Murugan Temple, located near Kuala Lumpur in Malaysia, is a significant Hindu shrine dedicated to Lord Murugan. Set within a limestone hill, the temple complex is renowned for its towering 140-foot golden statue of Lord Murugan, which stands at the entrance. Visitors must climb 272 steps to reach the main temple, which is housed in a large cave at the top. The Batu Caves are a major pilgrimage site, especially during the annual Thaipusam festival, attracting devotees and tourists alike. The temple is also surrounded by lush greenery and offers stunning views of the city.",


},
{id:2,
  imgSrc:img2,
  destTitle:'Mysore',
  location:'Karnataka',
  grade:'CULTURAL RELAX',
  fees:"₹4500",
  description:"Mysore, a city in Karnataka, India, is renowned for its rich cultural heritage and majestic architecture. Known as the City of Palaces, Mysore is home to the opulent Mysore Palace, a stunning example of Indo-Saracenic architecture. The city is also famous for its vibrant Dussehra festival, which attracts tourists from around the world. Other notable attractions include the Chamundi Hill and Temple, the serene Brindavan Gardens, and the historic St. Philomena's Church. Mysore is also known for its silk sarees, sandalwood products, and its role as a cultural hub in South India.",
},

{id:3,
  imgSrc:img3,
  destTitle:'Varkala',
  location:'Kerala',
  grade:'CULTURAL RELAX',
  fees:"₹4500",
  description:"Varkala, a coastal town in Kerala, India, is famed for its stunning cliffs overlooking the Arabian Sea. Known for its pristine beaches, especially the Papanasam Beach, Varkala is a popular destination for both relaxation and spiritual pursuits. The town is home to the ancient Janardanaswamy Temple, attracting pilgrims and tourists alike. Varkala's cliffside offers breathtaking views, vibrant cafes, and shops, creating a perfect blend of natural beauty and cultural charm. It's an ideal spot for beach lovers, yoga enthusiasts, and those seeking a serene getaway.",


},
{id:4,
  imgSrc:img4,
  destTitle:'Kochi',
  location:'Kerala',
  grade:'CULTURAL RELAX',
  fees:"₹4500",
  description:"Kochi, also known as Cochin, is a vibrant coastal city in Kerala, India, blending modernity with rich history. Known as the Queen of the Arabian Sea, Kochi has been a significant trading port for centuries. The city's diverse cultural heritage is reflected in its colonial architecture, Jewish synagogues, and ancient temples. Key attractions include the iconic Chinese fishing nets, Mattancherry Palace, Fort Kochi, and the vibrant Marine Drive. Kochi is also a gateway to Kerala's backwaters and offers a unique blend of traditional and contemporary experiences",


},
{id:5,
  imgSrc:img5,
  destTitle:'Wayanad',
  location:'Kerala',
  grade:'CULTURAL RELAX',
  fees:"₹2500",
  description:"Wayanad, nestled in the Western Ghats of Kerala, India, is a stunning hill district renowned for its lush forests, wildlife sanctuaries, spice and tea plantations, and scenic landscapes. Key attractions include the prehistoric Edakkal Caves, the expansive Wayanad Wildlife Sanctuary, the tranquil Pookode Lake, and the majestic Meenmutty and Soochipara Waterfalls. Wayanad is a haven for nature lovers, trekkers, and those seeking a peaceful retreat amidst nature's beauty. Its cool climate, rich biodiversity, and vibrant culture make it a must-visit destination in South India.",

},
{id:6,
  imgSrc:img6,
  destTitle:'Kanyakumari',
  location:'Tamil Nadu',
  grade:'CULTURAL RELAX',
  fees:"₹2500",
  description:"Kanyakumari, located at the southernmost tip of India, is a unique coastal town in Tamil Nadu where the Arabian Sea, Bay of Bengal, and Indian Ocean converge. Known for its stunning sunrise and sunset views over the ocean, Kanyakumari is rich in cultural and historical significance. Key attractions include the iconic Vivekananda Rock Memorial, the Thiruvalluvar Statue, and the ancient Kanyakumari Temple. The town is also famous for its beautiful beaches and the vibrant Kanyakumari Lighthouse. Kanyakumari offers a blend of natural beauty, spirituality, and historical exploration.",


},
{id:7,
  imgSrc:img7,
  destTitle:'Kodaikanal',
  location:'Tamil Nadu',
  grade:'CULTURAL RELAX',
  fees:"₹3500",
  description:"Kodaikanal, often called the Princess of Hill Stations, is a picturesque hill station in Tamil Nadu, India. Nestled in the Western Ghats, it’s known for its mist-covered hills, pristine lakes, and dense forests. Key attractions include the star-shaped Kodaikanal Lake, Coaker's Walk, Bryant Park, and Pillar Rocks. The cool climate, scenic views, and serene atmosphere make it a popular destination for nature lovers and honeymooners,Kodaikanal is also famous for its homemade chocolates,",


},
{id:8,
  imgSrc:img8,
  destTitle:'Ooty',
  location:'Tamil Nadu',
  grade:'CULTURAL RELAX',
  fees:"₹3500",
  description:"Ooty, known as the Queen of Hill Stations, is a tranquil getaway in Tamil Nadu's Nilgiri Hills. Famous for its cool climate, it boasts lush tea gardens, Ooty Lake, Botanical Gardens, and Doddabetta Peak. The charming toy train and colonial architecture add to its appeal. Ideal for nature lovers and those seeking a peaceful escape, Ooty offers stunning landscapes, misty mornings, and a perfect blend of natural beauty and historical charm.",


},
{id:9,
  imgSrc:img9,
  destTitle:'Yercaud',
  location:'Tamil Nadu',
  grade:'CULTURAL RELAX',
  fees:"₹2500",
  description:"Yercaud, a serene hill station in Tamil Nadu, India, is nestled in the Shevaroy Hills of the Eastern Ghats. Known as the Jewel of the South, Yercaud is famed for its lush coffee plantations, orange groves, and scenic viewpoints. Key attractions include the tranquil Yercaud Lake, the panoramic views from Lady's Seat, and the enchanting Kiliyur Falls. With its cool climate, rich flora, and colonial charm, Yercaud offers a peaceful retreat for nature lovers and those looking to escape the hustle and bustle of city life.",


},


]

const main = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className='title'>
          Most Visited Destination
        </h3>
      </div>
      <div  className='secContent grid'>
      {
        Data.map(({id,imgSrc,destTitle,location,grade, fees,description})=>{
            return(
              <div key={id} data-aos="fade-up" className="singleDestination">

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">
                    {destTitle}
                  </h4>
                  <span className='continent flex'>
                  <IoLocation  className='icon'/>
                  <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                    <h5>{fees}</h5>
                  </div>

                  </div>
                 <div className="desc">
                  <p>{description}</p>
                 </div>

                 <button className='btn flex'>
                  DETAILS<BsClipboard2Check className='icon'/>
                 </button>
                </div>

              </div>
            )
        })
      }
      </div>
    </section>
  )
}

export default main
