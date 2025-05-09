import { motion } from 'framer-motion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
};

const SectionProjects = () => {
  const projects = [
    {
      img: "/img/projects/backendEccomerce.png",
      title: "Ecommerce Backend",
      link: "https://youtu.be/pAdWUz0MxjI",
      text: (
        <>
          Personal <a href="https://github.com/Rexia0608/ServerEcommerce">project</a> I’ve been working on my free time. 
        </>
      )
    },
    {
      img: "/img/projects/linkedin.png",
      title: "LinkedIn Clone",
      link: "https://youtu.be/4Kv_k2CO1oQ",
      text: (
        <>
          An alternative <a href="https://github.com/Rexia0608/linkedin-clone">project</a> during my OJT in <a href="">Village88</a> in 2024 when I couldn’t complete my full-stack ecommerce site.
        </>
      )
    },
    {
      img: "/img/projects/Abenson.png",
      title: "Abenson clone",
      link: "https://youtu.be/dQMevALV35Q",
      text: (
        <>
          A <a href="https://github.com/Rexia0608/Exam-Zalora-Clone">project</a> A project going back from the year 2024 when I took the exam on the school.
        </>
      )
    }
  ];

  return (
    <section id="projects" className="project-section">
      <h5 className="text-center fs-2 text-info mb-5">
        <span className="text-light">My</span> Personal <span className="text-light">Projects</span>
      </h5>
      <div className="container">
        <div className="row justify-content-center">
          {projects.map((project, i) => (
            <motion.div
              className="col-md-4 d-flex justify-content-center mb-4"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              key={i}
            >
              <Card style={{ width: '18rem' }} className="shadow bg-light">
                <Card.Img variant="top" src={project.img} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.text}</Card.Text>
                  <Button href={project.link} variant="primary">Demo</Button>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionProjects;
