import React from 'react';

const About = () => {
    const styles = {
        about: {
            height: '100vh',
            position: 'relative',
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: '50px 10%',
            backgroundImage:'url("background2.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        },
        aboutContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            marginRight: '50%',
        },
        h3: {
            fontSize: '60px',
            fontWeight: '700',
            color:'#0d9276',
            margin: '10px 0',
        },
        span: {
            color: '#c80e13',
        },
        p: {
            fontSize: '18px',
            fontWeight: 600,
            color: '#45474b',
            lineHeight: '1.5',

        },
        img: {
            maxWidth: '90%',
            maxHeight: '90%',
            borderRadius: '10px',
        },
        div: {
            flex: '1',
            minWidth: '300px',
        }
    };

    return (
        <section className="about" style={styles.about}>
            <div className="about-container" style={styles.aboutContainer}>
                <div style={styles.div}>
                    <h3 style={styles.h3}>About <span style={styles.span}>Me</span></h3>
                    <p style={styles.p}>Hi, I'm Gnandeep, a passionate and creative <span style={styles.span}>Frontend Developer</span> with more than 6 years of experience in building user-friendly and visually appealing interfaces. I’m always seeking new challenges and opportunities to learn and grow.</p>
                    <p style={styles.p}>My journey began with a solid foundation in HTML, CSS, and JavaScript, and over the years, I have expanded my expertise to include advanced technologies such as React, Redux, and Node.js, enabling me to build scalable and efficient applications.</p>
                    <p style={styles.p}>Throughout my career, I have had the opportunity to work on diverse projects, ranging from developing personal websites to contributing to high-impact open-source projects. My goal is always to deliver the best user experience possible while continuously evolving with new technologies.</p>
                    <p style={styles.p}>
                    Dynamic, detail-oriented, and driven, I specialize in designing and implementing user-centric web applications. I’m proficient in modern frontend technologies and frameworks, with a focus on creating responsive, accessible, and visually appealing user interfaces. I excel in collaborating with cross-functional teams to deliver high-quality solutions that meet business objectives.
                    </p>
                    <p style={styles.p}>
                    With a keen eye for design and a deep understanding of user behavior, I am committed to delivering seamless and impactful web experiences.

</p>
                </div>
            </div>
        </section>
    );
};

export default About;