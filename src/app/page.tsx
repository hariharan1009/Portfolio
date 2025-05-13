"use client";
import styles from './page.module.css';
import Projects from './project/page';
import About from './about/page';
import Hero from '@/app/hero/page'; 
export default function Home() {
  return (
    <>
    <section id="hero" className={styles.section}>
     <Hero /> 
   </section>
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
