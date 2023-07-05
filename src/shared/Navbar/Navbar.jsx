const Navbar = () => {
   const navLink = (
      <>
         <li data-to-scrollspy-id="home">
            <a className="hover:text-white" href="/">
               Home
            </a>
         </li>
         <li data-to-scrollspy-id="about">
            <a className="hover:text-white" href="#about">
               About Me
            </a>
         </li>
         <li data-to-scrollspy-id="skills">
            <a className="hover:text-white" href="#skills">
               Skills
            </a>
         </li>
         <li data-to-scrollspy-id="projects">
            <a className="hover:text-white" href="#projects">
               Projects
            </a>
         </li>
         <li data-to-scrollspy-id="blogs">
            <a className="hover:text-white" href="#blogs">
               Blogs
            </a>
         </li>
         <li data-to-scrollspy-id="contacts">
            <a className="hover:text-white" href="#contacts">
               Contacts
            </a>
         </li>
         <li data-to-scrollspy-id="contacts">
            <a href="#contacts">
               <button className="btn btn-xs sm:btn-sm md:btn-md btn-outline btn-secondary rounded-none">
                  View Resume
               </button>
            </a>
         </li>
      </>
   );
   return (
      <div className="drawer font-semibold z-50">
         <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
         <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="w-full navbar bg-blue-900 text-neutral-content fixed">
               <div className="flex-none lg:hidden">
                  <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-6 h-6 stroke-current"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                     </svg>
                  </label>
               </div>
               <div className="flex-1 text-center px-2 mx-2">
                  <img src="./logpNaz.PNG" alt="Nazmul" className="w-40" />
               </div>
               <div className="flex-none hidden lg:block">
                  <ul className="menu menu-horizontal items-center text-lg text-[orange]">{navLink}</ul>
               </div>
            </div>
         </div>
         <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full text-[orange] items-center bg-blue-800 text-lg">{navLink}</ul>
         </div>
      </div>
   );
};

export default Navbar;
