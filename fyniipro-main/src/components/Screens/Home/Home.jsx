import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import "./Home.css";
import Cards from "./Cards/Cards";
import Footer from "../Footer/Footer";
import Navbar from "../../Navigation/Navbar/Navbar";

export default function Home() {
  // var slider2 = document.getElementById("slider2");
  // var activeh = document.getElementById("activeh");
  // var lineh1 = document.getElementById("lineh1");
  // var lineh2 = document.getElementById("lineh2");
  // var lineh3 = document.getElementById("lineh3");
  // var lineh4 = document.getElementById("lineh4");
  // var lineh5 = document.getElementById("lineh5");

  // lineh1.onclick = function(){
  //   slider2.style.transform = 'translateX(-20%)';
  // }
  // lineh2.onclick = function(){
  //   slider2.style.transform = 'translateX(-20%)';
  // }
  // lineh3.onclick = function(){
  //   slider2.style.transform = 'translateX(-20%)';
  // }
  // lineh4.onclick = function(){
  //   slider2.style.transform = 'translateX(-20%)';
  // }
  // lineh5.onclick = function(){
  //   slider2.style.transform = 'translateX(-20%)';
  // }
  const [translate, settranslate] = useState("translate(0%)");
  const [translate1, settranslate1] = useState("translate(0%)");
  const [translate2, settranslate2] = useState("translate(-16.6%)");
  const [translate3, settranslate3] = useState("translate(-33.2%)");
  const [translate4, settranslate4] = useState("translate(-49.8%)");
  const [translate5, settranslate5] = useState("translate(-66.4%)");
  const [translate6, settranslate6] = useState("translate(-83.06%)");
  const [topic, settopic] = useState("All");

  localStorage.setItem("activeNav", "Home");

  useEffect(() => {
    const interval = setInterval(() => {
      settranslate(translate1);
      settranslate1(translate2);
      settranslate2(translate3);
      settranslate3(translate4);
      settranslate4(translate5);
      settranslate5(translate6);
      settranslate6(translate);
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div>
      <div
        className="Container-card"
        style={{
          marginTop: "60px",
          height: "100%",
          width: "100%",
          backgroundColor: "#96DEB2",
          display: "flex",
          flexDirection: "row",
          "flex-wrap": "nowrap",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <div className="Card-Right" style={{ marginTop: "15%" }}>
          <div id="slider2" style={{ transform: translate }}>
            <div className="msg-col02">
              <h2 className="ifweeof">How to choose right career for you?</h2>
              <a href="/">Learn More</a>
            </div>
            <div className="msg-col02">
              <h2 className="ifweeof">Which profession to opt for?</h2>
              <a href="/">Learn More</a>
            </div>
            <div className="msg-col02">
              <h2 className="ifweeof">Which one gives decent salary?</h2>
              <a href="/">Learn More</a>
            </div>
            <div className="msg-col02">
              <h2 className="ifweeof">Doctor, Engineer, teacher ???</h2>
              <a href="/">Learn More</a>
            </div>
            <div className="msg-col02">
              <h2 className="ifweeof">Higher education or Job?</h2>
              <a href="/">Learn More</a>
            </div>
            <div className="msg-col02">
              <h2 className="ifweeof">Confused????</h2>
              <p
                style={{
                  color: "white",
                  fontFamily: "Josefin Slab",
                  fontWeight: "700",
                  fontSize: "2rem",
                }}
              >
                Find all your answer here!
              </p>
              <a href="/">Learn More</a>
            </div>
          </div>
          {/* <div className="controller2">
          <div id="lineh1"></div>
          <div  id="lineh2"></div>
          <div  id="lineh3"></div>
          <div  id="lineh4"></div>
          <div  id="lineh5"></div>
          <div id="activeh"></div>
        </div>  */}
        </div>

        <div className="Card-Left">
          <img
            style={{ height: "50%", width: "50%", "margin-left": "45%" }}
            src={require("./logo2.jpg")}
            alt="img"
          />
        </div>
      </div>

      <div className="Article-container">
        <div class="Scrollmenu">
          {/* <ul onClick={settopic("All")} >All</ul>
          <ul onClick={settopic("Favourites")}>Favourites</ul>
          <ul onClick={settopic("Software Development")}>Software Development</ul>
          <ul onClick={settopic("Mathematics")}>Mathematics</ul> */}
          <ul onClick={() => settopic("All")}>Engineering</ul>
          <ul>Civil Services</ul>
          <ul onClick={() => settopic("Software Development")}>
            Medical Science
          </ul>
          <ul onClick={() => settopic("Mathematics")}>Teacher</ul>
          <ul>Scientist</ul>
          <ul onClick={() => settopic("Management")}>Quantum Computing</ul>
          <ul>Artificial Intelligence</ul>
          <ul>Biotechnology</ul>
          <ul>Machine Learning</ul>
          <ul>Natural Science</ul>
          <ul>Developer</ul>
        </div>
        <Cards topic={topic} />
      </div>

      <div className=""></div>
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "#333",
          display: "flex",
          flexDirection: "row",
          "flex-wrap": "nowrap",
          alignItems: "center",
          alignContent: "center",
        }}
        className="WriteBlog"
      >
        <div className="Card-Left">
          <img
            style={{ height: "10%", width: "20%", "margin-left": "60%" }}
            src={require("./writeBlogf.png")}
            alt="img"
          />
        </div>
        <div className="Card-Right2">
          <div
            style={{ position: "absolute", "margin-top": "30%" }}
            className="msg-col02"
          >
            <h3
              style={{ color: "#fff", fontSize: "3rem", width: "90%" }}
              className="ifweof"
            >
              Want to Create your Own Blog? Start Now and Publish at Fynii
            </h3>
            <a
              style={{ backgroundColor: "#fff", color: "#000" }}
              href="/texteditor"
            >
              Start Now
            </a>
          </div>
        </div>
      </div>
      <Navbar />
      <Footer />
    </div>
  );
}

// return(
//   <>
//   <div className='hero-container'>
//   {/* <video src="../../videos/video-1.mp4" autoPlay loop muted />
//   <h1>Looking To Read?</h1>
//   <p>Here Some finest content to read!!</p>
//   <div className='hero-btns'>
//       <Button
//         className='btns'
//         buttonStyle='btn--outline'
//         buttonSize='btn--large'
//       >
//         GET STARTED
//       </Button>
//       <Button
//         className='btns'
//         buttonStyle='btn--primary'
//         buttonSize='btn--large'
//         onClick={console.log('hey')}
//       >
//         WATCH TRAILER <i className='far fa-play-circle' />
//       </Button>
//     </div>
// </div>
// <Cards/>
// </>
// )
//   return (

//     <React.Fragment>

//     {/* <section class="intro">
//       <div class="container">
//         <input type="radio" name="slider" id="item-1" checked />
//         <input type="radio" name="slider" id="item-2" />
//         <input type="radio" name="slider" id="item-3" />
//         <div class="cards">
//           <label class="card" for="item-1" id="song-1">
//             <img
//               src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80"
//               alt="song"
//             />
//           </label>
//           <label class="card" for="item-2" id="song-2">
//             <img
//               src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
//               alt="song"
//             />
//           </label>
//           <label class="card" for="item-3" id="song-3">
//             <img
//               src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
//               alt="song"
//             />
//           </label>
//         </div>
//       </div>
//     </section>

//     {/* <section class="filter">
//       <ul class="main-navigation">
//         <li><a href="/">Software Development</a></li>
//         <li><a href="/">Mathematics</a></li>
//         <li><a href="/">Management</a></li>
//         <li><a href="/">Business</a></li>
//         <li><a href="/">Startup</a></li>
//         <li>
//           <a href="/">Web Development</a>
//           <ul>
//             <li><a href="/">HTML 5</a></li>
//             <li>
//               <a href="/">CSS 3</a>
//               <ul>
//                 <li><a href="/">Resets</a></li>
//                 <li><a href="/">Grids</a></li>
//                 <li><a href="/">Frameworks</a></li>
//               </ul>
//             </li>
//             <li>
//               <a href="/">JavaScript ES-6</a>
//               <ul>
//                 <li><a href="/">Ajax</a></li>
//                 <li><a href="/">jQuery</a></li>
//               </ul>
//             </li>
//           </ul>
//         </li>
//         <li>
//           <a href="/">WordPress</a>
//           <ul>
//             <li><a href="/">Themes</a></li>
//             <li><a href="/">Plugins</a></li>
//             <li>
//               <a href="/">Custom Post Types</a>
//               <ul>
//                 <li><a href="/">Portfolios</a></li>
//                 <li><a href="/">Testimonials</a></li>
//               </ul>
//             </li>
//             <li><a href="/">Electrical</a></li>
//           </ul>
//         </li>
//         <li><a href="/">Data Science</a></li>
//       </ul>
//     </section>

//     <div style={{"margin":"100%","backgroundColor":"#000"}}></div>
//     <>
//     <div className='hero-container'>
//     <video src="../../videos/video-1.mp4" autoPlay loop muted />
//     <h1>Looking To Read?</h1>
//     <p>Here Some finest content to read!!</p>
//     <div className='hero-btns'>
//         <Button
//           className='btns'
//           buttonStyle='btn--outline'
//           buttonSize='btn--large'
//         >
//           GET STARTED
//         </Button>
//         <Button
//           className='btns'
//           buttonStyle='btn--primary'
//           buttonSize='btn--large'
//           onClick={console.log('hey')}
//         >
//           WATCH TRAILER <i className='far fa-play-circle' />
//         </Button>
//       </div>
//   </div>
//   <Cards/>
//   </>

//     <section class="qunt">
//       <div class="row qunt-div">
//         <div class="col-lg-8 rect-box">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCGXS1rHMMw8H_PNNfPVJ1dUHhnHH6IAty7A&usqp=CAU"
//             width="100%"
//             height="60%"
//             alt=""
//           />
//           <hr />
//           <h3 style={{color: "black"}}>
//             What is Quantum Computing? Should you pursue career in it?
//           </h3>
//         </div>

//         <div class="col-lg-3 sq-box">
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOs1SePFPjXc8lFfYkNicvuLWX1DsYMN5ZHw&usqp=CAU"
//             alt=""
//             width="100%"
//             height="60%"
//           />
//           <hr />

//           <h5 style={{color: "black"}}>
//             Top organization to work in the field of quantum computing
//           </h5>
//         </div>
//       </div>
//     </section>

//     <section class="trd">

//     </section>

//     <section class="detail">
//       <div class="row detail-div">
//         <div class="col-lg-3">
//           <img
//             src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVjaG5vbG9neXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=400&q=60"
//             alt=""
//             width="100%"
//           />
//           <hr />
//           <p>some text</p>
//         </div>

//         <div class="col-lg-3">
//           <img
//             src="https://images.unsplash.com/photo-1573247318242-1da549d9924f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWR1Y2F0aW9ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=400&q=60"
//             alt=""
//             width="100%"
//           />
//           <hr />
//           <p>some text</p>
//         </div>

//         <div class="col-lg-3">
//           <img
//             src="https://images.unsplash.com/photo-1583990994634-8f6db946236a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZWR1Y2F0aW9ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=400&q=60"
//             alt=""
//             width="100%"
//           />
//           <hr />
//           <p>some text</p>
//         </div>

//         <div class="col-lg-3">
//           <img
//             src="https://images.unsplash.com/photo-1471970471555-19d4b113e9ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZWR1Y2F0aW9ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=400&q=60"
//             alt=""
//             width="100%"
//           />
//           <hr />
//           <p>some text</p>
//         </div>
//       </div>
//     </section>
//     <hr />

//     <hr class="bold-line" />

//     <section class="last-section">
//       <div class="contain">
//         <div class="title -box">
//           <h1 style={{color: "yellow"}}>Software Development</h1>
//         </div>

//         <hr class="thin-line" />

//         <div class="roww scrolbar">
//           <div class="row__inner">
//             <a href="/">
//               <div class="tile">
//                 <div class="tile__media">
//                   <img
//                     class="tile__img"
//                     src="https://images.unsplash.com/photo-1615309662472-4ca77a77a189?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3VkJTIwY29tcHV0aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
//                     alt=""
//                   />
//                 </div>
//                 <div class="tile__details">
//                   <div class="tile__title">Cloud computing</div>
//                 </div>
//                 <hr />
//                 <div>
//                   <p>Cloud computing</p>
//                 </div>
//               </div>
//             </a>

//             <a href="/">
//               <div class="tile">
//                 <a
//                   href="https://www.geeksforgeeks.org/articles-on-computer-science-subjects-gq/"
//                 >
//                   <div class="tile__media">
//                     <img
//                       class="tile__img"
//                       src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
//                       alt=""
//                     />
//                   </div>
//                   <div class="tile__details">
//                     <div class="tile__title">Web development</div>
//                   </div>
//                   <hr />
//                   <div>
//                     <p>Web development</p>
//                   </div>
//                 </a>
//               </div>
//             </a>

//             <a href="/">
//               <div class="tile">
//                 <div class="tile__media">
//                   <img
//                     class="tile__img"
//                     src="https://images.unsplash.com/photo-1609921141835-710b7fa6e438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXBwJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
//                     alt=""
//                   />
//                 </div>
//                 <div class="tile__details">
//                   <div class="tile__title">App development</div>
//                 </div>
//                 <hr />
//                 <div>
//                   <p>App development</p>
//                 </div>
//               </div>
//             </a>

//             <a href="/">
//               <div class="tile">
//                 <div class="tile__media">
//                   <img
//                     class="tile__img"
//                     src="https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3FsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
//                     alt=""
//                   />
//                 </div>
//                 <div class="tile__details">
//                   <div class="tile__title">Database Management System</div>
//                 </div>
//                 <hr />
//                 <div>
//                   <p>Database Management</p>
//                 </div>
//               </div>
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>

//     <hr class="bold-line" />

//     <section class="last-section">
//       <div class="contain">
//         <div class="title -box">
//           <h1 style={{color: "brown"}}>Computer Science</h1>
//         </div>

//         <hr class="thin-line" />

//         <div class="roww scrolbar">
//           <div class="row__inner">
//             <div class="tile">
//               <div class="tile__media">
//                 <img
//                   class="tile__img"
//                   src="https://images.unsplash.com/photo-1536395268859-7cf1233a5d55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlcmF0aW5nJTIwc3lzdGVtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
//                   alt=""
//                 />
//               </div>
//               <div class="tile__details">
//                 <div class="tile__title">Operating system</div>
//               </div>
//               <hr />
//               <div>
//                 <p>Operating system</p>
//               </div>
//             </div>

//             <div class="tile">
//               <div class="tile__media">
//                 <img
//                   class="tile__img"
//                   src="https://images.unsplash.com/photo-1485796826113-174aa68fd81b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFjaGluZSUyMGxlYXJuaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
//                   alt=""
//                 />
//               </div>
//               <div class="tile__details">
//                 <div class="tile__title">Machine learning</div>
//               </div>
//               <hr />
//               <div>
//                 <p>Machine learning</p>
//               </div>
//             </div>

//             <div class="tile">
//               <div class="tile__media">
//                 <img
//                   class="tile__img"
//                   src="https://images.unsplash.com/photo-1501621667575-af81f1f0bacc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29tcHV0ZXIlMjB2aXNpb258ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
//                   alt=""
//                 />
//               </div>
//               <div class="tile__details">
//                 <div class="tile__title">Computer vision</div>
//               </div>
//               <hr />
//               <div>
//                 <p>Computer vision</p>
//               </div>
//             </div>

//             <div class="tile">
//               <div class="tile__media">
//                 <img
//                   class="tile__img"
//                   src="https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRhdGElMjBzdHJ1Y3R1cmVzJTIwYW5kJTIwYWxnb3JpdGhtc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
//                   alt=""
//                 />
//               </div>
//               <div class="tile__details">
//                 <div class="tile__title">Data structures and algorithms</div>
//               </div>
//               <hr />
//               <div>
//                 <p>Data structures and algorithms</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>

//     <hr class="bold-line" />

//     <section class="last-section">
//       <div class="contain">
//         <div class="title -box">
//           <h1 style={{color: "green"}}>Emerging Fields</h1>
//         </div>

//         <hr class="thin-line" />
//         <div class="roww scrolbar">
//           <div class="row__inner">
//             <div class="tile">
//               <div class="tile__media">
//                 <img
//                   class="tile__img"
//                   src="https://images.unsplash.com/photo-1614064548237-096f735f344f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3liZXIlMjBzZWN1cml0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
//                   alt=""
//                 />
//               </div>
//               <div class="tile__details">
//                 <div class="tile__title">Cyber security</div>
//               </div>
//               <hr />
//               <div>
//                 <p>Cyber security</p>
//               </div>
//             </div>

//             <div class="tile">
//               <div class="tile__media">
//                 <img
//                   class="tile__img"
//                   src="https://images.unsplash.com/photo-1580777361964-27e9cdd2f838?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wtSmtmMlB4NVFaQXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
//                   alt=""
//                 />
//               </div>
//               <div class="tile__details">
//                 <div class="tile__title">Quantum Computing</div>
//               </div>
//               <hr />
//               <div>
//                 <p>Quantum Computing</p>
//               </div>
//             </div>

//             <div class="tile">
//               <div class="tile__media">
//                 <img
//                   class="tile__img"
//                   src="https://images.unsplash.com/photo-1622630998477-20aa696ecb05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y3J5cHRvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
//                   alt=""
//                 />
//               </div>
//               <div class="tile__details">
//                 <div class="tile__title">Cryptography</div>
//               </div>
//               <hr />
//               <div>
//                 <p>Cryptography</p>
//               </div>
//             </div>

//             <div class="tile">
//               <div class="tile__media">
//                 <img
//                   class="tile__img"
//                   src="https://images.unsplash.com/photo-1639815188546-c43c240ff4df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsb2NrY2hhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
//                   alt=""
//                 />
//               </div>
//               <div class="tile__details">
//                 <div class="tile__title">Blockchain</div>
//               </div>
//               <hr />
//               <div>
//                 <p>Blockchain</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>

//     <hr class="bold-line" />

//     <section class="last-section">
//       <div class="contain">
//         <div class="title -box">
//           <h1 style={{color: "blue"}}>In Demand Fields</h1>
//         </div>

//         <hr class="thin-line" />
//         <div class="roww scrolbar">
//           <div class="row__inner">
//             <div class="tile">
//               <div class="tile__media">
//                 <img
//                   class="tile__img"
//                   src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdCUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
//                   alt=""
//                 />
//               </div>
//               <div class="tile__details">
//                 <div class="tile__title">Product management</div>
//               </div>
//               <hr />
//               <div>
//                 <p>Product management</p>
//               </div>
//             </div>

//             <div class="tile">
//               <div class="tile__media">
//                 <img
//                   class="tile__img"
//                   src="https://images.unsplash.com/photo-1584291527908-033f4d6542c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGF0YSUyMHZpc3VhbGl6YXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
//                   alt=""
//                 />
//               </div>
//               <div class="tile__details">
//                 <div class="tile__title">Data Visualization</div>
//               </div>
//               <hr />
//               <div>
//                 <p>Data Visualization</p>
//               </div>
//             </div>

//             <div class="tile">
//               <div class="tile__media">
//                 <img
//                   class="tile__img"
//                   src="https://images.unsplash.com/photo-1581094289810-adf5d25690e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGF0YSUyMGVuZ2luZWVyaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
//                   alt=""
//                 />
//               </div>
//               <div class="tile__details">
//                 <div class="tile__title">Data engineering</div>
//               </div>
//               <hr />
//               <div>
//                 <p>Data engineering</p>
//               </div>
//             </div>

//             <div class="tile">
//               <div class="tile__media">
//                 <img
//                   class="tile__img"
//                   src="https://images.unsplash.com/photo-1581092334247-44dd684e3c82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9ib3RpY3MlMjBlbmdpbmVlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
//                   alt=""
//                 />
//               </div>
//               <div class="tile__details">
//                 <div class="tile__title">Robotics Engineering</div>
//               </div>
//               <hr />
//               <div>
//                 <p>Robotics Engineering</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>

//     <footer class="footer">
//       <div class="container bottom_border">
//         <div class="row">
//           <div class="col-lg-4 col-md col-sm-4 col-12 col">
//             <h5
//               style={{color: "black","font-size":"2rem"}}
//               class="headin5_amrc col_white_amrc pt2"
//             >
//               Contact Us
//             </h5>

//             <p style={{color: "black", "font-size": "1rem", "line-height": "28px"}}>
//               <strong>
//                 House No. 481, Second Floor,Shiv Market BLK-WP, Village
//                 Wazirpur, Ashok Vihar, Delhi-110052</strong
//               >
//             </p>
//             <p></p>

//           </div>

//           <div class="col-lg-1"></div>

//           <div class="col-lg-3 col-md-6 col-6 col">
//             <h5
//               style={{color: "black", "font-size": "2rem"}}
//               class="headin5_amrc col_white_amrc pt2"
//             >
//               About Us
//             </h5>
//             <ul class="footer_ul_amrc">
//               <li><a href="/">Career</a></li>
//               <li><a href="/">Help-Center</a></li>
//               <li><a href="/">Privacy Policy</a></li>
//               <li><a href="/">Terms and Conditions</a></li>
//             </ul>

//           </div>

//           <div class="col-lg-1"></div>
//           <div class="col-lg-3 col">
//             <h5
//               style={{color: "black", "font-size": "2rem"}}
//               class="headin5_amrc col_white_amrc pt2"
//               id="fol"
//             >
//               Follow Us
//             </h5>

//             <div class="container" id="cont">
//               <div class="row">
//                 <ul class="social-icons-ql">
//                   <li>
//                     <a
//                       href="https://www.facebook.com/Fynii-Infotech-Private-Limited-101607735894393/"
//                       ><i class="fab fa-facebook fa-2x"></i
//                     ></a>
//                   </li>
//                   <li>
//                     <a href="https://www.linkedin.com/company/fynii/"
//                       ><i class="fab fa-linkedin fa-2x"></i
//                     ></a>
//                   </li>

//                   <li>
//                     <a href="/"><i class="fab fa-twitter fa-2x"></i></a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div class="container">
//         <ul class="foote_bottom_ul_amrc">
//         </ul>

//         <p class="text-center">Copyright @2022 | <a href="/"> Fynii</a></p>
//       </div>
//     </footer>

//     <script
//       src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
//       integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
//       crossorigin="anonymous"
//     ></script>
//     <script
//       src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
//       integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
//       crossorigin="anonymous"
//     ></script>
//     <script
//       src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
//       integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
//       crossorigin="anonymous"
//     ></script>

//     <script src="JS/script.js"></script>
//     <script src="JS/main.js"></script>
//     <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
//     <script src="js/cbpHorizontalMenu.min.js"></script>

//     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

//     <script src="JS/main-filter.js"></script>
//     </React.Fragment>
//   )
