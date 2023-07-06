import { AwesomeButton } from "react-awesome-button";
import { FaDownload } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { Typewriter } from "react-simple-typewriter";
import "../../../components/AwesomeBtnCustom.css";

const Banner = () => {
   return (
      <section
         id="home"
         className="mt-10 bg-no-repeat relative bg-cover"
         style={{ backgroundImage: "url('https://i.ibb.co/W5CkMqK/Nazmul-Hasan-01.png')" }}
      >
         <div className="pt-10 text-white px-4 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-between bottom-0 container mx-auto">
            <div className="w-screen h-full space-y-4 p-6 lg:p-0">
               <h3 className="lg:text-5xl text-xl font-bold" data-aos="fade-right" data-aos-duration="1500">
                  Hi! I am
               </h3>
               <h1
                  className="lg:text-8xl text-4xl font-extrabold font-script animate-character"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  data-aos-delay="300"
               >
                  Nazmul Hasan Shanto
               </h1>
               <h2
                  className="lg:text-6xl text-xl font-bold"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  data-aos-delay="600"
               >
                  I am a <br />
                  <span className="text-yellow-500">
                     <Typewriter
                        words={[
                           "Web Developer",
                           "Front-End Developer",
                           "Back-End Developer",
                           "Full Stack Developer",
                        ]}
                        loop={Infinity}
                        cursor
                        cursorStyle="|"
                        typeSpeed={120}
                        deleteSpeed={60}
                        delaySpeed={1000}
                     />
                  </span>
               </h2>
               <p
                  className="lg:text-xl lg:w-[600px]"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  data-aos-delay="900"
               >
                  My Skills are my strength and my projects are my Identity. Portfolio is a mirror of my
                  skills and projects.
                  <span>Never Judge a book by it&rsquo;s cover.</span>
               </p>
               <div
                  className="banner space-y-5"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  data-aos-delay="1200"
               >
                  <AwesomeButton
                     href="https://drive.google.com/file/d/1CyOsE3qHuPeFx_NKKx8psKmJ-G2KanCz/view?usp=sharing"
                     type="primary"
                     before={<FaDownload />}
                  >
                     View Resume
                  </AwesomeButton>
                  <AwesomeButton href="#contacts" type="secondary" before={<IoCallSharp />}>
                     Contact Me
                  </AwesomeButton>
               </div>
            </div>
            <img
               src="./nazmul.png"
               alt=""
               className="w-[300px] lg:h-[830px] pt-10"
               data-aos="zoom-in"
               data-aos-duration="1500"
            />
         </div>
      </section>
   );
};

export default Banner;
