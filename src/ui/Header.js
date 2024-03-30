import { NavLink } from "react-router-dom"
import { HiMenuAlt1, HiOutlineX, IconName } from "react-icons/hi";
import { useState } from "react";



const Header = () => {

const [show, setShow] = useState(false)
const handleSow = () =>{
  setShow((prev) => !prev)
}

  return (
    <div className=" flex md:items-start items-baseline  justify-between p-2 bg-black  text-white  sticky top-0 z-10 ">
      <div>
      <h1 >@M.king</h1>
      </div>

      <div className=" hidden md:flex relative">
       {show ? <button onClick={ handleSow} className="absolute right-0 "> <HiOutlineX size={30} /></button>: <button onClick={handleSow}> <HiMenuAlt1 size={30} /> </button> }
       {show &&
      <nav className=" absulate pr-8 md:flex md:flex-col space-y-2  hidden ">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='about'>About</NavLink>
        <NavLink to='contact'>Contact</NavLink>
      </nav>}
      </div>


      <nav className="space-x-20 p-2 md:hidden">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='about'>About</NavLink>
        <NavLink to='contact'>Contact</NavLink>
      </nav>
    </div>
  )
}
export default Header