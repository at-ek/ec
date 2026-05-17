import { FaPlus } from "react-icons/fa6";
import { IoFilterOutline } from "react-icons/io5";
const PCNav = ({ categorys, selectedTags, handleChoicedTags, handleAllChoicedTags, handleResetTags }) => {
  return (
    <nav className="pc-nav">
      <div className="pc-product-header">
        <button className="icon-containar pc-product-hamb">
          <FaPlus className="icon" />
        </button>
        <div className="pc-product-filter">
          {
            selectedTags.length > 0 && (<button type="button" className="reset" onClick={() => handleResetTags()}>Reset</button>)
          }
          <button type='button' className="icon-containar filter"><IoFilterOutline className='icon' /><label>{selectedTags.length}</label></button>
        </div>
      </div>

      <div className='pc-product-menu'>
        {categorys.map((cat) => {
          return (
            <div key={cat.name} className='pc-product-category'>
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
  )
}

export default PCNav;