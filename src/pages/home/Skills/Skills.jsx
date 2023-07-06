import Tilt from "react-parallax-tilt";
import icon1 from "../../../assets/icons/react.gif";
import icon2 from "../../../assets/icons/mongodb.gif";
import icon3 from "../../../assets/icons/nodejs.gif";
import icon4 from "../../../assets/icons/expressjs.png";
import icon5 from "../../../assets/icons/nextjs.gif";
import icon6 from "../../../assets/icons/html.gif";
import icon7 from "../../../assets/icons/Javascript.gif";
import icon8 from "../../../assets/icons/css.gif";
import icon9 from "../../../assets/icons/github.gif";
import { AwesomeButton } from "react-awesome-button";
import { FaDownload } from "react-icons/fa";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";

const Skills = () => {
   return (
      <section id="skills" className="bg-gray-100">
         <div data-aos="fade-up" data-aos-duration="1500">
            <SectionTitle title="Skills" text="text-blue-500"></SectionTitle>

            <div className="container mx-auto pb-16 gap-10 grid lg:grid-cols-3">
               <Tilt tiltMaxAngleY={5} tiltMaxAngleX={5} scale={1.1}>
                  <div
                     className="p-6 box rounded-2xl h-64 bg-white flex gap-5 items-center text-black"
                     data-aos="zoom-in"
                     data-aos-delay="500"
                     data-aos-duration="1500"
                  >
                     <img src={icon1} alt="" className="h-36 w-36" />
                     <div className="w-2/3 mx-auto ">
                        <div className="skill-box space-y-7">
                           <h2 className="title">React</h2>
                           <div className="skill-bar">
                              <span className="skill-per react">
                                 <span className="tooltip bg-sky-500">70%</span>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </Tilt>
               <Tilt tiltMaxAngleY={5} tiltMaxAngleX={5} scale={1.1}>
                  <div
                     className="p-6 box rounded-2xl h-64 bg-white flex gap-5 items-center text-black"
                     data-aos="zoom-in"
                     data-aos-delay="500"
                     data-aos-duration="1500"
                  >
                     <img src={icon2} alt="" className=" w-36" />
                     <div className="w-2/3 mx-auto ">
                        <div className="skill-box space-y-7">
                           <h2 className="title">Mongo DB</h2>
                           <div className="skill-bar">
                              <span className="skill-per mongodb">
                                 <span className="tooltip bg-green-500">70%</span>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </Tilt>
               <Tilt tiltMaxAngleY={5} tiltMaxAngleX={5} scale={1.1}>
                  <div
                     className="p-6 box rounded-2xl h-64 bg-white flex gap-5 items-center text-black"
                     data-aos="zoom-in"
                     data-aos-delay="500"
                     data-aos-duration="1500"
                  >
                     <img src={icon3} alt="" className="h-36 w-36" />
                     <div className="w-2/3 mx-auto ">
                        <div className="skill-box space-y-7">
                           <h2 className="title">Node JS</h2>
                           <div className="skill-bar">
                              <span className="skill-per node">
                                 <span className="tooltip bg-green-500">60%</span>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </Tilt>
               <Tilt tiltMaxAngleY={5} tiltMaxAngleX={5} scale={1.1}>
                  <div
                     className="p-6 box rounded-2xl h-64 bg-white flex gap-5 items-center text-black"
                     data-aos="zoom-in"
                     data-aos-delay="500"
                     data-aos-duration="1500"
                  >
                     <img src={icon4} alt="" className="h-36 w-36" />
                     <div className="w-2/3 mx-auto ">
                        <div className="skill-box space-y-7">
                           <h2 className="title">Express JS</h2>
                           <div className="skill-bar">
                              <span className="skill-per express">
                                 <span className="tooltip bg-gray-800">60%</span>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </Tilt>
               <Tilt tiltMaxAngleY={5} tiltMaxAngleX={5} scale={1.1}>
                  <div
                     className="p-6 box rounded-2xl h-64 bg-white flex gap-5 items-center text-black"
                     data-aos="zoom-in"
                     data-aos-delay="500"
                     data-aos-duration="1500"
                  >
                     <img src={icon5} alt="" className="h-36 w-36" />
                     <div className="w-2/3 mx-auto ">
                        <div className="skill-box space-y-7">
                           <h2 className="title">Next JS</h2>
                           <div className="skill-bar">
                              <span className="skill-per next">
                                 <span className="tooltip bg-orange-500">60%</span>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </Tilt>
               <Tilt tiltMaxAngleY={5} tiltMaxAngleX={5} scale={1.1}>
                  <div
                     className="p-6 box rounded-2xl h-64 bg-white flex gap-5 items-center text-black"
                     data-aos="zoom-in"
                     data-aos-delay="500"
                     data-aos-duration="1500"
                  >
                     <img src={icon9} alt="" className="h-36 w-36" />
                     <div className="w-2/3 mx-auto ">
                        <div className="skill-box space-y-7">
                           <h2 className="title">Git Hub</h2>
                           <div className="skill-bar">
                              <span className="skill-per github">
                                 <span className="tooltip bg-gray-700">60%</span>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </Tilt>
               <Tilt tiltMaxAngleY={5} tiltMaxAngleX={5} scale={1.1}>
                  <div
                     className="p-6 box rounded-2xl h-64 bg-white flex gap-5 items-center text-black"
                     data-aos="zoom-in"
                     data-aos-delay="500"
                     data-aos-duration="1500"
                  >
                     <img src={icon6} alt="" className="h-36 w-36" />
                     <div className="w-2/3 mx-auto ">
                        <div className="skill-box space-y-7">
                           <h2 className="title">HTML</h2>
                           <div className="skill-bar">
                              <span className="skill-per html">
                                 <span className="tooltip bg-orange-500">85%</span>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </Tilt>
               <Tilt tiltMaxAngleY={5} tiltMaxAngleX={5} scale={1.1}>
                  <div
                     className="p-6 box rounded-2xl h-64 bg-white flex gap-5 items-center text-black"
                     data-aos="zoom-in"
                     data-aos-delay="500"
                     data-aos-duration="1500"
                  >
                     <img src={icon8} alt="" className="w-36" />
                     <div className="w-2/3 mx-auto ">
                        <div className="skill-box space-y-7">
                           <h2 className="title">CSS</h2>
                           <div className="skill-bar">
                              <span className="skill-per css">
                                 <span className="tooltip bg-blue-500">85%</span>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </Tilt>
               <Tilt tiltMaxAngleY={5} tiltMaxAngleX={5} scale={1.1}>
                  <div
                     className="p-6 box rounded-2xl h-64 bg-white flex gap-5 items-center text-black"
                     data-aos="zoom-in"
                     data-aos-delay="500"
                     data-aos-duration="1500"
                  >
                     <img src={icon7} alt="" className="h-36 w-36" />
                     <div className="w-2/3 mx-auto ">
                        <div className="skill-box space-y-7">
                           <h2 className="title">Javascript</h2>
                           <div className="skill-bar">
                              <span className="skill-per javascript">
                                 <span className="tooltip bg-yellow-400">70%</span>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </Tilt>
            </div>
            <div className="banner mx-auto w-fit pb-10">
               <AwesomeButton
                  href="https://drive.google.com/file/d/1CyOsE3qHuPeFx_NKKx8psKmJ-G2KanCz/view?usp=sharing"
                  type="primary"
                  before={<FaDownload />}
               >
                  Know More
               </AwesomeButton>
            </div>
         </div>
      </section>
   );
};

export default Skills;
