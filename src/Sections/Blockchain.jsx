import React from 'react'
import './Blockchain.css'
import border from '../Assets/Images/Icons/bcborder.svg'
import barner from '../Assets/Images/bcbanner.svg'

const Blockchain = () => {
  return (
    <div className='container blockchain'>
        <div className="flex_box bc_flex">
            <div className="flex_item bc_item">
                <div className="page_head bc_head">
                    <p className='top_head'>
                        Our Blockchain
                    </p>
                    <p className='page_title'>
                        Built on the fastest blockchain technology
                    </p>
                </div>
                <div className="dapp_wrap bc_wrap">
                    <img src={border} alt="Dapp" className='bos' />
                    <p>Solana ensures composability between ecosystems by maintaining a single global state as the network scales </p>
                </div>
                <div className="dapp_wrap bc_wrap">
                    <img src={border} alt="Dapp" />
                    <p>Enjoy low transaction cost forever as Solana's scalability ensures transactions remain less than $0.01</p>
                </div>
                <div className="dapp_wrap bc_wrap">
                    <img src={border} alt="Dapp" />
                    <p>Solana is all about speed, with 400 millisecond block times. And as hardware gets faster, so does the network.</p>
                </div>
                <div className="block_btn">
                    <button className='block_btn'><a href="https://solana.com/">Discover Solana</a></button>
                </div>
            </div>
            <div className="flex_item bc_image">
                <img src={barner} alt="Solanacash" />
            </div>
        </div>
    </div>
  )
}

export default Blockchain