import { NavLink } from "react-router-dom"



const Header = () => {
  return (
    <div className=" flex items-baseline justify-between p-2 bg-black text-white ">
      <h1 >@M.king</h1>
      <nav className="space-x-20 p-2">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='about'>About</NavLink>
        <NavLink to='contact'>Contact</NavLink>
      </nav>
    </div>
  )
}
export default Header