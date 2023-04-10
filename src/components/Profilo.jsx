import React from 'react'
import './Profilo.css';
function Profilo() {
  return (
    <div class="container">
    <div class="header">
        <div class="name"><b>ANISHA</b> SHABNAM</div>
            <div class="contact">
                <span class="email">Email:</span>
                <span class="email-val">anishablackberry7@gmail.com</span>
                <span class="seperator"></span>
                <span class="phone">Ph No: </span>
                <span class="phno">+91 9876543210</span>
            </div>
            <div class="about">
                <span class="sec-title">
                Student
                </span>
                <div class="description">
                    I look forward for an engaging work experience and motivating colleagues to perpetuate my
                    high spirits and bring out the best out of available resources at any point of time, thereby 
                    proving how much valuable and resourceful I can be to this organization.
                </div>
            </div>
        </div>

        <div class="details">
            <div class="section">
                <div class="sec-title">
                    Education
                </div>
                <div class="sec-list">
                    <div class="sec-list-item">
                        <div class="left">
                            <div class="cname">Saveetha Engineering College</div>
                            <div class="loc">Thandalam, Chennai</div>
                            <div class="dur">2021-25</div>
                            <div class="work">B.E (cse)</div>
                        </div>
                        <div class="right">
                            <div class="cgpa">CGPA: 8.69 </div>
                            <div class="aaa">Passed with a distinction</div>
                        </div>
                    </div>
                </div>
                <div class="sec-list">
                    <div class="sec-list-item">
                        <div class="left">
                            <div class="cname">Alagappa Matriculation Higher Secondary School</div>
                            <div class="loc">Purasawakkam, Chennai</div>
                            <div class="dur">2020-21</div>
                            <div class="work">12th STD</div>
                        </div>
                        <div class="right">
                            <div class="cgpa">Cutoff: 177.76 </div>
                            <div class="aaa">Secured school-fourth position</div>
                        </div>
                    </div>
                </div>
            </div> 
            <div class="section">
                <div class="sec-title">
                    Work
                </div>
                <div class="sec-list">
                    <div class="sec-list-item">
                        <div class="left">
                            <div class="cname">Internships</div>
                            <div class="loc">Zybeak Technologies</div>
                            <div class="dur">Jan 2023 - Feb 20203</div>
                            <div class="aaa">Ethical Hacking and Cybersecurity</div>
                        </div>
                        <div class="right">
                            <div class="des">ECell IIT, Kanpur</div>
                            <div class="dur">Nov 2022 - Jan 2023</div>
                            <div class="aaa">Campus Ambassador</div>
                        </div>
                    </div>
                </div>
            </div> 
            <div class="section">
                <div class="sec-title">
                    Workshops & Bootcamps
                </div>
                <div class="sec-list">
                    <div class="sec-list-item">
                        <div class="left">
                            <div class="cname">Devtown</div>
                            <div class="dur">Aug 2022</div>
                            <div class="aaa">Instagram Clone Project using HTML and CSS</div>
                            <div class="space"></div>
                            <div class="cname">Devtown</div>
                            <div class="dur">Oct 2022</div>
                            <div class="aaa">Google Drive Project using HTML and CSS</div>
                            <div class="space"></div>
                            <div class="cname">Ladder, Chennai</div>
                            <div class="dur">Jan 2022</div>                                <div class="aaa">Transcript Writing</div>
                        </div>
                    </div>
                </div>
            </div> 
            <div class="section">
                <div class="sec-title">
                    Domain & Interests
                </div>
                <div class="sec-list">
                    <div class="sec-list-item">
                        <div class="left">
                            <div class="cname">Full Stack Web Development</div>
                            <div class="cccname">Front-end</div>
                            <span class="cccname">UI-UX Design</span>                            </div>
                        <div class="right">
                            <div class="cname">Research Interests </div>
                            <span class="cccname">Cybersecurity and OS Development</span>
                        </div>                
                     </div>
                </div>
            </div> 
            <div class="section">
                <div class="sec-title">
                    Skills 
                </div>
                <div class="skill">HTML</div>
                <div class="skill-html">90%</div>

                <div class="skill">CSS</div>
                <div class="skill-css">80%</div>

                <div class="skill">JavaScript</div>
                <div class="skill-js">60%</div>
             </div>
        </div>
    </div>

  )
}

export default Profilo