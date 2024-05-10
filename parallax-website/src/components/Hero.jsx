import { motion, useScroll, useTransform } from 'framer-motion';

import parallaxImg1 from '../assets/parallax2/1.png';
import parallaxImg2 from '../assets/parallax2/2.png';
import parallaxImg3 from '../assets/parallax2/3.png';
import parallaxImg4 from '../assets/parallax2/4.png';

export default function Hero() {
  const parallax1 = {
    backgroundImage: `url(${parallaxImg1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 4,
  };
  const parallax2 = {
    backgroundImage: `url(${parallaxImg2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 3,
  };
  const parallax3 = {
    backgroundImage: `url(${parallaxImg3})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 2,
  };
  const parallax4 = {
    backgroundImage: `url(${parallaxImg4})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 1,
  };

  const { scrollY } = useScroll();

  const scaleText = useTransform(scrollY, [0, 100, 200], [1.5, 2, 2.5]);
  const scrollTextY = useTransform(
    scrollY,
    [0, 100, 500, 1000],
    [0, 100, 500, 1000]
  );
  const textOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  const yImage = useTransform(scrollY, [0, 200], [0, -500]);

  const yImage2 = useTransform(scrollY, [0, 500, 1000], [-100, 200, 400]);

  const yImage3 = useTransform(scrollY, [0, 500, 1000], [-100, 300, 800]);

  const yImage4 = useTransform(scrollY, [0, 500, 1000], [-50, 500, 1000]);

  return (
    <section className='overflow-x-hidden'>
      <div className='relative w-screen h-[300vh] bg-slate-300'>
        <div className='flex justify-center items-center w-full h-screen absolute z-[3]'>
          <motion.h1
            style={{ scale: scaleText, y: scrollTextY }}
            className='text-9xl uppercase text-matcha-400 drop-shadow-2xl'
          >
            Explore
          </motion.h1>
        </div>
        <div className='w-full h-full absolute top-[-60vh]'>
          <motion.div
            style={{ ...parallax1, y: yImage }}
            className='w-full h-full absolute'
          ></motion.div>
          <motion.div
            style={{ ...parallax2, y: yImage2 }}
            className='w-full h-full absolute'
          ></motion.div>
          <motion.div
            style={{ ...parallax3, y: yImage3 }}
            className='w-full h-full absolute'
          ></motion.div>
          <motion.div
            style={{ ...parallax4, y: yImage4 }}
            className='w-full h-full absolute'
          ></motion.div>
        </div>
      </div>
    </section>
  );
}
