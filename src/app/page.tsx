"use client";
import styles from './page.module.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import Projects from './project/page';
import About from './about/page';

export default function Home() {
  return (
    <>
    <main className={styles.container}>
      <div className={styles.introSection}>
        <h1 className={styles.name}>Hi, I'm Hariharan! <span className={styles.wave}>👋</span></h1>
        <p className={styles.description}>
          Passionate Software Engineer | Fullstack Developer | Problem Slover Enthusiast
        </p>
        <div className={styles.socialIcons}>
          <a href="https://github.com/hariharan1009" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/hari-haran-10sep2004" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaLinkedin />
          </a>
          <a href="mailto:mdhari707@gmail.com" className={styles.icon}>
            <FaEnvelope />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaFileAlt />
          </a>
        </div>
      </div>
    </main>
    <section id="about" className={styles.section}>
     <About /> 
   </section>
   <section id="projects" className={styles.section}>
     <Projects /> 
   </section>
   <section id="contact">
  <h2></h2>
</section>

   </>
  );
}
