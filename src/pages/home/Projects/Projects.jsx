import { AwesomeButton, AwesomeButtonSocial } from "react-awesome-button";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import "./Projects.css";
import { FaArrowRight, FaLink } from "react-icons/fa";

const Projects = () => {
   return (
      <section className="projects bg-[#000033] pb-16" id="projects">
         <div className="container mx-auto">
            <SectionTitle
               title="Projects"
               text="text-white"
               color="gray"
               subtitle="Hover Project and watch magic."
            ></SectionTitle>

            <div className="grid grid-cols-2 justify-between">
               <div className="w-fit">
                  <h2 className="text-5xl text-white font-semibold mb-5">Translingua Institute</h2>
                  <div
                     className="box group rounded-lg"
                     style={{ backgroundImage: "url('https://i.ibb.co/HpFTRjf/Translingua.jpg')" }}
                  >
                     <div className="bg-black bg-opacity-70 block group-hover:hidden text-white h-full p-5 text-xl font-semibold">
                        <p>
                           It&lsquo;s a language learning website. On summer camp student can learn language
                           remotely by enrolling at class by this site
                        </p>
                        <p className="mt-6 text-2xl font-bold">Feature:</p>
                        <ol className="list-decimal list-inside space-y-6">
                           <li>
                              Stripe JS Payment method implemented to take payment from student to enroll in a
                              class and also their payment transaction Id will be stored in server.
                           </li>
                           <li>
                              JSON Web Token Verification method added to verify valid user but in everywhere
                              it is not fully verified with full steps.
                           </li>
                           <li>
                              This is a full stack web site for 3 types user. Admin, Instructor, Students.
                              Every user browsing experience are different with proper validation and route.
                           </li>
                        </ol>
                     </div>
                  </div>
                  <div className="project w-[680px] py-10 flex justify-between items-center">
                     <AwesomeButton
                        type="primary"
                        after={<FaLink />}
                        href="https://translingua-institute.web.app/"
                     >
                        Live Site
                     </AwesomeButton>
                     <div className="flex gap-6">
                        <AwesomeButtonSocial
                           type="github"
                           href="https://github.com/NazmulHasan18/Translingua-client"
                        >
                           Client
                        </AwesomeButtonSocial>
                        <AwesomeButtonSocial
                           type="github"
                           href="https://github.com/NazmulHasan18/Translingua-server"
                        >
                           Server
                        </AwesomeButtonSocial>
                     </div>
                  </div>
               </div>
               <div className="w-fit">
                  <h2 className="text-5xl text-white font-semibold mb-5">Taste Haven</h2>
                  <div
                     className="box group rounded-lg"
                     style={{ backgroundImage: "url('https://i.ibb.co/ngjhQHB/Taste-haven.jpg')" }}
                  >
                     <div className="bg-black bg-opacity-70 block group-hover:hidden text-white h-full p-5 text-xl font-semibold">
                        <p>
                           This is a website of a restaurant of Bangladeshi cuisine. There has so many
                           bangladeshi recipes of mater chefs.
                        </p>
                        <p className="mt-6 text-2xl font-bold">Feature:</p>
                        <ol className="list-decimal list-inside space-y-6">
                           <li>
                              Responsive Home Page implemented for getting a smooth view on both mobile and
                              desktop and good user experience.
                           </li>
                           <li>
                              Beautiful carousel banner added with some testy text to attract customers to
                              visit this website.
                           </li>
                           <li>
                              Firebase authentication enables to secure account creation and login for
                              personalized access.
                           </li>
                        </ol>
                     </div>
                  </div>
                  <div className="project w-[680px] py-10 flex justify-between items-center">
                     <AwesomeButton
                        type="primary"
                        after={<FaLink />}
                        href="https://taste-haven-auth.web.app/"
                     >
                        Live Site
                     </AwesomeButton>
                     <div className="flex gap-6">
                        <AwesomeButtonSocial
                           type="github"
                           href="https://github.com/NazmulHasan18/taste-haven-client"
                        >
                           Client
                        </AwesomeButtonSocial>
                        <AwesomeButtonSocial
                           type="github"
                           href="https://github.com/NazmulHasan18/taste-haven-server"
                        >
                           Server
                        </AwesomeButtonSocial>
                     </div>
                  </div>
               </div>
               <div className="w-fit">
                  <h2 className="text-5xl text-white font-semibold mb-5">Tiny Driver Toy</h2>
                  <div
                     className="box group rounded-lg"
                     style={{ backgroundImage: "url('https://i.ibb.co/tDQhBk8/Tiny-Driver-Toy.jpg')" }}
                  >
                     <div className="bg-black bg-opacity-70 block group-hover:hidden text-white h-full p-5 text-xl font-semibold">
                        <p>
                           It is a car to store website where you can buy, watch and review the toy. Also
                           admin can control adding deleting toy if he is logged in.
                        </p>
                        <p className="mt-6 text-2xl font-bold">Feature:</p>
                        <ol className="list-decimal list-inside space-y-6">
                           <li>
                              Responsive Home Page implemented for getting a smooth view on both mobile and
                              desktop and good user experience with so many information about us.
                           </li>
                           <li>
                              Delivers an engaging and interactive toy experience through a web app platform,
                              providing users with a playful and enjoyable digital playtime.
                           </li>
                           <li>
                              Firebase authentication enables to secure account creation and login for
                              personalized access and ensure browser security for each user.
                           </li>
                        </ol>
                     </div>
                  </div>
                  <div className="project w-[680px] py-10 flex justify-between items-center">
                     <AwesomeButton type="primary" after={<FaLink />} href="https://tiny-driver-toy.web.app/">
                        Live Site
                     </AwesomeButton>
                     <div className="flex gap-6">
                        <AwesomeButtonSocial
                           type="github"
                           href="https://github.com/NazmulHasan18/tiny-driver-toy-client"
                        >
                           Client
                        </AwesomeButtonSocial>
                        <AwesomeButtonSocial
                           type="github"
                           href="https://github.com/NazmulHasan18/Tiny-driver-toy-server"
                        >
                           Server
                        </AwesomeButtonSocial>
                     </div>
                  </div>
               </div>
               <div className="w-fit">
                  <h2 className="text-5xl text-white font-semibold mb-5">Developers Job</h2>
                  <div
                     className="box group rounded-lg"
                     style={{
                        backgroundImage: "url('https://i.ibb.co/2N56CQ7/Developers-Job.jpg')",
                        transition: "ease-in-out 5s",
                     }}
                  >
                     <div className="bg-black bg-opacity-70 block group-hover:hidden text-white h-full p-5 text-xl font-semibold">
                        <p>
                           This is a job hunting demo website for a user who can apply a job and see details
                           about the jobs.
                        </p>
                        <p className="mt-6 text-2xl font-bold">Feature:</p>
                        <ol className="list-decimal list-inside space-y-6">
                           <li>
                              Responsive Home Page implemented for getting a smooth view on both mobile and
                              desktop and good user experience with so many information about us.
                           </li>
                           <li>
                              Developer can apply the job in featured companies and the can see their apply
                              and job details.
                           </li>
                           <li>
                              Local storage added as a storage device. So that applied job can be stored for
                              the user device.
                           </li>
                        </ol>
                     </div>
                  </div>
                  <div className="project w-[680px] py-10 flex justify-between items-center">
                     <AwesomeButton
                        type="primary"
                        after={<FaLink />}
                        href="https://stellar-kelpie-f5bd93.netlify.app/"
                     >
                        Live Site
                     </AwesomeButton>

                     <AwesomeButtonSocial
                        type="github"
                        href="https://github.com/NazmulHasan18/Devolopers-job"
                     >
                        Client
                     </AwesomeButtonSocial>
                  </div>
               </div>
            </div>
            <div className="w-fit mx-auto mt-5 see-more">
               <AwesomeButton type="primary" after={<FaArrowRight />}>
                  See More
               </AwesomeButton>
            </div>
         </div>
      </section>
   );
};

export default Projects;
