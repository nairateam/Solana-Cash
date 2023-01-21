import React from 'react'
import './Chart.css'
import charts from '../Assets/Charts'
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const Chart = () => {
    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });
  return (
    <div className='container chart_c'>
        <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
        </svg>
        <div className="page_head">
            <p className='top_head'>
                Comparison chart
            </p>
            <p className='page_title'>
                Blockchain Comparison Chart
            </p>
            {/* <p className='page_info'>
            enjoy Solanacash variety of features that make it the best place to begin trading
            </p> */}
        </div>
        <div className="charts" ref={ref}>
            {
                charts.map((chart)=>(
                    <div className="chart_item" key={chart.id}>
                        <p className='chart_head'>
                            {chart.title}
                        </p>
                        <p>{chart.item}</p>
                        <p>{chart.item1}</p>
                        <p>{chart.item2}</p>
                        <p>{chart.item3}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Chart