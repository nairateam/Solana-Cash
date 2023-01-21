import React from 'react'
import './Hero.css'
import { delay, motion } from 'framer-motion'
import telegram from '../Assets/Images/Icons/telegram.svg'
import twitter from '../Assets/Images/Icons/twitter.svg'

const animateBtn = {
    setOff:{y:50},
    setIn:{y:0,
        rotate:[0,30,0],
        transition:{
        type:'spring',
        bounce:0.4,
        duration:.8
    }
}
}

const animateRight = {
    setOff: {x: 50, opacity: 0},
    setIn: {
        x: 0, 
        opacity: 1,
        transition:{
            type:'spring',
            bounce:0.4,
            duration:.8,
            delay: 0.5
        }
    }
}
const animateLeft = {
    setOff: {x: -50, opacity: 0},
    setIn: {
        x: 0, 
        opacity: 1,
        transition:{
            type:'spring',
            bounce:0.4,
            duration:.8,
            delay: 0.5
        }
    }
}

const Hero = () => {
  return (
    <div className='container hero'>
        <motion.h2 className='hero_title'
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.5, duration:1.5}}
        >Decentralized  P2P payment system powered by Solana</motion.h2>
        <motion.p className='hero_subtitle'
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{delay:0.7, duration:1.2}}
        >First Decentralized P2P Payment System Deployed On Solana Network </motion.p>

        <div className="hero_wrap">
            <motion.p
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:0.7, duration:1.2}}
            >View Our:</motion.p>
            <motion.div className="button_wrap"
                initial={'setOff'}
                animate={'setIn'}
                transition={{staggerChildren:0.2}}
            >
                <motion.button 
                    whileHover={{ scale: 1.1 }}
                    onTap={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 1000, damping: 10 }}
                variants={animateLeft}>
                    <a href="https://solanacash.gitbook.io/solana-cash/abstract/what-is-solana-cash">Litepaper</a>
                </motion.button>
                <motion.button 
                    whileHover={{ scale: 1.1 }}
                    onTap={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 1000, damping: 10 }}
                variants={animateRight}>
                    <a href="https://drive.google.com/file/d/1XC-2v7UXVqsUbNdZQmp-Bh4dNKHLM04B/view?usp=sharing">Pitchdeck</a>
                </motion.button>
            </motion.div>
        </div>

        <div className="hero_wrap">
            <p>Follow us for more update on:</p>
            <motion.div 
                initial={'setOff'}
                animate={'setIn'}
                transition={{staggerChildren:0.2}}
            className="button_wrap gap_wrap">
                <motion.img src={twitter} variants={animateBtn} alt="Twitter" />
                <motion.img variants={animateBtn} src={telegram} alt="Telegram" />
            </motion.div>
        </div>
        <p>Built on <span>Solana</span> </p>
    </div>
  )
}

export default Hero