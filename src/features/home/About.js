import { useNavigate } from "react-router"

const About = () => {

  const nav = useNavigate();
  return (
    <div className=" m-10">
      <div  style={{ backgroundImage: "url('https://c0.wallpaperflare.com/preview/56/956/1001/yoga-zen-meditating-pose.jpg')" }} className="bg-no-repeat bg-cover bg-center bg-blend-darken h-[325px] rounded-3xl ">
    </div>

      <div className="text-center my-10"> <h1 className="text-3xl font-semibold text-ju">About Us</h1>
      <p className=" text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto, delectus quam est ut veniam, dicta beatae provident nesciunt unde, numquam quae? Asperiores dolore repellendus iusto molestiae amet tempore nesciunt.</p></div>

      {/* <div className="text-center col-span-2 text-white z-30 rounded-md ">
      <button 
      onClick={()=> nav('/contact/us/page')}
      className="px-6 z-30 py-2 bg-rose-400 rounded-md text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-gray-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl "> Contact Us </button>
    
     </div> */}
     
    </div>
  )
}
export default About