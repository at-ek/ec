import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { IoTrashOutline } from "react-icons/io5";

const Cart = ({ cart, handleChangeProductCount, handleRemoveProduct, currentCartAmount, isConfirming, setIsConfirming, handleConfirmBuy }) => {
  return (
    <>
      {!isConfirming ? (
        <section className="cart-product">
          <h3>商品</h3>

          <div className="product-table">
            <dl>
              <dt className="name">商品</dt>
              <dt className="price">金額</dt>
              <dt className="count">数量</dt>
            </dl>
          </div>
          {cart.map(pro => (
            <ul key={pro.id}>
              <li className="name">{pro.name}</li>
              <li className="price">{Math.round(pro.price * 1.1).toLocaleString()}円</li>
              <li className="count cart-buttons">
                <button className='minus icon-containar' onClick={() => handleChangeProductCount(pro.id, 'decrease')}>
                  <FaMinus className="icon" />
                </button>

                <label>{pro.count}</label>

                <button className='minus icon-containar' onClick={() => handleChangeProductCount(pro.id, 'increase')}>
                  <FaPlus className="icon" />
                </button>

                <button className='trash icon-containar' onClick={() => handleRemoveProduct(pro.id)}>
                  <IoTrashOutline className="icon" />
                </button>
              </li>
            </ul>
          ))}

          <h4>
            <label>合計金額</label>
            {currentCartAmount}
            円
          </h4>

          <button className='buy btn' onClick={() => setIsConfirming(true)}>
            購入する
          </button>
        </section>
      ) : (
        <section className="cart-confirm">
          <h3>購入確認</h3>

          <div className="confirm-table">
            <dl>
              <dt className="name">商品</dt>
              <dt className="price">金額</dt>
              <dt className="count">数量</dt>
            </dl>
          </div>

          {cart.map(item => (
            <ul key={item.id}>
              <li className="name">{item.name}</li>
              <li className="price">{Math.round(item.price * 1.1).toLocaleString()}</li>
              <li className="count">× {item.count}</li>
            </ul>
          ))}

          <h4>
            <label>合計金額</label>
            {currentCartAmount}
            円
          </h4>

          <div className="buttons">
            <button className="prev btn" onClick={() => setIsConfirming(false)}>
              戻る
            </button>

            <button className="agree btn" onClick={handleConfirmBuy}>
              確定
            </button>
          </div>

        </section>
      )}
    </>
  )
}

export default Cart;