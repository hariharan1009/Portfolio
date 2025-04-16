import React from 'react';
import styles from './page.module.css';

const About: React.FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.description}>
        I’m Hari Haran, a Computer Science and Engineering student at K. Ramakrishnan College of Technology. I’m passionate about turning ideas into tech that solves real problems. With hands-on experience in full-stack development, AI, and cybersecurity, I love building user-friendly, scalable solutions that make a difference.
        </p>
        <p className={styles.description}>
        My journey so far has been filled with exciting challenges and rewarding wins — from developing AI-driven tools and secure systems to winning INNOGEN’25 Mega Hackathon and being a finalist at Nexathon (VIT Chennai). These experiences have helped me sharpen my problem-solving mindset and grow both technically and creatively.        </p>
        <p className={styles.description}>
        I also take pride in my leadership journey. I was recognized for successfully organizing a National-Level Online Technical Event that brought together 1000+ participants from across India. This initiative showcased my ability to lead, coordinate large-scale events, and inspire a community of tech enthusiasts. It was a proud moment that left a lasting impact on both me and those I worked with.        </p>
      </div>
    </section>
  );
};

export default About;
