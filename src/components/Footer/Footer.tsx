"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return (
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Hariharan. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h3 className={styles.title}>Get in touch</h3>
        <p className={styles.subtitle}>Contact me</p>
        
        <div className={styles.contactSection}>
          <a 
            href="mailto:mdhari707@gmail.com" 
            className={styles.emailLink}
            aria-label="Email"
          >
            <FaEnvelope className={styles.icon} />
            mdhari707@gmail.com
          </a>
        </div>
        <div className={styles.socialLinks}>
     
     <a href="https://www.linkedin.com/in/hari-haran-vm" target="_blank" rel="noopener noreferrer">
       <FaLinkedin />
     </a>
     <a href="https://github.com/hariharan1009" target="_blank" rel="noopener noreferrer">
       <FaGithub />
     </a>
     <a href="https://www.instagram.com/fan__of__life" target="_blank" rel="noopener noreferrer">
       <FaInstagram />
     </a>
   </div>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} Hariharan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}