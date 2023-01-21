import React from 'react'
import './Roadmap.css'
import mapban from '../Assets/Images/Icons/map.svg'
import line from '../Assets/Images/Icons/line.svg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const maps = [
    {
        year: '2021',
        q: 'Q1',
        info: [
            'Business Concept Formation',
            'Core Team Formation',
            'Strategic Planning',
            'Research and Analysis'
        ]
    },
    {
        year: '2021',
        q: 'Q2',
        info: [
            'Website & Social media creation',
            'SolanaCash token creation & development',
            'Pitch Deck & Litepaper',
            'Seed Round',
            'BSC Bridge on SolanaCash',
            'Ethereum Bridge on SolanaCash',
            'Polygon Bridge on SolanaCash',
            'CoinMarketCap Listing'
        ]
    },
    {
        year: '2022',
        q: 'Q3',
        info: [
            'Smart Contract Audit Report by Certik',
            'Private Sale (February 18th 2022)',
            'Launch on Raydium',
            'Primary CEX Listing',
            'Solana Cash Staking'
        ]
    },
    {
        year: '2022',
        q: 'Q4',
        info: [
            'Team Expansion',
            'Product Market Analysis',
            'P2P Platform MVP Development',
            'Project official Launch'
        ]
    }
]

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Roadmap = () => {

  return (
    <div id='roadmap' className="container">
        <div className="page_head">
            <p className='top_head'>
                Roadmap
            </p>
            <p className='page_title'>
                How It All Started
            </p>
        </div>
        {/* <div className="roadmap"> */}
        <Carousel 
            showDots={true}
            arrows={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
        >
        {
                maps.map((map, index)=>(

                    <div className="map_wrap" key={index}>
                        <p>{map.year}</p>
                        <img src={mapban} alt="" />
                        <img src={line} alt="" />
                        <div className="map_container">
                            <p>{map.q}</p>
                            <ul>
                                {
                                    map.info.map((list, index) => (
                                        <li key={index}>{list}</li>
                                    ))
                                }
                            </ul>
                        </div>

                    </div>
                ))
            }
        </Carousel>;
            {/* {
                maps.map(map=>(

                    <div className="map_wrap">
                        <p>{map.year}</p>
                        <img src={mapban} alt="" />
                        <img src={line} alt="" />
                        <div className="map_container">
                            <p>{map.q}</p>
                            <ul>
                                {
                                    map.info.map((list, index) => (
                                        <li>{list}</li>
                                    ))
                                }
                            </ul>
                        </div>

                    </div>
                ))
            } */}
        </div>
    // </div>
  )
}

export default Roadmap