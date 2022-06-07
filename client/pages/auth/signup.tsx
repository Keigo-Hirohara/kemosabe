import React from 'react';

const signup = () => {
  return (
    <div>
      <form>
        <div>
          <label>email</label>
          <input type="text" />
        </div>
        <div>
          <label>ユーザーネーム</label>
          <input type="text" />
        </div>
        <div>
          <label>パスワード</label>
          <input type="password" />
        </div>
        <button>始める</button>
      </form>
    </div>
  );
};

export default signup;