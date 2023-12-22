import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faUserPlus, faCircleInfo, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`container-sm mx-auto bg-pink-50 p-4 text-white ${menuOpen ? 'h-auto' : 'h-25'}`}>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className='flex items-center space-x-3'>
          <img className='w-15 h-20 rounded-[32px]' src="/Images/apollo.png" alt="Logo" />
          <div className="font-inter italic text-2xl font-semibold tracking-wider">ApolloTune AI</div>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {menuOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
          </button>
        </div>

        <nav className={`mt-2 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ${menuOpen && windowWidth < 768 ? 'block' : 'hidden'}`}>
          <FontAwesomeIcon className='w-9 h-9 hover:underline' icon={faUserPlus} />
          <FontAwesomeIcon className='w-9 h-9 hover:underline' icon={faRightFromBracket} />
          <FontAwesomeIcon className='w-9 h-9 hover:underline' icon={faCircleInfo} />
        </nav>

        <nav className={`hidden md:flex space-x-24 ${menuOpen ? 'flex flex-row' : 'hidden'}`}>
          <FontAwesomeIcon className='w-9 h-9' icon={faUserPlus} />
          <FontAwesomeIcon className='w-9 h-9' icon={faRightFromBracket} />
          <FontAwesomeIcon className='w-9 h-9' icon={faCircleInfo} />
        </nav>
      </div>
    </div>
  );
}

export default Header;
