import React from 'react';
import useInputChange from '../hook/useInputs';

function AdminLogin() {
  const [{id, pw}, onRset, onChange] = useInputChange({
    id: '',
    pw: ''
  })

  console.log({ id, pw })
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="id" id={id} onChange={onChange} placeholder='아이디' required />
        <input name="pw" id={pw} onChange={onChange} placeholder='비밀번호' required />
        <button>로그인</button>
      </form>
    </div>
  );
}

export default AdminLogin;