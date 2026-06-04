import '../../styles/about.css'

const About = () => {
    return (
        <div className="app">
            <div className="about-head">
                <div className="avatar">
                    <img src="/images/self.JPG" alt="" />
                </div>
                <div className="head-content">
                    <h2>Gabrielle Duere</h2>
                    <p>NG-based freelance frontend developer</p>
                    <p>Former Frontend Intern at <span>PipeOps</span></p>
                </div>
            </div>
            <hr />
            <div className="about-content">
                <p>hey! i'm gabrielle, a fronted web developer. i...</p>
                <ul>
                    <li>create responsive websites</li>
                    <li>am a student at Landmark University</li>
                    <li></li>
                    <li></li>
                </ul>
                <p>interested in working with me? send me an email at <span>godd3101@gmail.com</span>! :)</p>
                <h3>EDUCATION</h3>
                <div className="container-with-line">
                    <p>Bachelor of Science in Computer Science</p>
                    <span>(EXPECTED YEAR OF GRADUATION: 2027)</span>
                </div>
                <h3>OTHER INTERESTS</h3>
                <ul>
                    <li>music!</li>
                    <li>puzzle games</li>
                    <li>painting/coloring</li>
                    <li>existentialism</li>
                </ul>
                <h3>LANGUAGE PROFICIENCY</h3>
                <div className="container-with-line">
                    <p>i have native fluency in <span className="lang">English</span>, and can speak in conversational <span className="lang">Ijaw</span></p>
                    <span>i speak a little bit of Japanese, but at a very pre-school proficiency!</span>
                </div>
            </div>
            
        </div>
    )
}

export default About