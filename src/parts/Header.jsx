import { FaPlus } from "react-icons/fa6";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";

const Header = ({ setCurrentPage, toggleNav, setToggleNav, currentCartCount }) => {
  return (
    <header>
      <div className="header-top">
        <button type='button' onClick={() => {
          setCurrentPage('contents');
          setToggleNav(false);
        }}>
          <h1 className="logo"><img src='/logo.png' alt="logo" /></h1>
        </button>

        <div className="buttons">
          <button type="button" className="icon-containar account" onClick={() => setCurrentPage('login')}>
            <RiAccountCircleLine className="icon" />
          </button>
          <button type="button" className="icon-containar cart" onClick={() => setCurrentPage('cart')}>
            <IoCartOutline className="icon" />
            {currentCartCount && <label>{currentCartCount}</label>}
          </button>
        </div>
      </div>


      <button
        className={`icon-containar hamb ${toggleNav ? 'open' : ''}`}
        onClick={() => setToggleNav(prev => !prev)}
      >
        <FaPlus className='icon' />
      </button>
    </header>
  )
}

export default Header;