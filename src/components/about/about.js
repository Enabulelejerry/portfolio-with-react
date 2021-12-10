
import "./about.css"
import Me from "../../img/jerryb.jpg"
import award from "../../img/award.png"

const About = () => {
    return (
        <div className="a">
           <div className="a-left">
               <div className="a-card bg">

               </div>

               <div className="a-card">
                  <img src={Me} alt="" className="a-img" />
              </div>
               
           </div>
           <div className="a-right">
               <h1 className="a-title">About Me</h1>
               <p className="a-sub">
                   Software Developer
               </p>

               <p className="a-desc">
               An IT enthusiast with demonstrated abilities in delivering value across diverse industries using innovative approaches and cutting-edge technology to tackle problems.
                Highly proficient in web development, and has experiences with HTML, CSS, Java, PHP, and JavaScript. Deeply passionate about information technology and education.
               </p>
               <div className="a-award">
                <img src={award} alt="award" className="a-award-img" />
                <div className="a-award-text">
                    <h4 className="a-award-title">
                        Certified Developer
                    </h4>
                    <p className="a-award-desc">
                          I am a certified developer that has undergone various software development tranining 
                    </p>
                </div>
               </div>
           </div>
        </div>
    )
}

export default About
