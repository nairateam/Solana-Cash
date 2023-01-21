import React from 'react'
import './Media.css'
import benziga from '../Assets/Images/Media/benzinga.svg'
import bloomberg from '../Assets/Images/Media/bloomberg.svg'
import coinmarket from '../Assets/Images/Media/coinmarketcap.svg'
import mw from '../Assets/Images/Media/mw.svg'
import nasdaq from '../Assets/Images/Media/nasdaq.svg'
import yf from '../Assets/Images/Media/yf.svg'
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

const Media = () => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });
      /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
      const x = useTransform(baseX, (v) => `${wrap(10, -45, v)}%`);
  
      const directionFactor = useRef(1);
      useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * 4 * (delta / 1000);
    
        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
          directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
          directionFactor.current = 1;
        }
    
        moveBy += directionFactor.current * moveBy * velocityFactor.get();
    
        baseX.set(baseX.get() + moveBy);
      });
  return (
    <div className='container media_wrap'>
        <div className="page_head">
            <p className='page_title'>
                Media Mention
            </p>
        </div>
        <div className="parallax">
          <motion.div className="scroller sc_media" style={{ x }}>
              <img src={benziga} alt="" />
              <img src={bloomberg} alt="" />
              <img src={coinmarket} alt="" />
              <img src={mw} alt="" />
              <img src={nasdaq} alt="" />
              <img src={yf} alt="" />
          </motion.div>
        </div>
    </div>
  )
}

export default Media