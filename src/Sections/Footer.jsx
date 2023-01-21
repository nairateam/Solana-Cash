import React from 'react'
import './Footer.css'
import twitter from '../Assets/Images/Icons/twitterr.svg'
import fb from '../Assets/Images/Icons/facebook.svg'
import instagram from '../Assets/Images/Icons/instagram.svg'
import medium from '../Assets/Images/Icons/medium.svg'
import linkedin from '../Assets/Images/Icons/linkedin.svg'
import telegram from '../Assets/Images/Icons/telegramm.svg'

const links = [
    {
        id:1,
        title: 'Quick Links',
        list: [
            'Lite Paper',
            'Pitch Deck',
            'Solana Ecosystem',
            'Certik Audit'
        ]
    },
    {
        id:2,
        title: 'Explorer',
        list: [
            'Solscan',
            'Polygonscan',
            'Etherscan',
            'Bscscan'
        ]
    },
    {
        id:3,
        title: 'Legal',
        list: [
            'Terms & Conditions',
            'Risk & Disclosure'
        ]
    },
    {
        id:4,
        title: 'Product',
        list: [
            'P2P Mobile App',
            'Staking Platform'
        ]
    },
    {
        id:5,
        title: 'Community',
        list: [
            <span><img src={twitter} alt="" /> Twitter</span>,
            <span><img src={linkedin} alt="" /> Linkedin</span>,
            <span><img src={instagram} alt="" /> Instagram</span>,
            <span><img src={medium} alt="" /> Medium</span>,
            <span><img src={fb} alt="" /> Facebook</span>,
            <span><img src={telegram} alt="" /> Telegram</span>
            // 'Twitter',
            // 'LinkedIn',
            // 'Instagram',
            // 'Medium',
            // 'Facebook',
            // 'Telegram'
        ]
    }
]

const Footer = () => {
  return (
    <div className='container footer'>
        <div className="footed">
            {
                links.map(link => (
                    <div className="foot_item" key={link.id}>
                        <p>{link.title}</p>
                        <ul>
                            {
                                link.list.map((list, index) => (
                                    <li key={index}>{list}</li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
        <div className='fl'><p>© 2021 Solanacash. All Rights Reserved.</p></div>
    </div>
  )
}

export default Footer