import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className='h-[65px] w-full bg-[#C095E4] px-4 flex justify-between items-center'>
        <div className="flex justify-center items-center h-full w-[23%] text-lg font-bold md:text-2xl sm:text-2xl font-mono">Multi Convert</div>
        <div className="hidden md:flex h-full w-[60%] justify-center items-center">
          <ul className='flex justify-center gap-12 items-center font-semibold'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Help'>Help</Link></li>
            <li><Link to='/Contact'>Contact</Link></li>
          </ul>
        </div>
        <div className="h-full w-[7%] flex justify-end items-center">
          <Link to='/Login'>
            <button className='py-2 px-4 rounded-lg bg-black text-white'>Login</button>
          </Link>
        </div>
        <button 
          className="md:hidden text-2xl" 
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden w-full bg-[#C095E4] px-4 py-2">
          <ul className='flex flex-col gap-2 font-semibold'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Help'>Help</Link></li>
            <li><Link to='/Contact'>Contact</Link></li>
          </ul>
        </div>
      )}

      <nav className='h-[20vh] border w-full flex flex-col md:flex-row items-center  justify-center  px-4 md:px-14 gap-4 md:gap-24'>
        <Link to='/Currency' className=" shadow-[0_3px_10px_rgb(0,0,0,0.2)]  group relative inline-block overflow-hidden rounded border border-gray-100 bg-transparent px-8 py-3 text-sm font-medium text-slate-800 hover:text-violet-600 focus:outline-none focus:ring">
          <span className="absolute left-0 top-0 h-0 w-0 border-t-2 border-violet-600 transition-all duration-200 group-hover:w-full"></span>
          <span className="absolute right-0 top-0 h-0 w-0 border-r-2 border-violet-600 transition-all duration-200 group-hover:h-full"></span>
          <span className="absolute bottom-0 right-0 h-0 w-0 border-b-2 border-violet-600 transition-all duration-200 group-hover:w-full"></span>
          <span className="absolute bottom-0 left-0 h-0 w-0 border-l-2 border-violet-600 transition-all duration-200 group-hover:h-full"></span>
          Currency Converter
        </Link>
        
        <Link to='/Temprature' className="  shadow-[0_3px_10px_rgb(0,0,0,0.2)] group relative inline-block overflow-hidden rounded border border-gray-100 bg-transparent px-8 py-3 text-sm font-medium text-slate-800 hover:text-violet-600 focus:outline-none focus:ring">
          <span className="absolute left-0 top-0 h-0 w-0 border-t-2 border-violet-600 transition-all duration-200 group-hover:w-full"></span>
          <span className="absolute right-0 top-0 h-0 w-0 border-r-2 border-violet-600 transition-all duration-200 group-hover:h-full"></span>
          <span className="absolute bottom-0 right-0 h-0 w-0 border-b-2 border-violet-600 transition-all duration-200 group-hover:w-full"></span>
          <span className="absolute bottom-0 left-0 h-0 w-0 border-l-2 border-violet-600 transition-all duration-200 group-hover:h-full"></span>
          Temperature Converter
        </Link>

        <Link to='/Weight' className="  shadow-[0_3px_10px_rgb(0,0,0,0.2)]  group relative inline-block overflow-hidden rounded border border-gray-100 bg-transparent px-8 py-3 text-sm font-medium text-slate-800 hover:text-violet-600 focus:outline-none focus:ring">
          <span className="absolute left-0 top-0 h-0 w-0 border-t-2 border-violet-600 transition-all duration-200 group-hover:w-full"></span>
          <span className="absolute right-0 top-0 h-0 w-0 border-r-2 border-violet-600 transition-all duration-200 group-hover:h-full"></span>
          <span className="absolute bottom-0 right-0 h-0 w-0 border-b-2 border-violet-600 transition-all duration-200 group-hover:w-full"></span>
          <span className="absolute bottom-0 left-0 h-0 w-0 border-l-2 border-violet-600 transition-all duration-200 group-hover:h-full"></span>
          Weight Converter
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
