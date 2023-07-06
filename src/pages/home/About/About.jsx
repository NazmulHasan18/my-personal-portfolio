import { AwesomeButton } from "react-awesome-button";
import { FaHandshake } from "react-icons/fa";

const About = () => {
   return (
      <div id="about" className="bg-gray-950 py-10 ">
         <div className="container mx-auto" data-aos="fade-up" data-aos-duration="1500">
            <h2 className="uppercase text-6xl text-blue-500 mx-auto border-white border-b-4 w-fit">
               About Me
            </h2>

            <div className="flex my-10 lg:gap-10 px-16 items-center">
               <div className="text-center about">
                  <img
                     src="./nazmul2.png"
                     alt=""
                     className="mt-10 w-96 lg:w-[600px] pt-6 rounded-full border-4"
                  />
                  <AwesomeButton type="danger" href="#contacts" after={<FaHandshake />}>
                     Hire Me
                  </AwesomeButton>
               </div>
               <div className="text-white w-full">
                  <h2 className="text-4xl w-2/3 font-semibold text-pink-700">
                     Passionate MERN Developer | Committed to Delivering Excellence
                  </h2>

                  <div className="bg-gray-500 px-14 text-lg rounded-lg py-12 mt-9">
                     <p>
                        Welcome to my portfolio! I&rsquo;m Nazmul Hasan Shanto, a dedicated web developer
                        specialized in the MERN stack. With 6 months of comprehensive training and a 98%
                        success rate on multiple projects, I bring a proven track record of delivering
                        high-quality work.
                     </p>
                     <br />
                     <p>
                        Proficient in MongoDB, Express.js, React.js, and Node.js, I possess a deep
                        understanding of the MERN stack&rsquo;s components, allowing me to create robust and
                        dynamic web applications.
                     </p>
                     <br />
                     <p>
                        What sets me apart is my commitment to continuous learning and staying ahead of
                        industry trends. I excel in problem-solving and pay meticulous attention to detail,
                        ensuring efficient issue resolution while maintaining a user-centric approach.
                     </p>
                     <br />
                     <p>
                        As a strong team player with excellent communication skills, I thrive in collaborative
                        environments that foster innovation and idea sharing. I&rsquo;m eager to join a
                        dynamic team and contribute my expertise as a MERN developer.
                     </p>
                     <br />
                     <p>
                        Let&rsquo;s connect to explore how I can add value to your organization. Thank you for
                        visiting my portfolio, and I look forward to discussing exciting web development
                        opportunities with you!
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;
