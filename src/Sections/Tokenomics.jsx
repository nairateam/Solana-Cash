import React from 'react'
import './Tokenomics.css'
import tokenbanner from '../Assets/Images/token.svg'
import ProgressBar from 'react-animated-progress-bar';

const progress = [
    {
        name: 'Seed Sale',
        percent: '3'
    },
    {
        name: 'Private Sale',
        percent: '10'
    },
    {
        name: 'IDO',
        percent: '5'
    },
    {
        name: 'Project Development',
        percent: '10'
    },
    {
        name: 'Rewards/Staking',
        percent: '40'
    },
    {
        name: 'Team',
        percent: '10'
    },
    {
        name: 'Advisors',
        percent: '2'
    },
    {
        name: 'Marketing',
        percent: '10'
    },
    {
        name: 'Reverse',
        percent: '10'
    }
]

const Tokenomics = () => {
  return (
    <div id='tokenomics' className='container tokens'>
        <div className="tokens_split">
            <div className="page_head">
                <p className='page_title'>
                    Our Tokenomics
                </p>
                <p className='page_info tt2'>
                Total Supply: 50,000,000<br />
                Launch Price:  tbd
                </p>
            </div>
            {
                progress.map((load, index) => (
                    <div className="load_wrap" key={index}>
                        {/* <span> */}
                            <p>{load.name}</p>
                            <p>{load.percent}%</p>
                        {/* </span> */}
                        <ProgressBar
                            width="100%"
                            height="8px"
                            rect
                            fontColor="#232325"
                            percentage={load.percent}
                            rectPadding="1px"
                            rectBorderRadius="2px"
                            trackPathColor="rgba(255, 255, 255, 0.3)"
                            bgColor="#333333"
                            defColor={{
                                fair: '#14F195',
                                good: '#14F195',
                                excellent: '#14F195',
                                poor: '#14F195',
                              }}
                            trackBorderColor="transparent"
      />
                    </div>
                ))
            }
        </div>
        <div className="tokens_split">
            <img src={tokenbanner} alt="" />
        </div>
    </div>
  )
}

export default Tokenomics