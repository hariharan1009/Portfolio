import React from 'react';
import styles from './page.module.css';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string; 
  websiteLink: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    title: 'MockMate',
    description:
      'MockMate is an AI-powered interview preparation platform.It helps users master technical interviews through resume analysis, coding challenges, and mock interviews.',
    technologies: [
      'Next.js',
      'React js',
      'Typescript',
      'PostgreSQL',
      'Prisma',
      'PostgreSQL'
    ],
    image: '/mockmate.png',
    githubLink: 'https://github.com/hariharan1009/MockMate',
    websiteLink: '',
  },
  {
    title: ' NextStep',
    description:
      'NextStep is a career-driven navigator platform built. The platform offers features like AI-powered resume analysis and a virtual career assistant to guide users through their journey to success.',
    technologies: [
      'Next.js',
      'React js',
      'Typescript',
      'PostgreSQL',
      'Prisma',
      'PostgreSQL'
    ],
    image: '/nextstep.png', 
    websiteLink: '',
    githubLink: 'https://github.com/hariharan1009/nextstep',

  },
  {
    title: ' Helios',
    description:
      'Helios is an all-in-one solar platform designed to optimize your solar investment experience. It provides comprehensive data, interactive maps, the latest news, savings calculations.',
    technologies: [
      'Next.js',
      'React js',
      'Typescript',
      'PostgreSQL',
      'Prisma',
      'PostgreSQL'
    ],
    image: '/helios.png',
    websiteLink: '',
    githubLink: 'https://github.com/hariharan1009/helios',

  },
  {
    title: ' DreamTrails ',
    description:
      'Modern Travel booking website featuring tour packages with interactive image galleries,Chatbot Assistant Integration,secure payment processing, and responsive design.',
    technologies: [
      'Html',
      'Css',
      'Php',
      'javascript',
      'xampp',
      'SQL'
    ],
    image: '/travel.png', 
    websiteLink: '',
    githubLink: 'https://github.com/hariharan1009/ai-travel',

  },
];

const Projects: React.FC = () => {
  return (
    <section className={styles.projects}>
      <h2 className={styles.title}>My Latest Projects</h2>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectItem}>
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className={styles.projectImage}
            />
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.techStack}>
              {project.technologies.map((tech, idx) => (
                <span key={idx} className={styles.tech}>
                  {tech}
                </span>
              ))}
            </div>
            <div className={styles.buttons}>
              <a
                href={project.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                Website
              </a>
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
