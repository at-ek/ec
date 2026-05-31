import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { IoCloseCircleOutline } from "react-icons/io5";

const Modal = ({ 
  setCurrentPage, 
  handleCloseModal, 
  isModalOpen, 
  setIsModalOpen, 
  selectedProduct, 
  }) => {
  const [currentImg, setCurrentImg] = useState('');

  useEffect(() => {
    if (selectedProduct?.src?.length) {
      setCurrentImg(selectedProduct?.src?.[0]);
    }
  }, [selectedProduct]);


  if (!isModalOpen) return null;
  return (
    <div className={`modal ${isModalOpen ? 'open' : ''}`} onClick={handleCloseModal}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className='icon-containar close' onClick={handleCloseModal}><IoCloseCircleOutline className="icon" /></button>

        <ul className='modal-item'>
          <li className='item-img'>{currentImg && (<img src={`/products/${currentImg}`} />)}</li>
          <li className='item-img-list'>
            <Swiper modules={[Pagination]} spaceBetween={8} slidesPerView={'auto'} pagination={{type: 'progressbar'}}>
              {selectedProduct?.src?.map(img => {
                return (
                  <SwiperSlide key={img}>
                    <img key={img} src={`/products/${img}`} onClick={() => setCurrentImg(img)} />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </li>
          <li className='item-colors'>
            {selectedProduct?.colors.map(color => <span key={color} style={{ background: color }}></span>)}
          </li>
          <li className='item-size'>
            {selectedProduct?.size?.map(si => <span key={si}>{si}</span>)}
          </li>
          <li className='item-name'>{selectedProduct?.name}</li>
          <li className='item-price'>¥{selectedProduct?.price.toLocaleString()}<label>(※税抜き)</label></li>
          <li className='item-link'><button type="button" onClick={() => {
            setIsModalOpen(false);
            setCurrentPage('product');
          }}>もっと見る</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Modal;