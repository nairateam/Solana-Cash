import React from 'react'
import './Features.css'
import { motion } from 'framer-motion'
const features = [
    {
        id:1,
        item: 'SolanaCash is leveraging Decentralized Finance and Crypto to your everyday banking life.'
    },
    {
        id:2,
        item: 'Send,Receive, Spend,and invest with SolanaCash App all within one platform.'
    },
    {
        id:3,
        item: 'A self custody, limitless app where you control your money.'
    }
]

const rollAnimate = {
    slideOut: {y: -250, opacity: 0},
    slideIn: {y: 0, opacity:1},
    transition: {delay:0.5, duration:1.5}
}

const Features = () => {
  return (
    <div id='features' className='container'>
        <div className="page_head">
            <p className='top_head'>
                Our Features
            </p>
            <p className='page_title'>
                What is solana cash?
            </p>
            <p className='page_info'>
                SolanaCash is a decentralized global payment system with an all in one ecosystem for all your financial needs. From P2P platform to Solcard, Staking and more.
            </p>
        </div>
        <motion.div className="feature_wrap"
            initial={'slideOut'}
            whileInView={'slideIn'}
            viewport={{once: true, amount: 0.31}}
            transition={{staggerChildren: .5, duration: 2.5, delay: 0.5}}
        >
                {
                    features.map((item)=>(
                        <motion.div key={item.id}
                        variants={rollAnimate}
                        className="feature_item"
                        >
                            <p>{item.item}</p>
                        </motion.div>
                    ))
                }
        </motion.div>
    </div>
  )
}

export default Features