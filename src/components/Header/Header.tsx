import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { isAuthenticated, login, logout } = useAuth(); // Получаем данные из контекста

  return (
    <header style={{
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
      width: '100%',
      boxSizing: 'border-box',
      height: '93px'
    }}>
      {/* Логотип и название */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <img src='../src/icons/ColorLogo.svg' alt="CKAH Logo" style={{ width: '100px', height: 'auto' }} />
      </div>

      {/* Навигация */}
      <nav>
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          gap: '30px',
          alignItems: 'center'
        }}>
          <li><a href="/" style={{ textDecoration: 'none', color: '#333' }}>Главная</a></li>
          <li><a href="/tariffs" style={{ textDecoration: 'none', color: '#333' }}>Тарифы</a></li>
          <li><a href="/faq" style={{ textDecoration: 'none', color: '#333' }}>FAQ</a></li>

          {/* Блок для авторизованных пользователей */}
          {isAuthenticated ? (
            <>

              {/* Имя пользователя и кнопка выхода */}
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#333' }}>{isAuthenticated || 'Алексей А.'}</span>
                <button 
                  onClick={logout}
                  style={{
                    backgroundColor: 'transparent',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    padding: '5px 10px',
                    cursor: 'pointer'
                  }}
                >
                  Выйти
                </button>
              </li>
            </>
          ) : (
            /* Блок для неавторизованных */
            <>
              <li>
                <a href="/register" style={{
                  textDecoration: 'none',
                  color: '#fff',
                  backgroundColor: '#1890ff',
                  padding: '8px 16px',
                  borderRadius: '4px'
                }}>Зарегистрироваться</a>
              </li>
              <li>
                <a href="/login" style={{
                  textDecoration: 'none',
                  color: '#1890ff',
                  border: '1px solid #1890ff',
                  padding: '8px 16px',
                  borderRadius: '4px'
                }}>Войти</a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
