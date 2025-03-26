import "./index.scss";
import { motion } from "motion/react";

function About() {
  return (
    <>
      <div>
        <motion.div className="flex items-center justify-center p-4 card-box" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.175 }}>
          <span>123</span>
        </motion.div>
      </div>
    </>
  );
}

export default About;
