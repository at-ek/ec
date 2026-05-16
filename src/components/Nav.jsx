import { categorys } from '../data/products';
import { IoIosArrowDropleft } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoFilterOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";


const Nav = ({
  toggleNav,
  setToggleNav,
  selectedTags,
  handleChoicedTags,
  handleAllChoicedTags,
  setCurrentPage,
  currentUser,
  handleLogout,
  currentCartCount }) => {

  return (
    <aside className={`menu ${toggleNav ? 'open' : ''}`}>
      <nav>
        <button 
          type="button" 
          className='back icon-containar' 
          onClick={() => {
          setToggleNav(false);
        }}><IoIosArrowDropleft className='icon' />
        </button>

        <div className='account-menu'>
          {
            currentUser
              ? (
                <div className='account-buttons'>
                  <button type='button' className='user icon-containar' ><MdAccountCircle className='icon'/><p>{currentUser.aid}</p></button>
                  <button type='button' className='logout btn' onClick={handleLogout}>ログアウト</button>
                </div>
              )
              : (
                <div className='account-buttons'>
                  <button type='button' className='login btn' onClick={() => {
                    setCurrentPage('login');
                    setToggleNav(false);
                    }}>ログイン</button>
                  <button type='button' className='create btn' onClick={() => {
                    setCurrentPage('create');
                    setToggleNav(false);
                    }}>アカウント作成</button>
                </div>
              )
          }

          <button type='button' className='cart icon-containar' onClick={() => {
            setCurrentPage('cart');
            setToggleNav(false);
            }}><IoCartOutline className='icon' /><label>{currentCartCount}</label></button>
        </div>

        <div className="product-header">
          <h3>Product</h3>
          <button type='button' className="icon-containar filter"><IoFilterOutline className='icon'/><label>{selectedTags.length}</label></button>
        </div>
        <div className='product-menu'>
            
          {categorys.map((cat) => {
            return (
              <div key={cat.name} className='product-category'>
                <h3>{cat.name}</h3>
                <ul>
                  <li>
                    <button
                      type='button'
                      onClick={() => {
                        handleAllChoicedTags(cat.tags);
                        setCurrentPage('contents');
                        }}>
                      All
                    </button>
                  </li>
                  {cat.tags.map((tag) => {
                    return (
                      <li key={cat.name + tag}>
                        <button
                          type='button'
                          className={selectedTags.includes(tag) ? 'selected' : ''}
                          onClick={() => {
                            handleChoicedTags(tag);
                            setCurrentPage('contents');
                            }}>
                          {tag}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </nav>
    </aside>
  )
}

export default Nav;