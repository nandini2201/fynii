import React, {useRef} from 'react'
import "./CoursePage.css"
import Navbar from "../../Navigation/Navbar/Navbar";
import Footer from "../Footer/Footer";
// import "./layout.css"

const CoursePage = () => {
  const firsItemRef = useRef(null)
  const secItemRef = useRef(null)
  const thiItemRef = useRef(null)
  const fouItemRef = useRef(null)
  const fifItemRef = useRef(null)
  return (
    <div id="page1" style={{"marginTop":"5%"}}>
      <div class="body12" style={{"backgroundColor":"green"}}>
      <div class="main21">
          <div class="wrapper12" style={{"display":"flex","justifyContent":"space-around",gap:"10rem"}}>
            <article style={{  "background": "transparent","border": "0 none","font-size": "100%", "marginLeft": "50%"}} class="col1q pad_left2q">
              <div  class="text1q">Digital Signal Processing</div>
              {/* <!-- <p>
                The Foll Stack Java Developer Job Guarantee Program is an
                intense Bootcamp that offers a complete suite of software
                development skills. Get job-ready with HIRIST and HackerEarth.<a
                  href="/"
                  class="link1"
                  >Read More</a
                >
              </p> --> */}

              <a href = "./CoursePage"class="buttnw" style={{"backgroundColor":"yellow","padding":"5%"}}>Enroll</a>
            </article>

            <img
              src="https://images.unsplash.com/photo-1632571401005-458e9d244591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJpZ29ub21ldHJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
              alt=""
              className='img-coursePage1'
              width="40%"
            />
          </div>
      </div>
    </div>

    {/* <!-- other navbar Start --> */}

    <nav className='nav1q'>
      <div onClick={() => firsItemRef.current.scrollIntoView()} class="nav-link" >About</div>
      <div onClick={() => secItemRef.current.scrollIntoView()} class="nav-link" >What you'll get</div>
      <div onClick={() => thiItemRef.current.scrollIntoView()} class="nav-link" >Syllabus</div>
      <div onClick={() => fouItemRef.current.scrollIntoView()} class="nav-link" >Instructors</div>
      <div onClick={() => fifItemRef.current.scrollIntoView()} class="nav-link" >Ways To Enroll</div>
    </nav>

    {/* <!-- other navbae end --> */}

    <div class="body3q">
      <div class="main21">
        <section id="content_top">
          <article class="col1q pad_left2q">
            <h2 ref={firsItemRef} class="bighq">About</h2>
            {/* <!-- <ol class="list1">
              <li>
                <span class="box1">1</span> You will get in this course
                <a href="/" class="arrow"></a>
              </li>
              <li>
                <span class="box1">2</span> You will get in this course
                <a href="/" class="arrow"></a>
              </li>
            </ol> --> */}
            <br />
            <p className='pqw'>
              This Course provides a complete knowledge of Digital Signal
              Processing, focusing on audio processing and data transmission.
              You will start from the basic concepts of discrete-time signals
              and learn how to analyze data via the Fourier transform,
              manipolate data via digital filters, and convert analog signals
              into digital format. Finally, you will discover how to implement
              real-time DSP algorithms on a general-purpose microcontroller.
              Applied examples complement the solid theoretical bases provided
              by the four courses in this specialization in Python in the form
              of Jupyter Notebooks.
            </p>
          </article>
        </section>
      </div>
    </div>

    <div class="body3q">
      <div class="main21">
        <section id="content_top">
          <article class="col1q pad_left2q">
            <h2 ref={secItemRef} class="bighq">What you'll get</h2>
            {/* <!-- <ol class="list1">
              <li>
                <span class="box1">1</span> You will get in this course
                <a href="/" class="arrow"></a>
              </li>
              <li>
                <span class="box1">2</span> You will get in this course
                <a href="/" class="arrow"></a>
              </li>
            </ol> --> */}
            <br />
            <ol>
              <li>Hands-on Project</li>
              <li>Earn a Certificate</li>
            </ol>
          </article>
        </section>
      </div>
    </div>

    <div class="body3q">
      <div class="main21">
        <section id="content_top">
          <article class="col1q pad_left2q">
            <h2 ref={thiItemRef} class="bighq">Syllabus</h2>
            {/* <!-- <ol class="list1">
              <li>
                <span class="box1">1</span> You will get in this course
                <a href="/" class="arrow"></a>
              </li>
              <li>
                <span class="box1">2</span> You will get in this course
                <a href="/" class="arrow"></a>
              </li>
            </ol> --> */}
            <br />
            <ol>
              <li className='liq'>
                Review of signals and systems, Fourier transform, and random
                processes
              </li>
              <li className='liq'>
                Lowpass representation of bandpass signals and systems:
                downconversion and upconversion, lowpass representation of
                bandpass systems
              </li>
              <li className='liq'>
                Analog modolation techniques: Amplitude modolation, DSB, SSB,
                VSB modolations
              </li >
              <li className='liq'>Angle Modolation: FM and PM</li>
              <li className='liq'>
                Sampling, quantization, and polse modolation: Sampling and
                polse-amplitude modolation, PCM and DPCM, Delta modolation,
                scalar, and vector quantization
              </li>
              <li className='liq'>
                Overview of moltiplexing and moltiple access techniques: TDM(A),
                CDMA, FDM, and OFDM(A)
              </li>
              <li className='liq'>
                Digital modolation techniques: Basics of PSK, ASK, FSK, QAM; ML
                demodolator implementation with matched filter, decision
                regions, and probability of error analysis.
              </li>
              <li className='liq'>
                Digital communication over bandlimited channels: Intersymbol
                interference, Nyquist criterion for ISI-free polse, raised
                cosine polse, ML sequence detection for bandlimited channels.
              </li>
              <li className='liq'>
                Optional topics: Hardware / Software Radio demos, PLL, and
                Synchronization
              </li>
            </ol>
          </article>
        </section>
      </div>
    </div>

    <div class="body3q">
      <div class="main21">
        <section id="content_top">
          <article class="col1q pad_left2q">
            <h2 ref={fouItemRef} class="bighq">Instructors</h2>
            {/* <!-- <ol class="list1">
              <li>
                <span class="box1">1</span> You will get in this course
                <a href="/" class="arrow"></a>
              </li>
              <li>
                <span class="box1">2</span> You will get in this course
                <a href="/" class="arrow"></a>
              </li>
            </ol> --> */}
            <br />
            <img style={{"border-radius":"100%"}} src="https://www.ee.iitb.ac.in/web/images/merchant" alt=""/>
          </article>
        </section>
      </div>
    </div>

    <div class="main21">
      <section id="content">
        <div class="wrapper12 pad_bot1q">
          <article class="col1q pad_left2q"></article>
          <article class="col2q pad_left1q"></article>
          <article class="col2q pad_left1q"></article>
        </div>

        {/* <!--         
        <div class="wrapper">
          <article class="col3">
            <h3>Lab Equipment</h3>
            <div class="pad">
              <p class="pad_bot2">
                <strong
                  >Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem
                </strong>
              </p>
              <p>
                Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur autoditaut.
              </p>
            </div>
          </article>
          <article class="col3 pad_left1">
            <h3>Our Researches</h3>
            <div class="pad">
              <ol class="list2 pad_bot1">
                <li><a href="/">Dcusantium doloremque laudantium</a></li>
                <li><a href="/">Totam rem aperiam eaque ipsa</a></li>
                <li><a href="/">Quae ab illo inventore</a></li>
                <li><a href="/">Veritatis et quasi architecto</a></li>
                <li><a href="/">Beatae vitae dicta sunt explicabo</a></li>
                <li><a href="/">Nemo enim ipsam voluptatem</a></li>
              </ol>
            </div>
          </article>
          <article class="col3 pad_left1">
            <h3>Integrated Science</h3>
            <div class="pad">
              <p class="pad_bot2">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem.
              </p>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora inciduntut.
              </p>
            </div>
          </article>
        </div> --> */}

        {/* <!--         
        <div class="wrapper">
          <article class="col3">
            <div class="pad"><a href="/" class="link1">Read More</a></div>
          </article>
          <article class="col3 pad_left1">
            <div class="pad"><a href="/" class="link1">Read More</a></div>
          </article>
          <article class="col3 pad_left1">
            <div class="pad"><a href="/" class="link1">Read More</a></div>
          </article>
        </div> --> */}
      </section>
    </div>

    <div >
      <button ref={fifItemRef} type="button" style={{"backgroundColor":"yellow",padding:"0 50%","color":"black"}}>Enroll Now!</button>
    </div>

    <Navbar/>
    <Footer/>
    </div>
  )
}

export default CoursePage
