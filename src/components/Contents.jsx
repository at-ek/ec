import Modal from "./Modal"

const Contents = ({ filteredProducts, selectedTags, handleResetTags, handleOpenModal, handleCloseModal, isModalOpen, setIsModalOpen, selectedProduct, countProduct, setCountProduct, handleAddCart }) => {

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
        <h3>Lineup</h3>

        {selectedTags.length > 0 && (
          <button type='button' className='reset' onClick={() => handleResetTags()}>Reset</button>
        )}
        
        <div className="product-items">
          {filteredProducts.map((pro) => {
            return (
              <ul key={pro.id} className='item' onClick={() => {
                handleOpenModal(pro)
              }}>
                <li className="item-img">
                  <img src={`../public/products/${pro.src}`} alt={pro.name} />
                </li>
                <li className="item-name">
                  <h4>{pro.name}</h4>
                </li>
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