import React from 'react';

const login = () => {
  return (
    <div>
      <form>
        <div>
          <label>ユーザーネーム</label>
          <input type="text" />
        </div>
        <div>
          <label>パスワード</label>
          <input type="password" />
        </div>
        <button>ログイン</button>
      </form>
    </div>
  );
};

export default login;