"use client";
import styles from './page.module.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';


const hero: React.FC = () => {
  return (
    <>
    <main className={styles.container}>
      <div className={styles.introSection}>
        <h1 className={styles.name}>Hi, I'm Hariharan! <span className={styles.wave}>👋</span></h1>
        <p className={styles.description}>
          Passionate Software Engineer | Fullstack Developer |Problem Solver Enthusiast
        </p>
        <div className={styles.socialIcons}>
          <a href="https://github.com/hariharan1009" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/hari-haran-vm" target="_blank" rel="noopener noreferrer" className={styles.icon}>
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
   

   </>
  );
}
export default hero;