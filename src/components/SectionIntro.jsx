import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.3, duration: 0.5 }
  }),
};

const SectionIntro = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    if (inView && typedRef.current) {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }

      typedInstance.current = new Typed(typedRef.current, {
        strings: ['Software Engineer.', 'Full-Stack Developer.', 'Web Designer.', 'Tech Explorer.'],
        typeSpeed: 60,
        backSpeed: 30,
        loop: true,
      });
    }

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
        typedInstance.current = null;
      }
    };
  }, [inView]);

  const socialIcons = [
    { src: '/img/icons/Facebook.svg', alt: 'Facebook', href: 'https://m.me/johnrey.cejas?hash=AbZ4lasNllbIuXDq&source=qr_link_share' },
    { src: '/img/icons/LinkedIn.svg', alt: 'LinkedIn', href: 'https://www.linkedin.com/in/john-rey-cejas-352716170/' },
    { src: '/img/icons/Twitter.svg', alt: 'Twitter', href: '#' },
  ];

  return (
    <section id="home" ref={ref} className="pe-5 ps-5 intro-section">
      <div className="d-flex justify-content-between align-items-center flex-wrap">

        {/* Social Icons with fade-in */}
        <ul className="me-4 list-unstyled d-flex flex-column gap-2">
          {socialIcons.map((icon, i) => (
            <motion.li
              key={i}
              custom={i}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeVariants}
            >
              <a href={icon.href}>
                <img className="icons" src={icon.src} alt={icon.alt} />
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Text Section */}
        <motion.div
          className="container"
          initial={{ x: -200, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1>
            Hi I'm <span className="text-info fw-bold">John Rey Cejas</span>, a full stack Developer
          </h1>
          <h2>
            Aspiring to be a {'<'}<span ref={typedRef} className="text-info"></span>{'/>'}
          </h2>
          <div className="mt-3">
            <a href="/resume/resume.pdf" download className="btn btn-outline-info ms-2">Download CV</a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.img
          src="/img/picture/noBackround.png"
          alt="A photo of John Rey Cejas"
          className="ms-4 avatar"
          initial={{ x: 200, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
        />
      </div>
    </section>
  );
};

export default SectionIntro;
