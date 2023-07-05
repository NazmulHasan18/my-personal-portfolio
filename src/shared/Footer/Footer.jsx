import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
   return (
      <footer className="footer p-10 bg-black text-lg font-semibold grid-cols-8 text-neutral-content">
         <div className="col-span-2">
            <img src="./logpNaz.PNG" alt="Nazmul" className="w-40" />
            <p>Copyright © 2023 - All right reserved</p>
         </div>{" "}
         <div>
            <span className="footer-title">Portfolio</span>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">About Me</a>
            <a className="link link-hover">Skills</a>
            <a className="link link-hover">Project</a>
            <a className="link link-hover">Blogs</a>
            <a className="link link-hover">Contacts</a>
         </div>
         <div className="col-span-3">
            <span className="footer-title ">About Me</span>
            <p>
               I am adaptive, communicative and leadership giving person. I can explain about anythings I
               know. I am learning full stack web development to level up my skill and love to do codding and
               implementing new component webpack. Web development is my passion. I love to do codding,
               debugging and learning more about development.
            </p>
         </div>
         <div>
            <span className="footer-title">Contact Me</span>
            <p>+8801904723512</p>
            <p>nazmulhasanshanot13@gmail.com</p>
            <span className="footer-title">Contact Me</span>
            <div className="flex gap-4 text-2xl">
               <a href="https://www.linkedin.com/in/nazmul-hasan-shanto-a67041182/">
                  <FaLinkedin />
               </a>
               <a href="https://www.facebook.com/smnazmul.hasan.1829">
                  <FaFacebookSquare />
               </a>

               <a href="https://twitter.com/SMNazmulHasan13">
                  <FaTwitterSquare />
               </a>
               <a href="http://wa.me/+8801904723512">
                  <FaWhatsappSquare />
               </a>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
