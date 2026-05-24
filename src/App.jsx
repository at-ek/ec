import { useState } from 'react';

import { products } from './data/products';
import Nav from './components/Nav';
import Slider from './components/Slider';
import Contents from './components/Contents';
import Login from './components/Login';
import CreateAccount from './components/CreateAc';
import Cart from './components/Cart';
import './css/nav.css';
import './css/slider.css';
import './css/contents.css';
import './css/modal.css';
import './css/account.css';
import './css/cart.css';
import './css/animation.css';
import { FaPlus } from "react-icons/fa6";

const App = () => {
  // アカウントstate
  const [createForm, setCreateForm] = useState({
    aid: '',
    pass: '',
    confirmPass: ''
  });
  const [errors, setErrors] = useState({
    aid: '',
    pass: '',
    confirmPass: ''
  })

  const [loginForm, setLoginForm] = useState({
    aid: '',
    pass: '',
  })
  const [currentPage, setCurrentPage] = useState('contents');
  const [currentUser, SetCurrentUser] = useState(null)
  const [users, setUsers] = useState([]);
  // アカウントstate

  // アカウント作成・追加
  const idValidation = (accountId) => {
    return (
      accountId.length < 8
      ||
      accountId.length > 16
      ||
      !/^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,16}$/.test(accountId)
    )
  }
  const passValidation = (accountPass) => {
    return (
      accountPass.length < 8
      ||
      accountPass.length > 16
      ||
      !/^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,16}$/.test(accountPass)
    )
  }

  const handleSubmit = () => {
    const newErrors = {
      aid: '',
      pass: '',
      confirmPass: ''
    }

    if (idValidation(createForm.aid)) {
      newErrors.aid = '※IDを正しく入力してください'
    }

    if (passValidation(createForm.pass)) {
      newErrors.pass = '※パスワードを正しく入力してください'
    }

    if (createForm.pass !== createForm.confirmPass) {
      newErrors.confirmPass = '※パスワードが一致しません'
    }

    setErrors(newErrors);

    if (newErrors.aid || newErrors.pass || newErrors.confirmPass) return;

    handleAddAccount();
  }

  const handleAddAccount = () => {
    const newAccount = {
      uid: crypto.randomUUID(),
      aid: createForm.aid,
      pass: createForm.pass
    }

    setUsers(prev => [...prev, newAccount]);
    setCreateForm({
      aid: '',
      pass: '',
      confirmPass: ''
    })
    SetCurrentUser(newAccount);
    setCurrentPage('contens');
  }

  const handleRemoveAccount = () => { }
  // アカウント作成・追加・削除

  // ログイン・アウト機能
  const handleLogin = ({ aid, pass }) => {
    const loginUser = users.find(user => user.aid === aid);

    if (!loginUser) {
      alert('入力されたアカウントは存在しません');
      return;
    }

    if (loginUser.pass !== pass) {
      alert('パスワードが正しくありません');
      return;
    }

    SetCurrentUser(loginUser);
    setLoginForm({ aid: '', pass: '' })
    setCurrentPage('contents');
  }

  const handleLogout = () => {
    const confi = confirm('ログアウトしますか？');

    if (confi === true) {
      SetCurrentUser(null);
      setCurrentPage('contents');
    } else {
      return null;
    }
  }
  // ログイン・アウト機能

  // 絞り込み機能
  const [selectedTags, setSelectedTags] = useState([]);

  const handleChoicedTags = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(item => item !== tag)
        : [...prev, tag]
    )
  }
  const handleAllChoicedTags = (tags) => {
    setSelectedTags(prev => {
      const allSelectedTags = tags.every(tag => prev.includes(tag));

      if (allSelectedTags) {
        return prev.filter(tag => !tags.includes(tag))
      } else {
        return [...new Set([...prev, ...tags])]
      }
    })
  }
  const handleResetTags = () => {
    setSelectedTags([]);
  }

  const filteredProducts =
    selectedTags.length === 0
      ? products
      : products.filter(pro =>
        selectedTags.some(tag => pro.tags.includes(tag))
      );
  // 絞り込み機能

  // モーダル
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [countProduct, setCountProduct] = useState(1);

  const handleOpenModal = (item) => {
    setSelectedProduct(item);
    setCountProduct(1);
    setIsModalOpen(true);
  }
  const handleCloseModal = () => {
    setIsModalOpen(false);
  }
  // モーダル

  // カート機能
  const [cart, setCart] = useState([]);
  const [isConfirming, setIsConfirming] = useState(false);
  const handleAddCart = (productData) => {
    setCart(prev => {
      const existItem = prev.find(item => item.id === productData.id);

      if (existItem) {
        return prev.map(item =>
          item.id === productData.id
            ? { ...item, count: item.count + productData.count }
            : item
        )
      } else {
        return [...prev, productData];
      }
    });
  }
  const handleRemoveProduct = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  }
  const handleConfirmBuy = () => {
    if (cart.length === 0) {
      alert('カートに商品が入っていません')
      return;
    }

    const isConfirm = window.confirm('注文を確定しますか？');
    if (!isConfirm) return;

    if (!currentUser) {
      alert('ログインしてください')
      setCurrentPage('login');
      return;
    }

    alert('注文を確定しました');

    setCart([]);
    setIsConfirming(false);
  }

  const handleChangeProductCount = (id, type) => {
    setCart(prev =>
      prev.map(item => {
        if (item.id !== id) return item

        if (type === 'increase') {
          return { ...item, count: item.count + 1 }
        }

        if (type === 'decrease') {
          return {
            ...item,
            count: item.count > 1 ? item.count - 1 : 1
          }
        }

        return item
      })
    )
  }

  const currentCartCount = cart.reduce((sum, item) => sum + item.count, 0);
  const currentCartAmount = Math.round(
    cart.reduce((sum, item) => sum + item.price * item.count, 0) * 1.1
  );
  // カート機能

  const [toggleNav, setToggleNav] = useState(false);

  return (
    <>
      <header>
        <button type='button' onClick={() => {
          setCurrentPage('contents');
          setToggleNav(false);
        }}>
          <h1 className="logo"><img src='/logo.png' alt="logo" /></h1>
        </button>

        <button
          className={`icon-containar hamb ${toggleNav ? 'open' : ''}`}
          onClick={() => setToggleNav(prev => !prev)}
        >
          <FaPlus className='icon' />
        </button>
      </header>

      {/* <a href='#' className="top">
        <img src="/top.png" alt="top" />
      </a> */}

      <Nav
        toggleNav={toggleNav}
        setToggleNav={setToggleNav}
        selectedTags={selectedTags}
        setCurrentPage={setCurrentPage}
        handleChoicedTags={handleChoicedTags}
        handleAllChoicedTags={handleAllChoicedTags}
        handleResetTags={handleResetTags}
        currentUser={currentUser}
        handleLogout={handleLogout}
        currentCartCount={currentCartCount}
      />

      {currentPage === 'contents' &&
        <Slider />
      }

      <main>
        {currentPage === 'contents' &&
          <Contents
            filteredProducts={filteredProducts}
            selectedTags={selectedTags}
            handleResetTags={handleResetTags}
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            selectedProduct={selectedProduct}
            handleChoicedTags={handleChoicedTags}
            handleAllChoicedTags={handleAllChoicedTags}
            countProduct={countProduct}
            setCountProduct={setCountProduct}
            handleAddCart={handleAddCart}
          />}

        {currentPage === 'login' &&
          <Login
            loginForm={loginForm}
            setLoginForm={setLoginForm}
            handleLogin={handleLogin}
            setCurrentPage={setCurrentPage}
          />}

        {currentPage === 'create' &&
          <CreateAccount
            createForm={createForm}
            setCreateForm={setCreateForm}
            handleSubmit={handleSubmit}
            errors={errors}
          />}

        {currentPage === 'cart' &&
          <Cart
            cart={cart}
            handleChangeProductCount={handleChangeProductCount}
            handleRemoveProduct={handleRemoveProduct}
            currentCartAmount={currentCartAmount}
            isConfirming={isConfirming}
            setIsConfirming={setIsConfirming}
            handleConfirmBuy={handleConfirmBuy}
          />}
      </main>

      <footer>
        <button className='copy-id' type='button' value='1192kamakura' onClick={(e) => {
          navigator.clipboard.writeText(e.target.value);
        }}>IDコピー</button>
        <p><small>&copy; PAMA since 1947</small></p>
      </footer>
    </>
  )
}

export default App