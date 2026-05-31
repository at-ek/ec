import { categorys } from "../data/products"
import Modal from "./Modal"
import PCNav from "./PCNav"

const Contents = ({ 
  setCurrentPage,
  filteredProducts, 
  selectedTags, 
  handleResetTags, 
  handleOpenModal, 
  handleCloseModal, 
  isModalOpen, 
  setIsModalOpen, 
  selectedProduct,
  handleChoicedTags, 
  handleAllChoicedTags,
  }) => {

  return (
    <>
      {isModalOpen &&
        <Modal
          setCurrentPage={setCurrentPage}
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          selectedProduct={selectedProduct}
        />
      }


      <section className="products">
        <h3 className="products-title">Lineup</h3>

        <PCNav 
          categorys={categorys}
          selectedTags={selectedTags}
          handleChoicedTags={handleChoicedTags}
          handleAllChoicedTags={handleAllChoicedTags}
          handleResetTags={handleResetTags}
        />
        
        <div className="products-items">
          {filteredProducts.map((pro) => {
            return (
              <ul key={pro.id} className='item' onClick={() => {
                handleOpenModal(pro)
              }}>
                <li className="item-img">
                  <img src={`/products/${pro.src[0]}`} alt={pro.name} />
                </li>
                <li className="item-colors">
                  {pro.colors.map(color => <span key={color} style={{background: color}}></span>)}
                </li>
                <li className="item-name">{pro.name}</li>
                <li className="item-price">
                  <p>¥{pro.price.toLocaleString()}</p>
                </li>
              </ul>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Contents;