import React from 'react'
import './Ecosystem.css'
import { motion } from 'framer-motion'

const coreCard = [
    {
        title: 'P2P Dapp',
        info: 'Trade your crypto safely for fiat (or other cryptocurrencies) privately and securely using solanacash P2P network.',
        btn: <a href="https://solanacash.gitbook.io/solana-cash/core-ecosystem-utility/decentralized-p2p-platform">Learn More</a>
    },
    {
        title: 'SolanaCash Staking',
        info: 'Lock your solana cash token to earn more rewards with attractive APY',
        btn: <a href="https://staking.solanacash.io/">Stake Now</a>
    },
    {
        title: 'SolanaCash app',
        info: 'User friendly mobile app to send and receive funds safely with maximum security.',
        btn: <a href="https://solanacash.gitbook.io/solana-cash/core-ecosystem-utility/solanacash-app">Learn More</a>
    },
    {
        title: 'SolCard',
        info: 'Introducing the SolCard, spend and make purchases online anywhere and anytime using SolanaCash',
        btn: <a href="https://solanacash.gitbook.io/solana-cash/core-ecosystem-utility/solcard">Learn More</a>
    },
    {
        title: 'Bridge',
        info: 'Token bridge with multiple blockchain',
        btn: <a href="https://solanacash.gitbook.io/solana-cash/core-ecosystem-utility/bridge">Learn More</a>
    }
]

const Ecosystem = () => {
  return (
    <div id='ecosystem' className='container'>
        <div className="page_head">
            <p className='page_title'>
                Core Ecosystem
            </p>
        </div>
        <div className="ecosystem">
            {
                coreCard.map((card, index)=>(
                    <motion.div key={index}
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{delay:0.1, duration:1.2}}
                    className="core_item">
                        <p>{card.title}</p>
                        <span>
                            <p>{card.info}</p>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                onTap={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 1000, damping: 10 }}
                            >{card.btn}</motion.button>
                        </span>
                    </motion.div>
                ))
            }
        </div>
    </div>
  )
}

export default Ecosystem