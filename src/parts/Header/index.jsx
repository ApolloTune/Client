import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faUserPlus, faCircleInfo, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Login from '../../components/Login'
import Register from '../../components/Register';
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  const closeDialog = () => {
    setLogin(false);
    setRegister(false);
  }
  const openLogin = () => {
    setLogin(true);
  }
  const openRegister = () => {
    setRegister(true);
  }
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
      <Login login={login} closeDialog={closeDialog} />
      <Register register={register} closeDialog={closeDialog} />
      <div className="flex flex-col md:flex-row items-center justify-between">
        <Link to={'/'} className='flex items-center space-x-3'>
          <img className='w-15 h-20 rounded-[32px]' src="https://raw.githubusercontent.com/ApolloTune/Client/main/Images/apollo.png" alt="Logo" />
          <p className="font-mono text-2xl font-semibold tracking-wider not-italic">ApolloTune AI</p>
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {menuOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
          </button>
        </div>

        <nav className={`mt-2 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ${menuOpen && windowWidth < 768 ? 'block' : 'hidden'}`}>
          <button>
            <FontAwesomeIcon onClick={openRegister} className='w-9 h-9 hover:underline' icon={faUserPlus} />
          </button>

          <button>
            <FontAwesomeIcon onClick={openLogin} className='w-9 h-9 hover:underline' icon={faRightFromBracket} />
          </button>

          <button>
            <FontAwesomeIcon className='w-9 h-9 hover:underline' icon={faCircleInfo} />
          </button>
        </nav>

        <nav className={`hidden md:flex space-x-24 ${menuOpen ? 'flex flex-row' : 'hidden'}`}>
          <button>
            <FontAwesomeIcon onClick={openRegister} className='w-9 h-9' icon={faUserPlus} />
          </button>

          <button>
            <FontAwesomeIcon onClick={openLogin} className='w-9 h-9' icon={faRightFromBracket} />
          </button>
          <a href="https://github.com/ApolloTune" target='_blank'>
            <button>
              <FontAwesomeIcon className='w-9 h-9' icon={faCircleInfo} />
            </button>
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
