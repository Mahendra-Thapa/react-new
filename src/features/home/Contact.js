import { useNavigate } from "react-router"

const Contact = () => {

  const nav = useNavigate();
  return (
    <div className=" m-10 ">
    <div className="grid grid-cols-5 ">
      <div  style={{ backgroundImage: "url('https://static8.depositphotos.com/1034557/850/i/450/depositphotos_8506681-stock-photo-sunset-yoga.jpg')" }}
      
      className="bg-no-repeat bg-cover bg-center bg-blend-darken h-[325px] rounded-3xl col-span-3 ">
    </div>

    <div className=" col-span-2  px-10 text-center">
      <p className="flex font-semibold gap-8 text-xl py-2"> <label htmlFor="">Name:- </label> <input className="border-4 hover:border-red-300 hover:shadow-2xl" type="text" placeholder="Name" /></p>

      <p className="flex font-semibold text-xl gap-9 py-2"> <label htmlFor="">Email:- </label> <input className="border-4 hover:border-red-300 hover:shadow-2xl " type="email" placeholder="Email" /></p>

      <p className="flex font-semibold text-xl gap-1 py-2"> <label htmlFor="">Message:- </label> 
      <textarea className="border-4 hover:border-red-300 hover:shadow-2xl h-[120px]" name="" id="" cols="20" rows="10"></textarea>
      </p>

      <p className="text-center pt-5"><button 
      
      className="px-6 z-30 py-2 bg-rose-400 rounded-md text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-gray-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl "> SUBMIT </button></p>
    </div>
    

     </div>

      <div className="text-center col-span-5 text-white mt-10 rounded-md ">
      <button 
      onClick={()=> nav('/home/page')}
    
      className="px-6 z-30 py-2 bg-rose-400 rounded-md text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-gray-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl "> Home </button>
    
     </div>
     
    </div>
  )
}
export default Contact