import "./App.css";
import ScrollIntoView from "react-scroll-into-view";

function App() {
  return (
    <div class="main">
      <nav>
        <div class="menu">
          <ul>
            <li>
              <ScrollIntoView selector={"#profile"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Profile
                </button>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector={"#experience"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Experiences
                </button>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector={"#ability"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Abilities
                </button>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector={"#project"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Projects
                </button>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector={"#contact"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Contact
                </button>
              </ScrollIntoView>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <div className="navbar">
          <div className="profile">
            <h1>PROFILE</h1>
            <span>I'm a student</span>
          </div>
        </div>
        <div className="container">
          <div className="Menu">
            <div className="firstbox">
              <div className="aboutme">
                <h2>About me</h2>
                <span>I am a lovely cat. I have passion in IT and I want to become a professional developer.</span>
              </div>
              <img src="https://i.pinimg.com/736x/99/07/a1/9907a1a7bcfb2f7372f536e072aea159.jpg" alt="" />
              <div className="details">
                <h2>Details</h2>
                <span className="title">Name:</span>
                <span> Vương thị yến nhi</span>
                <span className="title">Age:</span>
                <span> 21 years</span>
                <span className="title">Location:</span>
                <span> UIT, VNU-HCM</span>
              </div>
            </div>
            <div className="secondbox">
              <div className="title">
                <h1>Experience</h1>
              </div>
              <div className="content">
                <hr />
                <h2>Educations</h2>
                <div className="box">
                  <div className="ct">
                    <h3>UIT, VNU-HCM</h3>
                    <p>Apr 2020 - June 2025</p>
                  </div>
                  <div className="text">
                    <h4>Information System</h4>
                    <p>My primary focus during my education was on a foundational System Design course. However, I also gained insights into various other fields such as Web Development and Data Analysis. During my college years, I honed my skills in Object-Oriented Programming (OOP) and delved into the realm of data science. Currently, I am expanding my knowledge in web development..</p>
                  </div>
                </div>
                <hr />
                <h2>Working Experiences</h2>
                <div className="box">
                  <div className="ct">
                    <h3>Facebook | Fresher Business Analyst</h3>
                    <p>Sep 2021 - current</p>
                  </div>
                  <div className="text">
                    <h4>Part - Fresher UX UI Design</h4>
                    <p>I am working as a junior developer on the development of a dating feature for a Facebook page. This dating feature functions similarly to apps like Tinder.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="thirdbox">
              <section className="content">
                <h2>Skills</h2>
                <hr className="light" />

                <ul>
                  <div className="po">
                    <p>Html, Css</p>
                    <div className="cool">
                      <div style={{ width: '80%' }} className="inner" />
                    </div>
                  </div>
                  <div className="po">
                    <p>SQL</p>
                    <div className="cool">
                      <div style={{ width: '75%' }} className="inner"> </div>
                    </div>
                  </div>
                  <div className="po">
                    <p>JQuery</p>
                    <div className="cool">
                      <div style={{ width: '71%' }} className="inner"> </div>
                    </div>
                  </div>
                  <div className="po">
                    <p>JavaScript</p>
                    <div className="cool">
                      <div style={{ width: '40%' }} className="inner"> </div>
                    </div>
                  </div>
                </ul>
                <ul>
                  <div className="po">
                    <p>Object Oriented Programming</p>
                    <div className="cool">
                      <div style={{ width: '50%' }} className="inner" />
                    </div>
                  </div>
                  <div className="po">
                    <p>SEO</p>
                    <div className="cool">
                      <div style={{ width: '35%' }} className="inner"> </div>
                    </div>
                  </div>
                  <div className="po">
                    <p>React</p>
                    <div className="cool">
                      <div style={{ width: '71%' }} className="inner"> </div>
                    </div>
                  </div>
                </ul>

                <div className="profile">
                  <span>See my project on github</span>
                </div>
                <br />
                <button onclick="document.location='https://github.com/yennhi442002'" className="button">See</button>
              </section>
              <br />
            </div>
          </div>
        </div></div>

    </div>
  );
}

export default App;