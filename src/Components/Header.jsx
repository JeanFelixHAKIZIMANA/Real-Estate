import {FaSearch} from 'react-icons/fa';

function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between mx-auto items-center max-w-6xl p-3'>
           <h1 className='font-bold text-sm sm:text-xl flex flex-wrap '>
             <span className='text-slate-500'>Flexy</span>
             <span className='text-slate-700'>Estates</span>
           </h1>
         <form className='bg-slate-100 rounded-lg p-3 flex items-center'>
           <input  type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
            <FaSearch className='text-slate-700' />
         </form>
         <ul className='flex gap-4 font-semibold'>
            <li className='hidden sm:inline hover:text-slate-500'>Home</li>
            <li className='hidden sm:inline hover:text-slate-500'>About</li>
            <li className='hover:text-slate-500'>Sign In</li>
         </ul>
        </div>
    </header>
  )
}

export default Header

