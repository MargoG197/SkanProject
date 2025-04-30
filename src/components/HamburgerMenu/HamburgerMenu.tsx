import Button from "../Button/Button";
import { useAuth } from "../../context/AuthContext";

const HamburgerMenu = ({ isOpen}:{isOpen:boolean}) => {
  const { isAuthenticated, login, logout } = useAuth(); // Получаем данные из контекста

  return (
    <div
      style={{
        height: "491px",
        
        width: "100%",
        boxSizing:'border-box',
        backgroundColor: "#029491",
        color: "white",
        position: "absolute",
        top: "0",
        alignItems: 'center',
        opacity: isOpen ? "1" : "0",
        right: isOpen ? "0" : "-100%", // Анимируем от -100% до 0
        transition: "right 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)", // Плавная анимация
        overflowY: "auto",
      }}
    >
      <img className="logo" src='../src/icons/FooterLogo.svg' alt="CKAH Logo" style={{ width: '100px', height: 'auto', marginLeft:"40px", marginBottom:'93px', }} />
      <nav className="navigation">
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            listStyle: "none",
            gap: "30px",
            alignItems: "center",
            boxSizing: "border-box",
            padding: "0",
          }}
        >
          <li>
            <a href="/" style={{ textDecoration: "none", color: "#fff", fontSize:'16px' }}>
              Главная
            </a>
          </li>
          <li>
            <a href="/" style={{ textDecoration: "none", color: "#fff", fontSize:'16px' }}>
              Тарифы
            </a>
          </li>
          <li>
            <a href="/" style={{ textDecoration: "none", color: "#fff", fontSize:'16px' }}>
              FAQ
            </a>
          </li>
          {/* Блок для авторизованных пользователей */}
        </ul>
      </nav>
      <div
        style={{
          width: "100%",
          gap: "18px",
          display: "flex",
          boxSizing: "border-box",
          flexDirection: "column",
          alignItems:'center'
        }}
      >
        <a
          href="/register"
          style={{
            textDecoration: "none",
            color: "white",
            opacity:'40%',
            padding: "8px 0",
            borderRadius: "4px",
            fontSize:'16px'
          }}
        >
          Зарегистрироваться
        </a>
        {isAuthenticated ? (
          <button
            onClick={logout}
            style={{
              backgroundColor: "transparent",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Выйти
          </button>
        ) : (
          <Button onClickFunc={() => { }} btnText={<a href="/login" style={{textDecoration:"none", color:'#000000'}}> Войти</a>} bg="#7CE3E1" textColor="#000000" />
        )}
      </div>
    </div>
  );
};

export default HamburgerMenu;
