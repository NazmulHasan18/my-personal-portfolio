import ScrollSpy from "react-ui-scrollspy";
import Banner from "../Banner/Banner";
import About from "../About/About";

const Home = () => {
   return (
      <div>
         <ScrollSpy scrollThrottle={500} useBoxMethod={false}>
            <Banner></Banner>
            <About></About>
         </ScrollSpy>
      </div>
   );
};

export default Home;
