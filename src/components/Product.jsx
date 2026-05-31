import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { products } from "../data/products";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const Product = ({
  selectedProduct,
  setSelectedProduct,
  colorProduct,
  setColorProduct,
  sizeProduct,
  setSizeProduct,
  countProduct,
  setCountProduct,
  productErrors,
  setProductErrors,
  productValidation,
  handleAddCart }) => {
  const [selectedImg, setSelectedImg] = useState('');

  useEffect(() => {
    if (selectedProduct?.src?.length) {
      setSelectedImg(selectedProduct?.src?.[0]);
    }
  }, [selectedProduct]);

  return (
    <div className="product">
      <ul className="product-image">
        <li className="img-main"><img src={`/products/${selectedImg}`} alt={selectedProduct.name} /></li>
        <li className="img-list">
          <Swiper modules={[Pagination]} spaceBetween={8} slidesPerView={'auto'} pagination={{ type: 'progressbar' }}>
            {selectedProduct?.src?.map(img => <SwiperSlide key={img} onClick={() => setSelectedImg(img)}><img src={`/products/${img}`} alt={selectedProduct?.name} /></SwiperSlide>)}
          </Swiper>
        </li>
      </ul>

      <ul className="product-explanation">
        <li className='product-name'>{selectedProduct?.name}</li>
        <li className="product-price">¥{selectedProduct?.price.toLocaleString()}(※税抜き)</li>
        <li className="product-ex">{selectedProduct?.ex}</li>
      </ul>

      <form>
        <div className="product-colors">
          <div className="buttons">
            {selectedProduct?.colors?.map(color => <button className={color === colorProduct ? 'active' : ''} type='button' key={color} value={color} style={{ background: color }} onClick={(e) => {
              setColorProduct(e.target.value);
              setProductErrors(prev => ({
                ...prev,
                color: ''
              }))
            }}></button>)}
          </div>

          <p className='error-message'>{productErrors.color}</p>
        </div>

        <div className="product-size">
          <div className="buttons">
            {selectedProduct?.size?.map(si => <button className={si === sizeProduct ? 'active' : ''} type='button' key={si} value={si} onClick={(e) => {
              setSizeProduct(e.target.value);
              setProductErrors(prev => ({
                ...prev,
                size: ''
              }))
            }}>{si}</button>)}
          </div>

          <p className='error-message'>{productErrors.size}</p>
        </div>

        <div className="product-nums">
          <button
            type="button"
            className="icon-containar minus"
            onClick={() => setCountProduct(prev => Math.max(1, prev - 1))}
          ><FaMinus className="icon" />
          </button>
          <label>{countProduct}</label>
          <button
            type="button"
            className="icon-containar plus"
            onClick={() => setCountProduct(prev => prev + 1)}
          ><FaPlus className="icon" />
          </button>
        </div>
        <button
          type='button'
          className="add-cart btn"
          onClick={() => {
            const isValid = productValidation();

            if (!isValid) return;

            handleAddCart({
              id: selectedProduct.id,
              src: selectedProduct.src,
              name: selectedProduct.name,
              price: selectedProduct.price,
              color: colorProduct,
              size: sizeProduct,
              count: countProduct
            });
          }}
        >カートに入れる
        </button>
      </form>



      <div className="related-products">
        <h3>関連商品</h3>
        <Swiper
          modules={[Pagination]}
          spaceBetween={8}
          slidesPerView={'auto'}
          pagination={{ type: 'progressbar' }}>
          {
            products
              .filter(target =>
                target.id !== selectedProduct.id &&
                selectedProduct?.tags?.some(tag =>
                  target.tags.includes(tag)
                )
              )
              .map(related => {
                return (
                  <SwiperSlide key={related.id} onClick={() => {
                    setSelectedProduct(related);
                    setColorProduct(null);
                    setSizeProduct(null);
                    setCountProduct(1);
                  }}>
                    <img
                      src={`/products/${related.src[0]}`}
                      alt={related.name}
                    />
                  </SwiperSlide>
                )
              })
          }
        </Swiper>
      </div>
    </div>
  )
}

export default Product;