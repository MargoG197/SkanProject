import "./index.css"


const AuthForm:React.FC = () => {
  return (
    <div style={{
      maxWidth: '429px',
			height:"523px",
      margin: '0 auto',
      padding: '32px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
			position:"relative",
    }}>
			<img className="authForm_lock_img" 
			 src='../../src/icons/AuthLock.svg' alt="AuthLock" />
      {/* Шапка формы */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '24px',
        borderBottom: '1px solid #f0f0f0',
        paddingBottom: '16px'
      }}>
        <button style={{
          border: 'none',
          background: 'none',
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#029491',
          cursor: 'pointer',
          padding: '8px 16px',
					borderBottom: 'solid 1px #029491'
        }}>
          Войти
        </button>
        <button style={{
          border: 'none',
          background: 'none',
          fontSize: '16px',
          color: '#999999',
          cursor: 'not-allowed',
          padding: '8px 16px',
					borderBottom: 'solid 1px'
        }} disabled>
          Зарегистрироваться
        </button>
      </div>
      {/* Поля формы */}
      <div style={{ marginBottom: '24px' }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          fontSize: '14px',
          color: '#666666'
        }}>
          Логин или номер телефона:
        </label>
        <input
          type="text"
          style={{
            width: '100%',
            padding: '12px',
            border: '1px solid #d9d9d9',
            borderRadius: '4px',
            fontSize: '16px'
          }}
        />
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          fontSize: '14px',
          color: '#666666'
        }}>
          Пароль:
        </label>
        <input
          type="password"
          style={{
            width: '100%',
            padding: '12px',
            border: '1px solid #d9d9d9',
            borderRadius: '4px',
            fontSize: '16px'
          }}
        />
      </div>

      {/* Кнопка входа */}
      <button
        style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#1890ff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer',
          marginBottom: '16px'
        }}
      >
        Войти
      </button>

      {/* Ссылка восстановления пароля */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <a href="#" style={{
          color: '#1890ff',
          textDecoration: 'none',
          fontSize: '14px'
        }}>
          Восстановить пароль
        </a>
      </div>

      {/* Раздел "Войти через" */}
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <span style={{
          color: '#999999',
          fontSize: '14px',
          position: 'relative',
          display: 'inline-block',
          padding: '0 10px',
          backgroundColor: '#fff'
        }}>
          Войти через:
        </span>
        <div style={{
          borderTop: '1px solid #f0f0f0',
          marginTop: '-8px',
          zIndex: '-1'
        }}></div>
      </div>

      {/* Кнопки соцсетей (неактивные) */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '16px',
        marginBottom: '16px'
      }}>
        {['Google', 'Facebook', 'Яндекс'].map((service) => (
          <button
            key={service}
            style={{
              padding: '8px 16px',
              border: '1px solid #d9d9d9',
              borderRadius: '4px',
              backgroundColor: '#fafafa',
              color: '#999999',
              cursor: 'not-allowed',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
            disabled
          >
            {service}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AuthForm;