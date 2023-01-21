import React from 'react'
import './Dapp.css'
import dapp1 from '../Assets/Images/Icons/currency.svg'
import dapp2 from '../Assets/Images/Icons/carbon.svg'
import dapp3 from '../Assets/Images/Icons/lock.svg'
import dapp4 from '../Assets/Images/Icons/reward.svg'
import dappbanner from '../Assets/Images/dappimg.svg'

const Dapp = () => {
  return (
    <div className='container'>
        <div className="page_head">
            <p className='top_head'>
                P2P Dapp
            </p>
            <p className='page_title'>
                Enjoy your trading experience
            </p>
            <p className='infod'>
            enjoy Solanacash variety of features that make it the best place to begin trading
            </p>
        </div>
        <div className="flex_box">
            <div className="flex_item">
                <div className="dapp_wrap">
                    <img src={dapp1} alt="Dapp" />
                    <p>Convert crypto into cash </p>
                </div>
                <div className="dapp_wrap">
                    <img src={dapp2} alt="Dapp" />
                    <p>manage your portfolio</p>
                </div>
                <div className="dapp_wrap">
                    <img src={dapp3} alt="Dapp" />
                    <p>trade securely</p>
                </div>
                <div className="dapp_wrap">
                    <img src={dapp4} alt="Dapp" />
                    <p>Earn SOLCH On rewards</p>
                </div>
            </div>
            <div className="flex_item">
                <img src={dappbanner} alt="Dapp P2P" />
            </div>
        </div>
    </div>
  )
}

export default Dapp