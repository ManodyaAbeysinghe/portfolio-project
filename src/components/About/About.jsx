
import styles from "./About.module.css";


export const About = () => {
    return (
      <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <img
            src="/assets/about/aboutimg.png"
            alt="Me"
            className={styles.aboutImage}
          />
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img src="/assets/about/education.png" alt="education" />
              <div className={styles.aboutItemText}>
                <h3>Education</h3>
                <p>
                I hold a Masters degree in Big Data Analytics with merit from Edge Hill University, complemented by a Bachelor’s Honours degree from the prestigious University of Moratuwa.
    
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src="/assets/about/technology.png" alt="expertise" />
              <div className={styles.aboutItemText}>
                <h3>Expertise</h3>
                <p>
                I specialize in crafting high-performance, optimized full-stack systems and robust APIs, delivering seamless and efficient solutions tailored to meet diverse needs
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src="/assets/about/lightbulb.png" alt="passion" />
              <div className={styles.aboutItemText}>
                <h3>Passion</h3>
                <p>
                My true passion lies in exploring and mastering emerging technologies, continually expanding my expertise to stay ahead in the ever-evolving tech landscape
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
  };