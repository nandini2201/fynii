import React from "react";
import './style.css'
import {Helmet} from "react-helmet";
import Navbar from "../../Navigation/Navbar/Navbar";

export default function Job() {
  return (
    <React.Fragment>
      <Helmet>
      <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/flowbite@1.4.3/dist/flowbite.js"></script>
    <script src="https://unpkg.com/flowbite@1.4.3/dist/datepicker.js"></script>
    <script
      src="https://kit.fontawesome.com/ca07ed316a.js"
      crossorigin="anonymous"
    ></script>
        <script
      src="https://kit.fontawesome.com/08e9a53b4a.js"
      crossorigin="anonymous"
    ></script>
      </Helmet>
            <br></br>
      <br></br>
      <br></br>
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="filter-box">
              <h4>
                <strong>Topic</strong>
              </h4>
              <div class="input-group rounded">
                <input
                  type="search"
                  class="form-control rounded"
                  placeholder="e.g. Software"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <i style={{"position":"absolute", "right":"5%","margin-top":"-35px"}} class="fas fa-search"></i>
              </div>

              <br />

              <h4>
                <strong>Location</strong>
              </h4>
              <div class="input-group rounded">
                <input
                  type="search"
                  class="form-control rounded"
                  placeholder="e.g. Delhi"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <span class="input-group-text border-0" id="search-addon">
                  <i class="fas fa-search"></i>
                </span>
              </div>

              <br />

              <h4>
                <strong>Experience</strong>
              </h4>
              <select class="form-select">
                <option selected>Work experience</option>
                <option value="1">0 Year</option>
                <option value="2">1 Year</option>
                <option value="3">2 Year</option>
              </select>

              <br />

              <h4>
                <strong>Subject</strong>
              </h4>
              <div class="input-group rounded">
                <input
                  type="search"
                  class="form-control rounded"
                  placeholder="e.g. Mathematics"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <span class="input-group-text border-0" id="search-addon">
                  <i class="fas fa-search"></i>
                </span>
              </div>

              <br />

              <h4>
                <strong>Organization</strong>
              </h4>
              <div class="input-group rounded">
                <input
                  type="search"
                  class="form-control rounded"
                  placeholder="e.g. Google"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <span class="input-group-text border-0" id="search-addon">
                  <i class="fas fa-search"></i>
                </span>
              </div>

              <br />

              <h4>
                <strong>Starting Date</strong>
              </h4>
              <input type="date" size="30" class="form-control" />

              <br />

              <div class="container">
                <ul class="ks-cboxtags">
                  <li>
                    <input type="checkbox" id="checkboxOne" />
                    <label for="checkboxOne">Government</label>
                  </li>

                  <li>
                    <input type="checkbox" id="checkboxThree" />
                    <label for="checkboxThree">Work from home</label>
                  </li>
                  <li>
                    <input type="checkbox" id="checkboxTwo" />
                    <label for="checkboxTwo">Non-Government</label>
                  </li>
                  <li>
                    <input type="checkbox" id="checkboxFour" />
                    <label for="checkboxFour">Part time</label>
                  </li>
                </ul>
              </div>

              <br />

              {/* <!-- Range --> */}
              <h4>
                <strong>Salary</strong>
              </h4>
              <div class="slidecontainer">
                <input
                  type="range"
                  min="10000"
                  max="1000000"
                  value="50000"
                  class="slider"
                  id="myRange"
                />
                <p>
                  Salary : <i class="fa-solid fa-indian-rupee-sign"></i>
                  <span id="demo"></span>
                </p>
              </div>

              <br />

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Future jobs
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Woman friendly
                </label>
              </div>

              <button class="btn__purple" id="trigger">
                Set job alert
              </button>

              <div class="modal__wrapper">
                <div class="modal__container">
                  <button class="close">&times;</button>
                  <h2 class="bigg">Job alert</h2>

                  <h4>Topic</h4>
                  <div class="input-group rounded">
                    <input
                      type="search"
                      class="form-control rounded"
                      placeholder="e.g. Software"
                      aria-label="Search"
                      aria-describedby="search-addon"
                    />
                    <span class="input-group-text border-0" id="search-addon">
                      <i class="fas fa-search"></i>
                    </span>
                  </div>

                  <br />

                  <h4>Location</h4>
                  <div class="input-group rounded">
                    <input
                      type="search"
                      class="form-control rounded"
                      placeholder="e.g. Delhi"
                      aria-label="Search"
                      aria-describedby="search-addon"
                    />
                    <span class="input-group-text border-0" id="search-addon">
                      <i class="fas fa-search"></i>
                    </span>
                  </div>

                  <br />

                  <h4>Organization</h4>
                  <div class="input-group rounded">
                    <input
                      type="search"
                      class="form-control rounded"
                      placeholder="e.g. Google"
                      aria-label="Search"
                      aria-describedby="search-addon"
                    />
                    <span class="input-group-text border-0" id="search-addon">
                      <i class="fas fa-search"></i>
                    </span>
                  </div>

                  <br />

                  <div class="container">
                    <ul class="ks-cboxtags">
                      <li>
                        <input type="checkbox" id="checkboxOne" />
                        <label for="checkboxOne">Government</label>
                      </li>

                      <li>
                        <input type="checkbox" id="checkboxThree" />
                        <label for="checkboxThree">Work from home</label>
                      </li>
                      <li>
                        <input type="checkbox" id="checkboxTwo" />
                        <label for="checkboxTwo">Non-Government</label>
                      </li>
                      <li>
                        <input type="checkbox" id="checkboxFour" />
                        <label for="checkboxFour">Part time</label>
                      </li>
                    </ul>
                  </div>

                  <br />

                  <h4>How would you like to get informed?</h4>
                  <div class="container">
                    <ul class="ks-cboxtags">
                      <li>
                        <input type="checkbox" id="checkboxOne" />
                        <label for="checkboxOne">Message</label>
                      </li>

                      <li>
                        <input type="checkbox" id="checkboxThree" />
                        <label for="checkboxThree">e-mail</label>
                      </li>
                    </ul>
                  </div>

                  <div class="action">
                    <button class="btn__purple">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Job Details --> */}

          <div class="col-lg-8">
            <div class="box">
              {/* <img class="logo" src={require("./r.png")} alt="" /> */}
              <h2 class="bigg">Engineering Manager for Banking Team</h2>
              <p class="big">Razorpay</p>

              <hr />

              <div class="row">
                <div class="col-lg-6">
                  <p>
                    <i class="fa-solid fa-location-dot"></i>Bangalore
                  </p>
                  <p>
                    <i class="fa-solid fa-briefcase"></i> Salary/ CTC
                  </p>

                  <div class="tooltip">
                    <p>
                      <i class="fa-solid fa-building"></i> About
                    </p>
                    <span class="tooltiptext">
                      Note that the position of the tooltip text isn't very
                      good. Go back to the tutorial and continue reading on how
                      to position the tooltip in a desirable way.
                    </span>
                  </div>

                  {/* <!-- <div class="content">
                  <p><i class="fa-solid fa-building"></i> About</p>
                  <div class="hidden">
                    <h2>About</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ipsa deleniti soluta officia quae numquam. Accusamus
                      tempore culpa quas fuga quasi reprehenderit? Maiores
                      voluptatibus sit quas quod soluta ad blanditiis sed?
                    </p>
                  </div>
                </div> --> */}
                </div>

                <div class="col-lg-6">
                  <p>
                    <i class="fa-solid fa-calendar-check"></i> Last Date to
                    Apply
                  </p>
                  <p>
                    <i class="fa-solid fa-user"></i> Work Type
                  </p>
                </div>
              </div>

              {/* <!-- <p><i class="fa-solid fa-building"></i> About Company</p> --> */}

              <div class="grid-container">
                <div class="btnn">
                  <a href="https://razorpay.com/jobs/?src%3Dcareers%26p%3DeyJwYWdlVHlwZSI6ImpkIiwiY3ZTb3VyY2UiOiJjYXJlZXJzIiwicmVxSWQiOjE3NjMsInJlcXVlc3RlciI6eyJpZCI6IiIsImNvZGUiOiIiLCJuYW1lIjoiIn0sInBhZ2UiOiJjYXJlZXJzIiwiYnVmaWx0ZXIiOi0xLCJjdXN0b21GaWVsZHMiOnt9fQ==">
                    <i class="fa-regular fa-hand"></i> Apply
                  </a>
                </div>
                <div class="btnn">
                  <i class="fa-regular fa-bookmark"></i> Save
                </div>

                {/* <!-- <div class="btnn">
                <i class="fa-solid fa-share-nodes"></i> Share
              </div> --> */}

                <button class="view-modal">
                  <i class="fa-solid fa-share-nodes"></i> Share
                </button>
                <div class="popup">
                  {/* <!-- <span>Share</span> -->
                  <!-- <div class="close"><i class="uil uil-times"></i></div> -->
                <!-- </header> --> */}
                  <div class="content">
                    {/* <!-- <p>Share this link via</p> --> */}
                    <ul class="icons">
                      <a href="/">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                      <a href="/">
                        <i class="fab fa-whatsapp"></i>
                      </a>
                      <a href="/">
                        <i class="fab fa-telegram-plane"></i>
                      </a>
                    </ul>
                    <p>Or copy link</p>
                    <div class="field">
                      <i class="url-icon uil uil-link"></i>
                      <input
                        type="text"
                        readonly
                        value="example.com/share-link"
                      />
                      <button>Copy</button>
                    </div>
                  </div>
                </div>

                {/* <script>
                const viewBtn = document.querySelector(".view-modal"),
                  popup = document.querySelector(".popup"),
                  close = popup.querySelector(".close"),
                  field = popup.querySelector(".field"),
                  input = field.querySelector("input"),
                  copy = field.querySelector("button");

                viewBtn.onclick = () => {
                  popup.classList.toggle("show");
                };
                close.onclick = () => {
                  viewBtn.click();
                  this.addEventListener("click")
                };

                copy.onclick = () => {
                  input.select(); //select input value
                  if (document.execCommand("copy")) {
                    //if the selected text copy
                    field.classList.add("active");
                    copy.innerText = "Copied";
                    setTimeout(() => {
                      window.getSelection().removeAllRanges(); //remove selection from document
                      field.classList.remove("active");
                      copy.innerText = "Copy";
                    }, 3000);
                  }
                };
              </script> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      <script src="script.js" async defer></script>
      <script src="slide.js"></script>
      <script src="app.js"></script>
      <Navbar/>
    </React.Fragment>
  );
}
