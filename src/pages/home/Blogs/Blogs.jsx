import { ParallaxBanner } from "react-scroll-parallax";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";

const Blogs = () => {
   return (
      <section id="blogs" className="h-full">
         <ParallaxBanner
            layers={[
               {
                  image: "https://i.ibb.co/196nKCZ/BlogBg.jpg",
                  speed: -15,
               },
               {
                  children: (
                     <div
                        className="absolute inset-0 container mx-auto"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                     >
                        <SectionTitle title="Blogs" text="text-yellow-400" color="white"></SectionTitle>
                        <div className="grid grid-cols-3 gap-8">
                           <div className="bg-black text-white rounded-xl pb-10">
                              <img
                                 src="https://i.ibb.co/7pJTp87/MERN.png"
                                 alt=""
                                 className="rounded-lg p-5"
                              />
                              <h2 className="text-3xl px-5 font-semibold mb-3">What is MERN?</h2>
                              <p className="p-6 pt-0">
                                 Let&rsquo;s learn something about MERN. The MERN stack is a powerful and
                                 efficient technology stack for developing dynamic web applications. MERN
                                 stands for MongoDB, Express.js, React, and Node.js, developers can create
                                 feature-rich, scalable, and high-performance applications. The MERN
                                 stack&rsquo;s ... <br />
                                 <button
                                    className="btn btn-link"
                                    onClick={() => window.my_modal_1.showModal()}
                                 >
                                    Read More
                                 </button>
                              </p>
                           </div>
                           <div className="bg-white text-black rounded-xl">
                              <img
                                 src="https://i.ibb.co/CQ50s0Q/Nextjs.jpg"
                                 alt=""
                                 className="rounded-lg p-5"
                              />
                              <h2 className="text-3xl px-5 font-semibold mb-3">Why I love learning?</h2>
                              <p className="p-6 pt-0">
                                 I always love to live as alive not as a lazy person. And I belive exploring
                                 new technologies makes you alive. When I cam to connect with new
                                 technologies, it always gives me pain. But there goes a proverb- &rdquo;No
                                 pain, No gain.&rdquo;. At the end of the day, this pain gives me a gain. I
                                 become able to use new technology, add new technology to my skill, and build
                                 a new ... <br />
                                 <button
                                    className="btn btn-link"
                                    onClick={() => window.my_modal_2.showModal()}
                                 >
                                    Read More
                                 </button>
                              </p>
                           </div>
                        </div>
                     </div>
                  ),
               },
            ]}
            className="aspect-[2/1]"
         ></ParallaxBanner>
         <div>
            <dialog id="my_modal_1" className="modal">
               <form method="dialog" className="modal-box">
                  <img src="https://i.ibb.co/7pJTp87/MERN.png" alt="" />
                  <h3 className="font-bold text-xl">What is MERN?</h3>
                  <p className="py-4">
                     Let&rsquo;s learn something about MERN. The MERN stack is a powerful and efficient
                     technology stack for developing dynamic web applications. MERN stands for MongoDB,
                     Express.js, React, and Node.js, developers can create feature-rich, scalable, and
                     high-performance applications. The MERN stack&rsquo;s use of JavaScript throughout the
                     entire development process allows for seamless transitions between frontend and backend
                     development. This unified language promotes code reusability, reduces the learning curve,
                     and enhances developer productivity. With its extensive ecosystem of open-source
                     libraries, frameworks, and tools, the MERN stack provides developers with a wide range of
                     options to choose from. This flexibility allows developers to select the most suitable
                     components for their specific project requirements, ensuring efficient and effective
                     development. The component-based architecture of React enables developers to create
                     reusable UI components, resulting in faster rendering and a responsive user interface.
                     Node.js, with its non-blocking I/O, ensures high-performance web servers that can handle
                     concurrent requests efficiently. MongoDB, a NoSQL document database, offers flexibility
                     in data modeling, allowing developers to adapt and evolve their data structures as
                     needed. Its scalability and real-time capabilities make it an excellent choice for
                     handling large amounts of data in dynamic applications. In summary, the MERN stack
                     empowers developers to build modern and interactive web applications with ease. Its
                     unified language, extensive ecosystem, and powerful component libraries enable rapid
                     development and deployment of robust applications. With its flexibility, scalability, and
                     community support, the MERN stack continues to be a popular choice for developers seeking
                     to create innovative web experiences.
                  </p>
                  <div className="modal-action">
                     <button className="btn">Close</button>
                  </div>
               </form>
            </dialog>
            <dialog id="my_modal_2" className="modal">
               <form method="dialog" className="modal-box">
                  <img src="https://i.ibb.co/CQ50s0Q/Nextjs.jpg" alt="" />
                  <h3 className="font-bold text-xl">What is MERN?</h3>
                  <p className="py-4">
                     I always love to live as alive not as a lazy person. And I belive exploring new
                     technologies makes you alive. When I cam to connect with new technologies, it always
                     gives me pain. But there goes a proverb- &rdquo;No pain, No gain.&rdquo;. At the end of
                     the day, this pain gives me a gain. I become able to use new technology, add new
                     technology to my skill, and build a new experience with technology. I feel from the heart
                     that we should never stop learning and worrying about new tech, It makes you alive and
                     keeps you alive.
                  </p>
                  <div className="modal-action">
                     <button className="btn">Close</button>
                  </div>
               </form>
            </dialog>
         </div>
      </section>
   );
};

export default Blogs;
