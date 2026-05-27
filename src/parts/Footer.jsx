import { useState } from "react"
import { IoMdArrowDropdown } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = ({ setCurrentPage }) => {
  const [footMenuOpen, setFootMenuOpen] = useState(null);

  const handleFootMenuOpen = (val) => {
    setFootMenuOpen(
      footMenuOpen === val
        ? null : val
    );
  }


  return (
    <footer>
      {/* <button className='copy-id' type='button' value='1192kamakura' onClick={(e) => {
          navigator.clipboard.writeText(e.target.value);
        }}>IDコピー</button> */}
      <nav className="footer-menu">
        <dl className='footer-menu-category contact'>
          <dt><button className='menu-title' type='button' value='contact' onClick={(e) => handleFootMenuOpen(e.target.value)}>サポート</button><IoMdArrowDropdown className="arrow" /></dt>
          <dd className={footMenuOpen === 'contact' ? 'open' : ''}>
            <ul>
              <li><button
                type='button'
                onClick={() => setCurrentPage('dami')}>
                よくあるご質問</button></li>

              <li><button
                type='button'
                onClick={() => setCurrentPage('dami')}>
                アカウント</button></li>

              <li><button
                type='button'
                onClick={() => setCurrentPage('dami')}>
                支払方法</button></li>

              <li><button
                type='button'
                onClick={() => setCurrentPage('dami')}>
                注文</button></li>

              <li><button
                type='button'
                onClick={() => setCurrentPage('dami')}>
                配送</button></li>

              <li><button
                type='button'
                onClick={() => setCurrentPage('dami')}>
                返品・返金</button></li>

              <li><button
                type='button'
                onClick={() => setCurrentPage('dami')}>
                お問い合わせ</button></li>
            </ul>
          </dd>
        </dl>

        <dl className='footer-menu-category company'>
          <dt><button type='button' value='company' onClick={(e) => handleFootMenuOpen(e.target.value)}>COMPANY</button><IoMdArrowDropdown className="arrow" /></dt>
          <dd className={footMenuOpen === 'company' ? 'open' : ''}>
            <ul>
              <li><button
                type='button'
                onClick={() => setCurrentPage('dami')}>
                会社概要</button></li>

              <li><button
                type='button'
                onClick={() => setCurrentPage('dami')}>
                PAMA SPORTS</button></li>

              <li><button
                type='button'
                onClick={() => setCurrentPage('dami')}>
                PAMA FACILITY</button></li>
            </ul>
          </dd>
        </dl>

        <dl className='footer-menu-sns'>
          <dt>SNS</dt>
          <dd>
            <ul>
              <li><button
                type='button'
                onClick={() => setCurrentPage('dami')}>
                <FaSquareXTwitter className="icon x" /></button>
              </li>

              <li><button
                type='button'
                onClick={() => setCurrentPage('dami')}>
                <FaInstagram className="icon insta" /></button>
              </li>
            </ul>
          </dd>
        </dl>
      </nav>

      <nav className="pc-footer-menu">
        <dl className='pc-footer-menu-category'>
          <dt><button className='menu-title' type='button'>サポート</button></dt>
          <dd>
            <ul>
              <li><button
                type='button'
                onClick={() => setCurrentPage('dami')}>
                よくあるご質問</button></li>

              <li><button
                type='button'
                onClick={() => setCurrentPage('dami')}>
                アカウント</button></li>

              <li><button
                type='button'
                onClick={() => setCurrentPage('dami')}>
                支払方法</button></li>

              <li><button
                type='button'
                onClick={() => setCurrentPage('dami')}>
                注文</button></li>

              <li><button
                type='button'
                onClick={() => setCurrentPage('dami')}>
                配送</button></li>

              <li><button
                type='button'
                onClick={() => setCurrentPage('dami')}>
                返品・返金</button></li>

              <li><button
                type='button'
                onClick={() => setCurrentPage('dami')}>
                お問い合わせ</button></li>
            </ul>
          </dd>
        </dl>

        <dl className='pc-footer-menu-category'>
          <dt><button type='button'>COMPANY</button></dt>
          <dd>
            <ul>
              <li><button
                type='button'
                onClick={() => setCurrentPage('dami')}>
                会社概要</button></li>

              <li><button
                type='button'
                onClick={() => setCurrentPage('dami')}>
                PAMA SPORTS</button></li>

              <li><button
                type='button'
                onClick={() => setCurrentPage('dami')}>
                PAMA FACILITY</button></li>
            </ul>
          </dd>
        </dl>

        <dl className='pc-footer-menu-sns'>
          <dt>SNS</dt>
          <dd>
            <ul>
              <li><button
                type='button'
                onClick={() => setCurrentPage('dami')}>
                <FaSquareXTwitter className="icon x" /></button>
              </li>

              <li><button
                type='button'
                onClick={() => setCurrentPage('dami')}>
                <FaInstagram className="icon insta" /></button>
              </li>
            </ul>
          </dd>
        </dl>
      </nav>

      <p className="copy-light"><small>&copy; PAMA since 1947</small></p>
    </footer>
  )
}

export default Footer