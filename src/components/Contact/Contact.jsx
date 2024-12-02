

import styles from "./Contact.module.css";


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="/assets/contact/emailIcon.png" alt="Email icon" />
          <a href="mailto:manodyaabeysinghe7@gmail.com">manodyaabeysinghe7@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src="/assets/contact/linkedinIcon.png"
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/manodya-abeysinghe/">linkedin.com/manodya-abeysinghe</a>
        </li>
        <li className={styles.link}>
          <img src="/assets/contact/githubIcon.png" alt="Github icon" />
          <a href="https://github.com/ManodyaAbeysinghe?tab=overview&from=2024-12-01&to=2024-12-01">github.com/manodya-abeysinghe</a>
        </li>
      </ul>
    </footer>
  );
};