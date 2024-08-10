import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <span className="mx-2 w-10 text-3xl font-bold text-black">Shubh.</span>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.div whileHover={{ scale: 1.2 }}>
          <FaLinkedin
            className="text-blue-700"
            style={{
              backgroundImage: 'linear-gradient(to right, #0077b5, #00b5ad)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <FaGithub
            className="text-gray-800"
            style={{
              backgroundImage: 'linear-gradient(to right, #333333, #999999)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <FaTwitter
            className="text-blue-500"
            style={{
              backgroundImage: 'linear-gradient(to right, #1DA1F2, #00c6ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <FaInstagram
            className="text-pink-500"
            style={{
              backgroundImage: 'linear-gradient(to right, #E1306C, #FFDC80)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          />
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
