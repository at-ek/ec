import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { products } from "../data/products";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const Product = ({ selectedProduct, setSelectedProduct, countProduct, setCountProduct, handleAddCart }) => {
  const [selectedImg, setSelectedImg] = useState('');

  useEffect(() => {
    if (selectedProduct?.src?.length) {
      setSelectedImg(selectedProduct?.src?.[0]);
    }
  }, [selectedProduct]);

  return (
    <div className="product">
      <div className="product-image">
        <img src={`/products/${selectedImg}`} alt={selectedProduct.name} />
        <div className="img-list">
          <Swiper modules={[Pagination]} spaceBetween={8} slidesPerView={'auto'} pagination={{ type: 'progressbar' }}>
            {selectedProduct?.src?.map(img => <SwiperSlide key={img} onClick={() => setSelectedImg(img)}><img src={`/products/${img}`} alt={selectedProduct?.name} /></SwiperSlide>)}
          </Swiper>
        </div>
        <div className="colors">
          {selectedProduct?.colors?.map(color => <span key={color} style={{ background: color }}></span>)}
        </div>
      </div>

      <div className="product-explanation">
        <h3 className='product-name'>{selectedProduct?.name}</h3>
        <p className="product-price">¥{selectedProduct?.price.toLocaleString()}(※税抜き)</p>
        <p className="product-ex">{selectedProduct?.ex}</p>

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
              className="icon-containar plus"
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
                  <SwiperSlide key={related.id} onClick={() => setSelectedProduct(related)}>
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