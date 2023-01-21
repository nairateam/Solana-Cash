import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { HashLink as Link } from 'react-router-hash-link'
import './Nav.css'
import logo from '../Assets/Images/logo.svg'
import mlogo from '../Assets/Images/mlogo.svg'
import twitter from '../Assets/Images/Icons/twitterr.svg'
import instagram from '../Assets/Images/Icons/instagram.svg'
import linkedin from '../Assets/Images/Icons/linkedin.svg'
import telegram from '../Assets/Images/Icons/telegramm.svg'
import { Squash as Hamburger } from 'hamburger-react'

const menus = [
    {
        id:1,
        title: 'Our Features',
        path: '#features',
        Link: '/'
    },
    {
        id:2,
        title: 'Eco-System',
        path: '#ecosystem',
        Link: '/'
    },
    {
        id:3,
        title: 'Solana Cash',
        path: 'https://solana.com/ecosystem/solanacash',
        Link: '/'
    },
    {
        id:4,
        title: 'Roadmap',
        path: '#roadmap',
        Link: '/'
    },
    {
        id:5,
        title: 'Tokenomics',
        path: '#tokenomics',
        Link: '/'
    },
    {
        id:6,
        title: 'Staking',
        path: 'https://staking.solanacash.io/',
        Link: '/'
    }

]

const variants = {
    open: { opacity: 1, x: 0, },
    closed: { opacity: 0, x: "-100%" },
    transition: {delay: 0.5, duration: 1}
  } 

const Nav = () => {
    const navRef = useRef();
  return (
    <div>
        <header>
            <a href=''>
                <img src={logo} alt="Solanacash Logo" />
                <img src={mlogo} alt="Solanacash Logo" />
            </a>
            <nav className='main_nav'>
                <motion.ul 
                    initial={'closed'}
                    whileInView={'open'}
                    viewport={{once: false, amount: 0.1}}
                    transition={{staggerChildren: 0.1}}
                ref={navRef}>
                    {
                        menus.map((menu)=>(
                            <motion.li key={menu.id}
                            variants={variants}
                            >
                            <a className='nav_a' href={menu.path}>{menu.title}</a>
                            </motion.li>
                        ))
                    }
                <div className="socials">
                    <span><img src={twitter} alt="" /></span>
                    <span><img src={linkedin} alt="" /></span>
                    <span><img src={instagram} alt="" /></span>
                    <span><img src={telegram} alt="" /></span>
                </div>
                </motion.ul>
            </nav>
            <div className="wrap_toggle">
                <div className="menu_btn">
                    <Hamburger 
                    size={25}
                    color="#4FD1C5"
                    onToggle={toggled => {
                        if (toggled) {
                                navRef.current.classList.toggle('res_nav')
                              
                        } else {
                            navRef.current.classList.toggle('res_nav')
                        }
                      }} />
                </div>
                <motion.button 
                    whileHover={{ scale: 1.1 }}
                    onTap={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 1000, damping: 10 }}
                > <a href="https://staking.solanacash.io/">Stake Now</a> </motion.button>
            </div>
        </header>
    </div>
  )
}

export default Nav