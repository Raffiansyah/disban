import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsPlay } from 'react-icons/bs';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function Header() {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }

  return (
    <header className="relative z-50">
      <div className="bg-slate-950 bg-opacity-25 backdrop-blur-sm flex justify-between items-center md:px-20 sm:px-4 w-full h-16 fixed text-white">
        <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
          <Link to="/" className="flex items-center">
            <BsPlay className="pt-1 text-white" size={48} />
            WatchMoree
          </Link>
        </div>
        <ul className="hidden md:flex items-center gap-10 text-xl text-white">
          <li className="hover:text-blue-500">
            <Link to="/explore/movie">Movies</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link to="/explore/tv">Tv Shows</Link>
          </li>
        </ul>
        <button type="button" className="md:hidden" onClick={handleNav}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>
      </div>
      <div className={nav ? 'fixed p-3 top-16 right-0 w-full bg-slate-950 bg-opacity-25 backdrop-blur-sm flex flex-col text-white text-xl' : 'hidden'}>
        <ul>
          <li className="p-4 hover:text-blue-500">
            <Link to="/explore/movie">Movies</Link>
          </li>
          <li className="p-4 hover:text-blue-500">
            <Link to="/explore/tv">Tv Shows</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
