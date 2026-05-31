import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { IoTrashOutline } from "react-icons/io5";

const Cart = ({
  cart,
  handleChangeProductCount,
  handleRemoveProduct,
  currentCartAmount,
  isConfirming,
  setIsConfirming,
  handleConfirmBuy }) => {
  return (
    <>
      {!isConfirming ? (
        <section className="cart-product">
          <h3>カート</h3>
          {cart.map(pro => (
            <ul key={pro.id}>
              <li className="name">
                <label>商品：</label>
                <span>{pro.name}</span>
              </li>
              <li className="color">
                <label>カラー：</label>
                <span style={{ background: pro.color }}></span>
              </li>
              <li className="size">
                <label>サイズ：</label>
                <span>{pro.size}</span>
              </li>
              <li className="price">
                <label>金額：</label>
                <span>{Math.round(pro.price * 1.1)}円（※税込み）</span>
              </li>
              <li className="count">
                <label>個数：</label>
                <span>{pro.count}</span>
                <div className="buttons">
                  <button className='minus icon-containar' onClick={() => handleChangeProductCount(pro.id, 'decrease')}>
                    <FaMinus className="icon" />
                  </button>

                  <button className='plus icon-containar' onClick={() => handleChangeProductCount(pro.id, 'increase')}>
                    <FaPlus className="icon" />
                  </button>

                  <button className='trash icon-containar' onClick={() => handleRemoveProduct(pro.id)}>
                    <IoTrashOutline className="icon" />
                  </button>
                </div>
              </li>
            </ul>
          ))}

          <h4>
            <label>合計金額:</label>
            <span>{currentCartAmount}円</span>
          </h4>

          <button className='buy btn' onClick={() => setIsConfirming(true)}>
            購入する
          </button>
        </section>
      ) : (
        <section className="cart-confirm">
          <h3>購入確認</h3>
          {cart.map(item => (
            <ul key={item.id}>
              <li className="name">
                <label>商品：</label>
                <span>{item.name}</span>
              </li>
              <li className="color">
                <label>カラー：</label>
                <span style={{ background: item.color }}></span>
              </li>
              <li className="size">
                <label>サイズ：</label>
                <span>{item.size}</span>
              </li>
              <li className="price">
                <label>金額：</label>
                <span>{Math.round(item.price * 1.1)}円（※税込み）</span>
              </li>
              <li className="count">
                <label>個数：</label>
                <span>{item.count}</span>
              </li>
            </ul>
          ))}

          <h4>
            <label>合計金額:</label>
            <span>{currentCartAmount}円</span>
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