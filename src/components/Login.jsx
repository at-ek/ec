import { useState, useRef } from 'react'

const Login = ({loginForm, setLoginForm, handleLogin, setCurrentPage}) => {

  return (
    <>
      <form className='login-form'>
        <ul>
          <li>
            <label>ID</label>
            <input 
              type="text" 
              name='aid'
              value={loginForm.aid}
              onChange={(e) => 
                setLoginForm(prev => ({
                  ...prev,
                  aid: e.target.value
                }))
              }
              />
          </li>
          <li>
            <label>パスワード</label>
            <input 
              type="password" 
              name='pass'
              value={loginForm.pass}
              onChange={(e) => 
                setLoginForm(prev => ({
                  ...prev,
                  pass: e.target.value
                }))
              }
            />
          </li>
          <li>
            <button 
              type='button'
              className='login btn'
              onClick={() => handleLogin({
                aid: loginForm.aid,
                pass: loginForm.pass
              })}
              >ログイン
            </button>
          </li>
        </ul>
        
      <button className='create btn' type="button" onClick={() => setCurrentPage('create')}>アカウント作成</button>
      </form>
    </>
  )
}

export default Login;