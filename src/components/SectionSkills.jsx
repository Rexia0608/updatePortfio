import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

const SectionSkills = () => {
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

    const renderSkillList = (skills, offset = 0) =>
        skills.map((skill, index) => (
        <motion.li
            key={index}
            custom={offset + index}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
        >
            <a href={skill.href} target="_blank" rel="noopener noreferrer">
            <img src={skill.src} alt={skill.label} />
            <span>{skill.label}</span>
            </a>
        </motion.li>
    ));

  return (
    <section id="skills" ref={ref} className="skills-section">
      <h5 className="text-center fs-1 text-white">
        S<span className="text-info">kill</span>s
      </h5>
      <div className="skills-lists">
        <ul>
          {renderSkillList([
            { src: "/img/icons/jQuery.svg", label: "jQuery", href: "https://jquery.com/" },
            { src: "/img/icons/HTML5.svg", label: "HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
            { src: "/img/icons/CSS3.svg", label: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
            { src: "/img/icons/JavaScript.svg", label: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
            { src: "/img/icons/CSharp.svg", label: "C Sharp | C#", href: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
            { src: "/img/icons/Figma.svg", label: "Figma", href: "https://www.figma.com/" },
            { src: "/img/icons/PHP.svg", label: "PHP", href: "https://www.php.net/" },
            { src: "/img/icons/Node.js.svg", label: "Node.js", href: "https://nodejs.org/" },
          ])}
        </ul>
        <ul>
          {renderSkillList([
            { src: "/img/icons/NPM.svg", label: "NPM", href: "https://www.npmjs.com/" },
            { src: "/img/icons/Postman.svg", label: "Postman", href: "https://www.postman.com/" },
            { src: "/img/icons/ReactBootstrap.svg", label: "ReactBootstrap", href: "https://react-bootstrap.github.io/" },
            { src: "/img/icons/CodeIgniter.svg", label: "CodeIgniter", href: "https://codeigniter.com/" },
            { src: "/img/icons/React.svg", label: "React", href: "https://reactjs.org/" },
            { src: "/img/icons/Bootstrap.svg", label: "Bootstrap", href: "https://getbootstrap.com/" },
          ], 8)}
        </ul>
        <ul>
          {renderSkillList([
            { src: "/img/icons/PostgresSQL.svg", label: "PostgresSQL", href: "https://www.postgresql.org/" },
            { src: "/img/icons/MongoDB.svg", label: "MongoDB", href: "https://www.mongodb.com/" },
            { src: "/img/icons/MySQL.svg", label: "MySQL", href: "https://www.mysql.com/" },
            { src: "/img/icons/Express.svg", label: "Express.js", href: "https://expressjs.com/" },
          ], 14)}
        </ul>
      </div>
    </section>
  );
};

export default SectionSkills;
