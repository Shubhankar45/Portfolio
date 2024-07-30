import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl font-serif">Get
      <span className="text-neutral-500">In Touch</span>
      </h2>
      <motion.div 
        className="text-center tracking-tighter"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.p 
          className="my-4"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {CONTACT.address}
        </motion.p>
        <motion.p 
          className="my-4"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a 
          href={`mailto:${CONTACT.email}`}
          className="border-b"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {CONTACT.email}
        </motion.a>
      </motion.div>
    </div>
  );
}

export default Contact;
