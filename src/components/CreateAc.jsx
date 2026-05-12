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
            <label>ID：</label>
            <input
              type="text"
              name='aid'
              value={createForm.aid}
              onChange={handleChangeValue} />
          </li>
          {errors.aid && <li className='error-message'>{errors.aid}</li>}
          <li>
            <label>パスワード：</label>
            <input 
              type="password"
              name='pass'
              value={createForm.pass}
              onChange={handleChangeValue} />
          </li>
          {errors.pass && <li className='error-message'>{errors.pass}</li>}
          <li>
            <label>パスワード確認用：</label>
            <input 
              type="password"
              name='confirmPass'
              value={createForm.confirmPass}
              onChange={(e) => setCreateForm(prev => ({
                ...prev,
                confirmPass: e.target.value
              }) )}
             />
          </li>
          {errors.confirmPass && <li className='error-message'>{errors.confirmPass}</li>}
          <li><button type='button' onClick={handleSubmit}>作成</button></li>
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