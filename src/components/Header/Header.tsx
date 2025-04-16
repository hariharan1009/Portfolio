import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="/" className={`${styles.link}`} title="Home">Home</a>
        <a href="#about" className={`${styles.link}`} title="About">About</a>
        <a href="#projects" className={`${styles.link}`} title="Projects">Projects</a>
        <a href="#contact" className={`${styles.link}`} title="Contact">Contact</a>
        </nav>
    </header>
  );
}
