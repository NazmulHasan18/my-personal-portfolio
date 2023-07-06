const SectionTitle = ({ title, text, color, subtitle }) => {
   return (
      <div className="mx-auto w-fit py-16 text-center">
         <h2 className="text-7xl font-semibold" style={{ color: `${color}` }}>
            My <span className={`drop-shadow-md ${text}`}>{title}</span>
         </h2>
         <span
            className={`relative overflow-hidden inline-block h-2 w-[28rem] bg-primary rounded-full bg-opacity-25`}
         >
            <span
               className={`absolute left-0 top-0 inline-block h-full w-3 animate-lefttoright rounded-full bg-white`}
            ></span>
         </span>
         <h5 className="text-2xl font-bold text-white">{subtitle}</h5>
      </div>
   );
};

export default SectionTitle;
