import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import LimitCard from "../cards/LimitCard/LimitCard";
import "./index.css";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
const Header = () => {
  const { isAuthenticated, login, logout } = useAuth(); // Получаем данные из контекста
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);
      // Определяем ширину карточки и количество видимых карточек
      useEffect(() => {
        const handleResize = () => {
          const newWidth = window.innerWidth;
          setScreenWidth(newWidth);
        };
    
        window.addEventListener('resize', handleResize);
        handleResize(); // Инициализация при монтировании
    
        return () => window.removeEventListener('resize', handleResize);
      }, []);
  
  return (
    <header
      style={{
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxSizing: "border-box",
          height: "93px",
          width: "100%",
          padding: "0 60px",
        }}
      >
        {/* Логотип и название */}
        <img
          src="../src/icons/ColorLogo.svg"
          alt="CKAH Logo"
          style={{ width: "100px", height: "auto",}}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxSizing: "border-box",
            height: "93px",
            width: `${screenWidth >= 1035 ? "57%":" 80%"}`,
          }}
        >
 <nav className="navigation">
          <ul
            style={{
              display: `${screenWidth >= 707 ? "flex": "none"}`,
              listStyle: "none",
              gap: `${screenWidth >= 1035 ? "30px":" 10px"}`,
              alignItems: "center",
              boxSizing: "border-box",
              padding:'0'
            }}
          >
            <li>
              <a href="/" style={{ textDecoration: "none", color: "#333" }}>
                Главная
              </a>
            </li>
            <li>
              <a href="/" style={{ textDecoration: "none", color: "#333" }}>
                Тарифы
              </a>
            </li>
            <li>
              <a href="/" style={{ textDecoration: "none", color: "#333" }}>
                FAQ
              </a>
            </li>
            {/* Блок для авторизованных пользователей */}
          </ul>
        </nav>
        {!isAuthenticated ? (
          <>
            <LimitCard />
            {/* Имя пользователя и кнопка выхода */}
            <div
              style={{
                flexDirection: "column",
                alignItems: "flex-end",
                height: '32px',
                width: '111px',
                display:`${screenWidth >= 707 ? "flex": "none"}`,
              }}
            >
              <p style={{ color: "#333", margin:'0', }}>
                 Алексей А.
              </p>
              <button
                onClick={logout}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}>
                Выйти
              </button>
            </div>
          </>
        ) : (
          <div
            style={{
              width: "251px",
              minWidth: "251px",
              gap: "18px",
              display: "flex",
              justifyContent: "space-between",
              boxSizing: "border-box",
              alignItems: "center",
            }}
          >
            <a
              href="/register"
              style={{
                textDecoration: "none",
                color: "#D9D1D2",
                padding: "8px 0",
                borderRadius: "4px",
              }}
            >
              Зарегистрироваться
            </a>

            <div
              style={{
                backgroundColor: "#029491",
                width: "2px",
                minWidth: "2px",
                height: "26px",
              }}
            ></div>

            <a
              href="/login"
              style={{
                textDecoration: "none",
                backgroundColor: "#7CE3E1",
                fontSize: "14px",
                color: "black",
                fontWeight: "500",
                height: "26px",
                width: "65px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "4px",
                boxSizing: "border-box",
              }}
            >
              Войти
            </a>
          </div>
          )}
          {screenWidth <= 707 &&
          <HamburgerMenu isOpen={isOpen} />}
          <div
            onClick={()=>isOpen? setIsOpen(false): setIsOpen(true)}
          style={{ display: `${screenWidth >= 707 ? "none" : "flex"}`, height:'25px', justifyContent:'space-between', flexDirection:'column',}}
        >
          <div
              style={{
                width: "35px",
                minWidth: '35px',
                height: "5px",
                backgroundColor: isOpen ? "#FFFFFF" : "#029491",
                transform: isOpen ? 'rotate(45deg) translate(7px, 8px)' : 'none',
                transition: 'all 0.5s ease-in-out'
           }}
          ></div>
          <div
              style={{
                width: "35px",
                minWidth: '35px',
                height: "5px",
                backgroundColor: isOpen ? "#FFFFFF" : "#029491",
                transform: isOpen ? 'rotate(45deg) translate(7px, 8px)' : 'none',
                opacity: isOpen ? 0 : 1,
                transition: "all 0.5s ease-in-out"
              }}
          ></div>
          <div
              style={{
                width: "35px",
                minWidth: '35px',
                height: "5px",
                backgroundColor: isOpen ? "#FFFFFF" : "#029491",
                transform: isOpen ? 'rotate(-45deg) translate(5px, -7px)' : 'none',
                transition: "all 0.5s ease-in-out"
              }}
          ></div>
          </div>
        </div>       
      </div>
    </header>
  );
};

export default Header;
