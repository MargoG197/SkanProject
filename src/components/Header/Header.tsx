// import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import LimitCard from "../cards/LimitCard/LimitCard";
import "./index.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = () => {
  const { isAuthenticated, login, logout } = useAuth(); // Получаем данные из контекста
  return (
    <header
      style={{
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
				overflowX:"hidden"
      }}
    >
      <div
			className="headerInnerDiv"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxSizing: "border-box",
          height: "93px",
          width: "100%",
        }}
      >
        {/* Логотип и название */}
        <img
          src="../src/icons/ColorLogo.svg"
          alt="CKAH Logo"
          style={{ width: "100px", height: "auto" }}
        />
        <div className="navDiv"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxSizing: "border-box",
            height: "93px",
          }}
        >
            <nav className="navigation">
              <ul
							className="navigationUL"
                style={{
                  display: "flex",
                  listStyle: "none",
									// gap:'30px',
                  // gap: `${screenWidth >= 1035 ? "30px" : " 10px"}`,
                  alignItems: "justify-between",
                  boxSizing: "border-box",
                  padding: "0",
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
							className="userNameSection"
                style={{
                  flexDirection: "column",
                  alignItems: "flex-end",
                  height: "32px",
                  width: "111px",
                }}
              >
                <p style={{ color: "#333", margin: "0" }}>Алексей А.</p>
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
					<BurgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
