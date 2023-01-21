import React from 'react'
import './Partners.css'
import partner from '../Assets/Images/part.svg'

const Partners = () => {
  return (
    <div className='container part'>
        <div className="page_head">
            <p className='page_title'>
                Our Partners
            </p>
        </div>
        <img src={partner} className='part_img' alt="" />
        <div className="part_box">
            <p>STAKING IS LIVE</p>
            <p>Dont miss out, join staking platform</p>
            <button><a href="https://staking.solanacash.io/">Stake Now</a></button>
        </div>
    </div>
  )
}

export default Partners