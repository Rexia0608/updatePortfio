import { useState } from "react";
import { motion } from "framer-motion";

const SectionAbout = () => {
  const [activeSection, setActiveSection] = useState(null);

  const showWork = () => setActiveSection("work");
  const showEducation = () => setActiveSection("education");

  return (
    <section id="about" className="d-flex pe-5 ps-5 about-section">
      <div className="d-flex justify-content-around align-items-center flex-wrap w-100">

        <motion.img
          src="/img/picture/gradpic.png"
          alt="My Grad Pic"
          className="me-4"
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.div
          className="col-md-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3>About Me</h3>
          <p>
            I am an aspiring <span>full-stack developer</span> who recently
            completed a <span>3-year I.T. vocational course.</span> Although I
            have no formal experience yet in the industry, I am eager to pursue
            my passion and begin my career in <span>web design.</span> My
            interests span across all areas of application development, from
            front-end and back-end development to system management and mobile
            applications. I am driven by a strong desire to learn, grow, and
            contribute meaningfully to real-world projects.
          </p>

          <button
            onClick={showWork}
            className={`btn me-2 ${
              activeSection === "work"
                ? "btn-outline-info active-btn"
                : "btn-info"
            }`}
          >
            Work experience
          </button>
          <button
            onClick={showEducation}
            className={`btn me-2 ${
              activeSection === "education"
                ? "btn-outline-info active-btn"
                : "btn-info"
            }`}
          >
            Education
          </button>

          <motion.div
            className="d-block mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={activeSection} 
            transition={{ duration: 0.4 }}
          >
            {activeSection === "work" && (
              <div>
                <h4>Work Experience</h4>
                <li>
                  I've worked for almost 3 years as a customer service
                  representative in the BPO industry while pursuing my studies.
                  I'm also known as a performer on my previous job and a team
                  player, dreaming of having stability in the career tech
                  industry.
                </li>
              </div>
            )}

            {activeSection === "education" && (
              <div>
                <h4>Education</h4>
                <li>
                  I completed a 3-year I.T. vocational course and have been
                  building full-stack projects to sharpen my skills in
                  front-end, back-end, mobile development, and system
                  management.
                </li>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionAbout;
