import { useState } from 'react';

const PasswordGate = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  
  const correctPassword = 'test123';

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (inputPassword === correctPassword) {
      setIsAuthorized(true);
    } else {
      alert('Incorrect password!');
      setInputPassword('');
    }
  };

  if (isAuthorized) {
    return <>{children}</>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20%' }}>
      <h2>Пароль для доступа</h2>
      <form onSubmit={handlePasswordSubmit}>
        <input
          type="password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          placeholder="Сюда пароль"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PasswordGate;
