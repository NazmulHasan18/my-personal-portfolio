const Banner = () => {
   return (
      <div
         id="home"
         className="mt-10 bg-no-repeat relative bg-cover"
         style={{ backgroundImage: "url('https://i.ibb.co/W5CkMqK/Nazmul-Hasan-01.png')" }}
      >
         <div className="pt-10 text-white px-4 lg:px-20 flex items-center justify-between bottom-0">
            <div className="w-screen h-full">
               <h2 className="lg:text-4xl font-bold">Welcome!</h2>
               <h1 className="lg:text-6xl text-5xl font-bold">Nazmul Hasan Shanto</h1>
            </div>
            <img src="./nazmul.png" alt="" className="h-[200px] lg:h-[830px] pt-10" />
         </div>
      </div>
   );
};

export default Banner;
