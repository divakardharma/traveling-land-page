import React,{useState} from 'react'
import "./navbar.css"
import { MdTravelExplore } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";


const navbar = () => {

    const[active, setActive]=useState('navbar')
    
    const showNav=()=>{
        setActive('navbar activeNavbar')
    }
    const removeNavbar=()=>{
        setActive('navbar')
    }
  return (
    <section className='navbarsection'>
        <header className='header flex'>
            <div className='logoDiv'>
                <a href="#" className='logo'>
                <h1><MdTravelExplore className="icon"/>Travel.com</h1>
                </a>
            </div>

            <div className={active}>
                <ul className='navlists flex'>
                    <li className='navitem'>
                        <a href="#" className='navlink'>Home</a>
                    </li>
                    <li className='navitem'>
                        <a href="#" className='navlink'>Packages</a>
                    </li>
                    <li className='navitem'>
                        <a href="#" className='navlink'>Shop</a>
                    </li>
                    <li className='navitem'>
                        <a href="#" className='navlink'>Pages</a>
                    </li>
                    <li className='navitem'>
                        <a href="#" className='navlink'>News</a>
                    </li>
                    <li className='navitem'>
                        <a href="#" className='navlink'>Contact</a>
                    </li>

                    <button className='btn'><a href="#">Book Now</a></button>
                </ul>

                <div onClick={removeNavbar} className="closeNavbar">
                <IoIosCloseCircle className='icon'/>

                </div>


            </div>

            <div onClick={showNav} className="toggleNavbar">
            <HiOutlineDotsHorizontal className='icon'/>

            </div>
        </header>
    </section>
  )
}

export default navbar
