import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <motion.div 
        className="flex flex-wrap"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
              className=" pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Shubhankar Patel
            </motion.h1>
            <motion.span 
              className="bg-gradient-to-r from-blue-300 via-red-500 to-orange-500  bg-clip-text text-3xl tracking-tight text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Full-Stack Developer
            </motion.span>
            <motion.p 
              className="text-gray-600 my-2 max-w-xl py-6 font-light tracking-tighter font-mono text-base "
              
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </motion.div>
        <motion.div 
          className="w-full lg:w-1/2 lg:p-10"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="flex justify-center">
            <motion.img 
              src={profilePic} 
              alt="Shubh" 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
