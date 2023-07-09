import React from "react";
import styles from './about.module.css';

export const About = (props) => {
    return (
        <div>
            
        <div className={styles.about}>
            <p className={styles.paragr}>As a junior web developer, I have embarked on an exciting journey of learning and growth in the vast world of programming with <a className={styles.itLink} href="https://praha.itstep.org/">itStep</a>. With a solid foundation in Python, I have also delved into front-end development, mastering HTML, CSS, SCSS, and JavaScript. Currently, I am focused on honing my skills in React, a powerful JavaScript library for building dynamic web applications.</p>

            <p className={styles.paragr}>Beyond my technical expertise, I possess fluency in four languages: Ukrainian, English, Czech, and Russian. This linguistic proficiency allows me to communicate effectively with diverse teams and expand my professional network.</p>

            <p className={styles.paragr}>Looking ahead, I am thrilled to share that I have been accepted into School 42, where I will further enhance my programming skills as a C developer. This renowned institution will provide me with a rigorous and immersive learning environment, enabling me to deepen my understanding of low-level programming and refine my problem-solving abilities.</p>

            <p className={styles.paragr}>Passionate about creating exceptional digital experiences, I continuously seek opportunities to expand my skill set. I am dedicated to staying up-to-date with the latest industry trends, collaborating with like-minded professionals, and pushing the boundaries of my capabilities.</p>

            <p className={styles.paragr}>With a solid foundation, a drive for continuous improvement, and a vibrant future ahead, I am excited to embrace the challenges and opportunities that come my way as I grow as a web developer.
            </p>
        </div>
        </div>
    )
}
