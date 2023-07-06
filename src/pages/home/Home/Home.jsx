import ScrollSpy from "react-ui-scrollspy";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Blogs from "../Blogs/Blogs";
import Contacts from "../Contacts/Contacts";

const Home = () => {
   return (
      <div>
         <ScrollSpy scrollThrottle={500} useBoxMethod={false}>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Blogs></Blogs>
            <Contacts></Contacts>
         </ScrollSpy>
      </div>
   );
};

export default Home;
