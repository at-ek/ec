import { useState, useEffect } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const Modal = ({ handleCloseModal, isModalOpen, setIsModalOpen, selectedProduct, countProduct, setCountProduct, handleAddCart }) => {
  const [currentImg, setCurrentImg] = useState('');

  useEffect(() => {
    if(selectedProduct?.src?.length) {
      setCurrentImg(selectedProduct?.src?.[0]);
    }
  }, [selectedProduct]);
  

  if (!isModalOpen) return null;
  return (
    <div className={`modal ${isModalOpen ? 'open' : ''}`} onClick={handleCloseModal}>
      <button className='icon-containar close' onClick={handleCloseModal}><IoCloseCircleOutline className="icon" /></button>

      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <ul className='modal-item'>
          <li className='item-img'>{currentImg && (<img src={`/products/${currentImg}`}/>)}</li>
          <li className='item-img-list'>
            {selectedProduct?.src?.map(img => {
              return (
                <img key={img} src={`/products/${img}`} onClick={() => setCurrentImg(img)}/>
              )
            })}
          </li>
          <li className='item-name'>{selectedProduct?.name}</li>
          <li className='item-price'>¥{selectedProduct?.price}<label>(※税抜き)</label></li>
          <li className='item-ex'>{selectedProduct?.ex}</li>
        </ul>

        <form>
          <div className="nums">
            <button
              type="button"
              className="icon-containar minus"
              onClick={() => setCountProduct(prev => Math.max(1, prev - 1))}
            ><FaMinus className="icon" />
            </button>
            <label>{countProduct}</label>
            <button
              type="button"
              className="plus"
              onClick={() => setCountProduct(prev => prev + 1)}
            ><FaPlus className="icon" />
            </button>
          </div>
          <button
            type='button'
            className="add-cart btn"
            onClick={() => {
              handleAddCart({
              id: selectedProduct.id,
              src: selectedProduct.src,
              name: selectedProduct.name,
              price: selectedProduct.price,
              count: countProduct
            });
            setIsModalOpen(false);
          }}
          >カートに入れる
          </button>
        </form>
      </div>
    </div>
  )
}

export default Modal;