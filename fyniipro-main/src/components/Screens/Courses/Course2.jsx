import React from "react";
import '../../styles/course.css'

export default function Course() {
  return (
    <React.Fragment>
      <div>
        <ul className="nav navbar-nav" id="dr">
          <li className="dropdown">
            <a href="/" className="dropdown-toggle" data-toggle="dropdown">
              Subjects
              <span className="glyphicon pull-right">
                <i className="fa-solid fa-book-open-reader" />
              </span>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="/">
                  Computer Science
                  <span className="glyphicon pull-right">
                    <i className="fa-solid fa-computer" />
                  </span>
                </a>
              </li>
              <li className="divider" />
              <li>
                <a href="/">
                  Electronics
                  <span className="glyphicon pull-right">
                    <i className="fa-solid fa-bolt" />
                  </span>
                </a>
              </li>
              <li className="divider" />
              <li>
                <a href="/">
                  Engineering
                  <span className="pull-right">
                    {" "}
                    <i className="fa-solid fa-gears" />{" "}
                  </span>
                </a>
              </li>
              <li className="divider" />
              <li>
                <a href="/">
                  Science
                  <span className="glyphicon pull-right">
                    <i className="fa-solid fa-atom" />
                  </span>
                </a>
              </li>
              <li className="divider" />
              <li>
                <a href="/">
                  Business
                  <span className="glyphicon pull-right">
                    <i className="fa-solid fa-business-time" />
                  </span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <section id="title">
          {/* colored-section */}
          <h1 className="big-heading" id="blink" style={{ fontSize: "4rem" }}>
            Short term skill courses for your career growth!
          </h1>
        </section>
        <section className="colored-section" id="testimonials">
          <div className="slider">
            <input type="radio" name="toggle" id="btn-1" defaultChecked />
            <input type="radio" name="toggle" id="btn-2" />
            <input type="radio" name="toggle" id="btn-3" />
            <input type="radio" name="toggle" id="btn-4" />
            <input type="radio" name="toggle" id="btn-5" />
            <div className="slider-controls">
              <label htmlFor="btn-1" />
              <label htmlFor="btn-2" />
              <label htmlFor="btn-3" />
              <label htmlFor="btn-4" />
              <label htmlFor="btn-5" />
            </div>
            {/* In real world, Only skill matters!
      Build your career by building skillsets.
      Every course is carefully selected.
      Pay in EMIs.
      Hassle free, Easy to find & Navigate Courses. */}
            <ul className="slides">
              <li className="slide">
                <div className="slide-content">
                  <h2 className="slide-title s-t-1">
                    In real world, Only skill matters!
                  </h2>
                </div>
                <p className="slide-image">
                  <img
                    src="https://images.unsplash.com/photo-1616337865743-bd29011bc36d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fHNraWxsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400"
                    alt="stuff"
                    width={320}
                    height={240}
                  />
                </p>
              </li>
              <li className="slide" style={{ backgroundColor: "/FEFBE7" }}>
                <div className="slide-content">
                  <h2 className="slide-title s-t-2">
                    Build your career by building skillsets.
                  </h2>
                </div>
                <p className="slide-image">
                  <img
                    src="https://images.unsplash.com/photo-1513258496099-48168024aec0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNraWxsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400"
                    alt="stuff"
                    width={320}
                    height={240}
                  />
                </p>
              </li>
              <li className="slide" style={{ backgroundColor: "/DAE5D0" }}>
                <div className="slide-content">
                  <h2 className="slide-title s-t-3">
                    Every course is carefully selected.
                  </h2>
                </div>
                <p className="slide-image">
                  <img
                    src="https://images.unsplash.com/photo-1503428593586-e225b39bddfe?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y291cnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400"
                    alt="stuff"
                    width={320}
                    height={240}
                  />
                </p>
              </li>
              <li className="slide" style={{ backgroundColor: "/A0BCC2" }}>
                <div className="slide-content">
                  <h2 className="slide-title s-t-4">Pay in EMIs.</h2>
                </div>
                <p className="slide-image">
                  <img
                    src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29pbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400"
                    alt="stuff"
                    width={320}
                    height={240}
                  />
                </p>
              </li>
              <li className="slide" style={{ backgroundColor: "/F9EBC8" }}>
                <div className="slide-content">
                  <h2 className="slide-title s-t-5">
                    Hassle free, Easy to find &amp; Navigate Courses.
                  </h2>
                </div>
                <p className="slide-image">
                  <img
                    src="https://images.unsplash.com/photo-1615752865424-62638daceeae?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZWFzeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400"
                    alt="stuff"
                    width={320}
                    height={240}
                  />
                </p>
              </li>
            </ul>
          </div>
        </section>
        <div className="container-course">
          <div className="row">
            <div className="col-lg-4">
              <div className="course-box">
                <a href="new-page.html" id="link">
                  <img
                    src="
              https://images.unsplash.com/photo-1599634874901-e919c4fe1400?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aWl0JTIwYm9tYmF5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400
        "
                    height="150px"
                    alt="IITR"
                  />
                  <hr />
                  <div className="det">
                    {/* <img className="logo" src="../../image/iit.png" alt="" /> */}
                    <h3 className="course-title">
                      Learn Web-Development from IIT Roorkee
                    </h3>
                    <ul>
                      <li>
                        <i className="fa-solid fa-user-graduate" />
                        Begineer
                      </li>
                      <li>
                        <i className="fa-solid fa-clock" />3 months
                      </li>
                    </ul>
                    <h2>
                      <i className="fa-solid fa-indian-rupee-sign" />
                      500
                    </h2>
                    <button className="btn">Enroll</button>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="course-box">
                <a href="new-page.html" id="link">
                  <img
                    src="
          https://images.unsplash.com/photo-1562705121-e624542c7b9b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aWJtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400
        "
                    height="150px"
                    alt="IITR"
                  />
                  <hr />
                  <div className="det">
                    {/* <img className="logo" src={img} alt="" /> */}
                    <h3 className="course-title">
                      Learn Quantum Computing from IBM
                    </h3>
                    <ul>
                      <li>
                        <i className="fa-solid fa-user-graduate" />
                        Begineer
                      </li>
                      <li>
                        <i className="fa-solid fa-clock" />3 months
                      </li>
                    </ul>
                    <h2>
                      <i className="fa-solid fa-indian-rupee-sign" />
                      500
                    </h2>
                    <button className="btn">Enroll</button>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="course-box">
                <a href="new-page.html" id="link">
                  <img
                    src="
          https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z29vZ2xlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400
        "
                    height="150px"
                    alt="IITR"
                  />
                  <hr />
                  <div className="det">
                    <img className="logo" src="img/google.jfif" alt="" />
                    <h3 className="course-title">
                      Learn Data Science from Google
                    </h3>
                    <ul>
                      <li>
                        <i className="fa-solid fa-user-graduate" />
                        Begineer
                      </li>
                      <li>
                        <i className="fa-solid fa-clock" />3 months
                      </li>
                    </ul>
                    <h2>
                      <i className="fa-solid fa-indian-rupee-sign" />
                      500
                    </h2>
                    <button className="btn">Enroll</button>
                  </div>
                </a>
              </div>
            </div>
            <hr />
            <br />
            {/*footer starts from here*/}
            <footer className="footer">
              <div className="container bottom_border">
                <div className="row">
                  <div className="col-sm-4 col-md col-sm-4 col-12 col">
                    <h5 className="headin5_amrc col_white_amrc pt2">
                      Contact Us
                    </h5>
                    {/*headin5_amrc*/}
                    <p>
                      <strong>
                        House No. 481, Second Floor,Shiv Market BLK-WP, Village
                        Wazirpur, Ashok Vihar, Delhi-110052
                      </strong>
                    </p>
                    <p />
                    <p>
                      <i className="fa fa-phone" /> +91-96506 93384
                    </p>
                    <p>
                      <i className="fa fa-phone" /> +91-98914 83954
                    </p>
                    {/* <p><i class="fa fa fa-envelope"></i> sushant@fynii.com</p> */}
                  </div>
                  <div className="col-sm-4 col-md col-6 col">
                    <h5 className="headin5_amrc col_white_amrc pt2">
                      About Us
                    </h5>
                    {/*headin5_amrc*/}
                    <ul className="footer_ul_amrc">
                      {/* <li><a href="aboutus.html">About Us</a></li> */}
                      <li>
                        <a href="career.html">Career</a>
                      </li>
                      <li>
                        <a href="help.html">Help-Center</a>
                      </li>
                      <li>
                        <a href="privacy_policy.html">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="tnc.html">Terms and Conditions</a>
                      </li>
                    </ul>
                    {/*footer_ul_amrc ends here*/}
                  </div>
                  <div className="col-sm-4 col-md col-12 col">
                    <h5 className="headin5_amrc col_white_amrc pt2" id="fol">
                      Follow Us
                    </h5>
                    {/*headin5_amrc ends here*/}
                    <div className="container" id="cont">
                      <div className="row">
                        <ul className="social-icons-ql">
                          <li>
                            <a href="https://www.facebook.com/Fynii-Infotech-Private-Limited-101607735894393/">
                              <i className="fab fa-facebook fa-2x" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/company/fynii/">
                              <i className="fab fa-linkedin fa-2x" />
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <i className="fab fa-twitter fa-2x" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <ul className="foote_bottom_ul_amrc">
                  {/* <li><a href="aboutus.html">About Us</a></li>
      <li><a href="contactus.html">Help-Center</a></li> */}
                </ul>
                {/*foote_bottom_ul_amrc ends here*/}
                <p className="text-center">
                  Copyright @2022 | <a href="/"> Fynii</a>
                </p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
