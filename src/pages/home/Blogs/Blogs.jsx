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
                                 become able to use new technology ... <br />
                                 <button
                                    className="btn btn-link"
                                    onClick={() => window.my_modal_2.showModal()}
                                 >
                                    Read More
                                 </button>
                              </p>
                           </div>
                           <div className="bg-white text-black rounded-xl">
                              <img
                                 src="https://i.ibb.co/kgBRdV7/react.jpg"
                                 alt=""
                                 className="rounded-lg p-5 h-72 mx-auto"
                              />
                              <h2 className="text-3xl px-5 font-semibold mb-3">Top 5 interview questions.</h2>
                              <p className="p-6 pt-0">
                                 1. What is React?
                                 <br />
                                 {"=>"}React is a front-end javascript-based library developed by Facebook in
                                 2011. It can reuse the components. It is used for complex user interactive
                                 websites and it has built a large community as an open source. <br /> 2. What
                                 are the features of React? .. <br />
                                 <button
                                    className="btn btn-link"
                                    onClick={() => window.my_modal_3.showModal()}
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
            className="aspect-[2/1] hidden lg:block
            "
         ></ParallaxBanner>
         <div className="inset-0 bg-[#112029] lg:hidden container mx-auto">
            <div data-aos="fade-up" data-aos-duration="1500">
               <SectionTitle title="Blogs" text="text-yellow-400" color="white"></SectionTitle>
               <div className="grid grid-cols-1 px-4 lg:grid-cols-3 gap-8">
                  <div className="bg-black text-white rounded-xl pb-10">
                     <img src="https://i.ibb.co/7pJTp87/MERN.png" alt="" className="rounded-lg p-5" />
                     <h2 className="text-3xl px-5 font-semibold mb-3">What is MERN?</h2>
                     <p className="p-6 pt-0">
                        Let&rsquo;s learn something about MERN. The MERN stack is a powerful and efficient
                        technology stack for developing dynamic web applications. MERN stands for MongoDB,
                        Express.js, React, and Node.js, developers can create feature-rich, scalable, and
                        high-performance applications. The MERN stack&rsquo;s ... <br />
                        <button className="btn btn-link" onClick={() => window.my_modal_1.showModal()}>
                           Read More
                        </button>
                     </p>
                  </div>
                  <div className="bg-white text-black rounded-xl">
                     <img src="https://i.ibb.co/CQ50s0Q/Nextjs.jpg" alt="" className="rounded-lg p-5" />
                     <h2 className="text-3xl px-5 font-semibold mb-3">Why I love learning?</h2>
                     <p className="p-6 pt-0">
                        I always love to live as alive not as a lazy person. And I belive exploring new
                        technologies makes you alive. When I cam to connect with new technologies, it always
                        gives me pain. But there goes a proverb- &rdquo;No pain, No gain.&rdquo;. At the end
                        of the day, this pain gives me a gain. ... <br />
                        <button className="btn btn-link" onClick={() => window.my_modal_2.showModal()}>
                           Read More
                        </button>
                     </p>
                  </div>
                  <div className="bg-white text-black rounded-xl">
                     <img src="https://i.ibb.co/kgBRdV7/react.jpg" alt="" className="rounded-lg p-5" />
                     <h2 className="text-3xl px-5 font-semibold mb-3">Top 5 interview questions.</h2>
                     <p className="p-6 pt-0">
                        1. What is React?
                        <br />
                        {"=>"}React is a front-end javascript-based library developed by Facebook in 2011. It
                        can reuse the components. It is used for complex user interactive websites and it has
                        built a large community as an open source.
                        <br /> 2. What are the features of React?
                        <br />
                        {"=>"}There are so many features in React. Some of them are mentioned below. JSX: ...{" "}
                        <br />
                        <button className="btn btn-link" onClick={() => window.my_modal_3.showModal()}>
                           Read More
                        </button>
                     </p>
                  </div>
               </div>
            </div>
         </div>
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
            <dialog id="my_modal_3" className="modal">
               <form method="dialog" className="modal-box">
                  <img src="https://i.ibb.co/kgBRdV7/react.jpg" alt="" />
                  <h3 className="font-bold text-xl">Top 5 interview questions.</h3>
                  <p className="py-4">
                     1. What is React?
                     <br />
                     {"=>"}React is a front-end javascript-based library developed by Facebook in 2011. It can
                     reuse the components. It is used for complex user interactive websites and it has built a
                     large community as an open source. <br /> 2. What are the features of React?
                     <br />
                     {"=>"}There are so many features in React. Some of them are mentioned below. JSX: Using
                     JSX we can write html code within javascript and easily manage the code and what it
                     should look like. Components: React is a component base library where we can make an easy
                     part of a website in components and can use it where we need it. Virtual DOM: React made
                     its virtual dom to make the data management system so easy and wiser. To manage the code
                     easily. One-way data building: One-way data building structure made react js more
                     powerful was react flow the one direction by using react one way data building it renders
                     in ui very fast and we have to nest components under parents components. And so on.
                     <br /> 3. What is the difference between Real DOM and Virtual DOM?
                     <br />
                     {"=>"}There are many differences between real and virtual doms. Some of them are
                     mentioned below. Real dom update is slow but virtual dom update fast. Real Dom creates a
                     new dom if an element is created but virtual Dom just updates specific changed part Real
                     Dom uses too much memory but virtual Dom done Dom manipulation was so expensive in real
                     dom but it is very easy. And So on.
                     <br /> 4. What are the limitations of React?
                     <br />
                     {"=>"} Though React is so much helpful for a user but it also has some limitations. React
                     is just a library, not a full-blown framework Its library is very large and takes time to
                     understand It can be a little difficult for novice programmers to understand Coding gets
                     complex as it uses inline templating and JSX
                     <br /> 5. What is the virtual DOM?
                     <br />
                     {"=>"} Virtual DOM means Virtual Document Object Model. That means Dom change will happen
                     but virtually not really. Virtual dom detects where the changes happen in UI and Real Dom
                     can’t detect the specific change virtual dom after changing details. Command the real dom
                     that this part of UI is changed.
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
