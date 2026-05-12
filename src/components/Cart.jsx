import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { IoTrashOutline } from "react-icons/io5";

const Cart = ({ cart, handleChangeProductCount, handleRemoveProduct, currentCartAmount, isConfirming, setIsConfirming, handleConfirmBuy }) => {
  return (
    <>
      {!isConfirming ? (
        <section className="cart-product">
          <h3>商品</h3>

          {cart.map(pro => (
            <ul key={pro.id}>
              <li>{pro.name}</li>
              <li>{pro.price}円</li>
              <li className="cart-buttons">
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

          <p>
            <label>合計金額</label>
            {currentCartAmount}
            円
          </p>

          <button className='buy' onClick={() => setIsConfirming(true)}>
            購入する
          </button>
        </section>
      ) : (
        <section className="cart-confirm">
          <h3>購入確認</h3>

          {cart.map(item => (
            <ul key={item.id}>
              <li>{item.name}</li>
              <li>{item.price}</li>
              <li>×</li>
              <li>{item.count}</li>
            </ul>
          ))}

          <p>
            <label>合計金額</label>
            {currentCartAmount}
            円
          </p>

          <button className="agree" onClick={handleConfirmBuy}>
            確定
          </button>

          <button className="prev" onClick={() => setIsConfirming(false)}>
            戻る
          </button>
        </section>
      )}
    </>
  )}

  export default Cart;