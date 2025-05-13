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
    ],
    image: '/mockmate.png',
    githubLink: 'https://github.com/hariharan1009/MockMate-AI-Interview-Simulator',
    websiteLink: 'https://mock-mate-ai-interview-simulator.vercel.app/',
  },
  {
    title: ' NextStep',
    description:
      'NextStep is a career-driven navigator platform built. The platform offers features like AI-powered resume analysis and a virtual career assistant to guide users through their journey to success.',
    technologies: [
      'Next.js',
      'React js',
      'Typescript',
      'Prisma',
      'PostgreSQL'
    ],
    image: '/nextstep.png', 
    websiteLink: 'https://github.com/hariharan1009/nextstep',
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
      'Prisma',
      'PostgreSQL'
    ],
    image: '/helios.png',
    websiteLink: 'https://github.com/hariharan1009/helios',
    githubLink: 'https://github.com/hariharan1009/helios',
  },
  {
    title: ' BookSummizer ',
    description:
      'This project provides tools for processing and analyzing book-related content within PDF documents. Currently, it includes the following functionalities.',
    technologies: [
      'Next.js',
      'React js',
      'Typescript',
    ],
    image: '/book.png', 
    websiteLink: 'https://book-summarizer-sand.vercel.app',
    githubLink: 'https://github.com/hariharan1009/book-summarizer',
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
                title="Live Demo"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </a>
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                  title="View Code"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.showMoreContainer}>
        
      </div>
    </section>
  );
};

export default Projects;