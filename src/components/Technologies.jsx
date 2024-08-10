import React from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { FaGitAlt, FaPython, FaJava, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { motion } from "framer-motion";

const Technologies = () => {
  const upVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }
    }
  };

  const downVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }
    }
  };

  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-black text-center text-4xl font-serif">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div className="rounded-2xl border-2 border-neutral-50 p-4" variants={upVariants} animate="animate">
          <RiReactjsLine className="text-6xl text-cyan-400" />
        </motion.div>
        <motion.div className="rounded-2xl border-2 border-neutral-50 p-4" variants={downVariants} animate="animate">
          <FaNodeJs className="text-6xl text-green-500" />
        </motion.div>
        <motion.div className="rounded-2xl border-2 border-neutral-50 p-4" variants={upVariants} animate="animate">
          <SiMongodb className="text-6xl text-green-500" />
        </motion.div>
        <motion.div className="rounded-2xl border-2 border-neutral-50 p-4" variants={downVariants} animate="animate">
          <BsBootstrapFill className="text-6xl text-violet-400" />
        </motion.div>
        <motion.div className="rounded-2xl border-2 border-neutral-50 p-4" variants={upVariants} animate="animate">
          <FaGitAlt className="text-6xl text-red-600" />
        </motion.div>
        <motion.div className="rounded-2xl border-2 border-neutral-50 p-4" variants={downVariants} animate="animate">
          <FaPython className="text-6xl text-cyan-600" />
        </motion.div>
        <motion.div className="rounded-2xl border-2 border-neutral-50 p-4" variants={upVariants} animate="animate">
          <FaJava className="text-6xl text-orange-600" />
        </motion.div>
        <motion.div className="rounded-2xl border-2 border-neutral-50 p-4" variants={downVariants} animate="animate">
          <IoLogoJavascript className="text-6xl text-yellow-400" />
        </motion.div>
      </div>
    </div>
  );
}

export default Technologies;
