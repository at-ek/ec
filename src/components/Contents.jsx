import { categorys } from "../data/products"
import Modal from "./Modal"
import PCNav from "./PCNav"

const Contents = ({ filteredProducts, 
  selectedTags, 
  handleResetTags, 
  handleOpenModal, 
  handleCloseModal, 
  isModalOpen, 
  setIsModalOpen, 
  selectedProduct,
  handleChoicedTags, 
  handleAllChoicedTags,
  countProduct, 
  setCountProduct, 
  handleAddCart }) => {

  return (
    <>
      {isModalOpen &&
        <Modal
          handleCloseModal={handleCloseModal}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          selectedProduct={selectedProduct}
          countProduct={countProduct}
          setCountProduct={setCountProduct}
          handleAddCart={handleAddCart}
        />
      }


      <section className="product">
        <h3 className="product-title">Lineup</h3>

        <PCNav 
          categorys={categorys}
          selectedTags={selectedTags}
          handleChoicedTags={handleChoicedTags}
          handleAllChoicedTags={handleAllChoicedTags}
          handleResetTags={handleResetTags}
        />
        
        <div className="product-items">
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
                  <p>¥{pro.price}</p>
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