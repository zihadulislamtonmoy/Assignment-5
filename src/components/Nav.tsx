import logo from '../assets/logo-text.png';
import { HiMenu } from "react-icons/hi";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 px-4 md:px-8 py-3">
      <div className="mx-auto flex items-center justify-between">
        
  
        <details className="group md:hidden relative">
          <summary className="list-none cursor-pointer text-gray-700 text-2xl p-1 focus:outline-none">
            <HiMenu />
          </summary>

          <div className="absolute left-0 top-10 w-48 bg-white border border-gray-100 shadow-lg rounded-xl p-3 flex flex-col space-y-2">
            <a href="" >Home</a>
            <a href="" >Technologies</a>
            <a href="">Projects</a>
            <a href="">About</a>
            <a href="">Contact</a>
          </div>
        </details>

        <div className="flex items-center gap-2">
         <img src={logo} alt=''/>
        </div>

        <div className="hidden md:flex items-center space-x-8 font-medium text-gray-600 text-sm">
          <a href="">Home</a>
          <a href="">Technologies</a>
          <a href="">Projects</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>

     
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="text-xs sm:text-sm font-semibold text-gray-700 hover:text-gray-900 px-2 sm:px-3 py-1.5">
            Sign In
          </button>
          <button className="text-xs sm:text-sm font-semibold text-white bg-[#C0268C] px-3 sm:px-4 py-1.5 rounded-full shadow-sm hover:opacity-90">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;