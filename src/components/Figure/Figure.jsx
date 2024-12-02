
import styles from "./Figure.module.css";

export const Figure = () =>{
    return<section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I’m Manodya</h1>
        <p className={styles.description}>I’m a passionate Full-Stack Developer with over 2 years of experience crafting robust and dynamic digital solutions. My toolkit is powered by Java, Spring Boot, Angular, SQL, ASP.NET and Docker, enabling me to build from intuitive front-ends to efficient back-end systems. Reach out if you would like to learn more!</p>
        
        <a href="mailto:manodyaabeysinghe7@gmail.com" className={styles.contactBtn}>Contact Me</a>
        
        </div>

        <img src="/assets/figure/myimage.png" alt="Image of me"  className={styles.figureImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
}