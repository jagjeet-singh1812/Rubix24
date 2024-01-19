import { useState, useEffect } from "react";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const handleLinkClickdirect = () => {
    const mobileMenuCheckbox = document.getElementById("menu-btn");
    mobileMenuCheckbox.checked = false;
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClickcheck = (className) => {
    handleLinkClickdirect();
    navigate(`/Services#${className}`);
  };
  return (
    <>
      <nav className={`${scrolled ? "sticky-header nav" : "nav"}`}>
        <div className="wrapper">
          <div className="logo">
            <Link to="/">MentorConnect</Link>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn">
              <i className="fas fa-times navi_close"></i>&nbsp;
            </label>
            <li>
              <Link to="/algo_mentor" className="desktop-item">
                Find a Mentor
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Find a Mentor
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <header>Tech Mentor</header>
                    <ul className="mega-links">
                      <li>
                        <a
                          href="Services#image_annotation"
                          onClick={() =>
                            handleLinkClickcheck("image_annotation")
                          }
                        >
                          <i className="fa-solid fa-image"></i>&nbsp;Javascript
                          Mentors
                        </a>
                      </li>
                      <li>
                        <a
                          href="Services#Text_labelling"
                          onClick={() => handleLinkClickcheck("Text_labelling")}
                        >
                          <i className="fa-solid fa-pen"></i>&nbsp;Data Science
                          Mentors
                        </a>
                      </li>
                      <li>
                        <a
                          href="Services#Video_annotation"
                          onClick={() =>
                            handleLinkClickcheck("Video_annotation")
                          }
                        >
                          <i className="fa-solid fa-video"></i>&nbsp;Web
                          Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="Services#audio_annotation"
                          onClick={() =>
                            handleLinkClickcheck("audio_annotation")
                          }
                        >
                          <i className="fa-solid fa-music"></i>&nbsp;AI Mentors
                        </a>
                      </li>
                      <li>
                        <a
                          href="Services#sensor_annotation"
                          onClick={() =>
                            handleLinkClickcheck("sensor_annotation")
                          }
                        >
                          <i className="fa-sharp fa-solid fa-cloud-arrow-up"></i>
                          &nbsp; Blockchain Mentors
                        </a>
                      </li>
                      <li>
                        <a
                          href="Services#first"
                          onClick={() => handleLinkClickcheck("first")}
                        >
                          <i className="fa-solid fa-pen-ruler"></i>&nbsp; Cyber
                          Security
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Career Mentors</header>
                    <ul className="mega-links">
                      <li>
                        <a
                          href="Services#image-data"
                          onClick={() => handleLinkClickcheck("image-data")}
                        >
                          <i className="fa-regular fa-images"></i>
                          &nbsp;Leadership Mentors
                        </a>
                      </li>
                      <li>
                        <a
                          href="Services#video-data"
                          onClick={() => handleLinkClickcheck("video-data")}
                        >
                          <i className="fa-solid fa-file-video"></i>&nbsp;Career
                          Growth
                        </a>
                      </li>
                      <li>
                        <a
                          href="Services#audio-data"
                          onClick={() => handleLinkClickcheck("audio-data")}
                        >
                          <i className="fa-solid fa-file-audio"></i>&nbsp;
                          Interview Coaches
                        </a>
                      </li>
                      <li>
                        <a
                          href="Services#text-data"
                          onClick={() => handleLinkClickcheck("text-data")}
                        >
                          <i className="fa-solid fa-square-pen"></i>&nbsp;
                          Resume Coaches
                        </a>
                      </li>
                      <li>
                        <a
                          href="Services#custom-source-data"
                          onClick={() =>
                            handleLinkClickcheck("custom-source-data")
                          }
                        >
                          <i className="fa-solid fa-user-pen"></i>&nbsp;Career
                          Decision
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Academics Mentors</header>
                    <ul className="mega-links">
                      <li>
                        <a
                          href="Services#Video_Transcription"
                          onClick={() =>
                            handleLinkClickcheck("Video_Transcription")
                          }
                        >
                          <i className="fa-solid fa-video"></i>&nbsp; Subject
                          Matter Experts
                        </a>
                      </li>
                      <li>
                        <a
                          href="Services#Audio_Transcription"
                          onClick={() =>
                            handleLinkClickcheck("Audio_Transcription")
                          }
                        >
                          <i className="fa-solid fa-music"></i>&nbsp;Career
                          Mentors
                        </a>
                      </li>
                      <li>
                        <a
                          href="Services#Multilingual_Transcription"
                          onClick={() =>
                            handleLinkClickcheck("Multilingual_Transcription")
                          }
                        >
                          <i className="fa-solid fa-language"></i>&nbsp;Research
                          Mentors
                        </a>
                      </li>
                      <li>
                        <a
                          href="Services#Time-Stamped_Transcription"
                          onClick={() =>
                            handleLinkClickcheck("Time-Stamped_Transcription")
                          }
                        >
                          <i className="fa-solid fa-clock"></i>&nbsp;Study
                          Skills Mentors
                        </a>
                      </li>
                      <li>
                        <a
                          href="Services#captions"
                          onClick={() => handleLinkClickcheck("captions")}
                        >
                          <i className="fa-solid fa-closed-captioning"></i>
                          &nbsp;Language Learning Mentors
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/company" className="desktop-item">
                Company
              </Link>
              <input type="checkbox" id="showDrop" />
              <label htmlFor="showDrop" className="mobile-item">
                Company
              </label>
              <ul className="drop-menu">
                <li>
                  <Link to="/company" onClick={() => handleLinkClickdirect()}>
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/ios/50/about.png"
                      alt="about"
                    />{" "}
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="/join_us" onClick={() => handleLinkClickdirect()}>
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/ios/50/permanent-job.png"
                      alt="permanent-job"
                    />{" "}
                    Join us
                  </Link>
                </li>
                <li>
                  <Link to="/workflow" onClick={handleLinkClickdirect}>
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/ios/50/workflow.png"
                      alt="workflow"
                    />{" "}
                    Workflow
                  </Link>
                </li>
                <li>
                  <Link to="/security" onClick={handleLinkClickdirect}>
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/ios/50/cyber-security.png"
                      alt="cyber-security"
                    />{" "}
                    Security
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/contactus" onClick={() => handleLinkClickdirect()}>
                Events/Workshops
              </Link>
            </li>
          </ul>
          <ul>
            {/* <li>
              <Link to="/freesample" className="desktop-item">
                <button className="custom-button pulse">Free Sample</button>
              </Link>
            </li> */}
            <li>
              {/* <button
                type="button"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button> */}
              {/* <button
                type="button"
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-primary rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 bg-blue-700 hover:bg-blue-800 text-white "
            
              >
                Signup
              </button> */}
              {!localStorage.getItem("key") ? (
              <button
                type="button"
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-primary rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 bg-blue-700 hover:bg-blue-800 text-white "
                onClick={()=>navigate('/Login')}
              >
                Login
              </button>
              ):(
                <button
                type="button"
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-primary rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 bg-blue-700 hover:bg-blue-800 text-white "
                onClick={()=>{
                  localStorage.removeItem("key")
                  navigate('/Login')
                }}
              >
                Logout
              </button>

              )}
            </li>
          </ul>
          <label htmlFor="menu-btn" className="btn menu-btn">
            {/* <i className="fas fa-bars"></i>&nbsp;  */}
            <i className="fa-solid fa-bars navi_color"></i>&nbsp;
          </label>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
