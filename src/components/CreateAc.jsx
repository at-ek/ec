import { useState, useRef } from 'react'

const CreateAccount = ({ createForm, setCreateForm, handleSubmit, errors }) => {

const handleChangeValue = (e) => {
  const {name, value} = e.target;

  setCreateForm(prev => ({
    ...prev,
    [name]: value
  }))
}

  return (
    <>
      <form className='create-form'>
        <ul>
          <li>
            <label>ID</label>
            <input
              type="text"
              name='aid'
              value={createForm.aid}
              onChange={handleChangeValue} />
              {errors.aid && <span className='error-message'>{errors.aid}</span>}
          </li>
          
          <li>
            <label>パスワード</label>
            <input 
              type="password"
              name='pass'
              value={createForm.pass}
              onChange={handleChangeValue} />
              {errors.pass && <span className='error-message'>{errors.pass}</span>}
          </li>
          
          <li>
            <label>パスワード(再)</label>
            <input 
              type="password"
              name='confirmPass'
              value={createForm.confirmPass}
              onChange={(e) => setCreateForm(prev => ({
                ...prev,
                confirmPass: e.target.value
              }) )} />
          {errors.confirmPass && <span className='error-message'>{errors.confirmPass}</span>}

          </li>
          <li><button type='button' className='create btn' onClick={handleSubmit}>アカウント作成</button></li>
        </ul>
      </form>
      <div className="notice">
        <p className="notice-id">※IDは半角英数字を含む合計8文字以上16文字以内のもの</p>
        <p className="notice-pass">※パスワードは半角英数字を含む合計8文字以上16文字以内のもの</p>
      </div>
    </>
  )
}

export default CreateAccount;