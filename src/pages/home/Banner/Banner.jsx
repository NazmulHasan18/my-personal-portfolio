import { FaDownload } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
   return (
      <div
         id="home"
         className="mt-10 bg-no-repeat relative bg-cover"
         style={{ backgroundImage: "url('https://i.ibb.co/W5CkMqK/Nazmul-Hasan-01.png')" }}
      >
         <div className="pt-10 text-white px-4 lg:px-20 flex items-center justify-between bottom-0">
            <div className="w-screen h-full space-y-4">
               <h3 className="lg:text-5xl font-bold" data-aos="fade-right" data-aos-duration="1500">
                  Hi! I am
               </h3>
               <h1
                  className="lg:text-8xl text-2xl font-extrabold font-script animate-character"
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
                  I am a{" "}
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
               <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1200">
                  <button className="btn text-white mr-6 hover:bg-pink-700 btn-outline lg:text-xl border-purple-700">
                     View Resume <FaDownload></FaDownload>
                  </button>
                  <a href="#contacts">
                     <button className="btn text-white mr-6 border-pink-700 hover:bg-purple-700 btn-outline lg:text-xl">
                        Contact Me <IoCallSharp></IoCallSharp>
                     </button>
                  </a>
               </div>
            </div>
            <img
               src="./nazmul.png"
               alt=""
               className="h-[200px] lg:h-[830px] pt-10"
               data-aos="zoom-in"
               data-aos-duration="1500"
            />
         </div>
      </div>
   );
};

export default Banner;
