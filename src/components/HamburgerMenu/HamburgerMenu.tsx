// import Button from "../Button/Button";
// import { useAuth } from "../../context/AuthContext";
// import "./index.css";
// import { createPortal } from "react-dom";
// import { useState } from "react";

// const HamburgerMenu = () => {
//   const { isAuthenticated, logout } = useAuth(); // Получаем данные из контекста
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <div
//         className="burgerMenuIcon"
//         onClick={toggleMenu}
//         style={{
//           height: "25px",
//           justifyContent: "space-between",
//           flexDirection: "column",
//         }}
//       >
//         <div
//           style={{
//             width: "35px",
//             minWidth: "35px",
//             height: "5px",
//             zIndex: "100",
//             backgroundColor: isOpen ? "#FFFFFF" : "#029491",
//             transform: isOpen ? "rotate(45deg) translate(7px, 8px)" : "none",
//             transition: "all 0.5s ease-in-out",
//           }}
//         ></div>
//         <div
//           style={{
//             width: "35px",
//             minWidth: "35px",
//             height: "5px",
//             zIndex: "100",
//             backgroundColor: isOpen ? "#FFFFFF" : "#029491",
//             transform: isOpen ? "rotate(45deg) translate(7px, 8px)" : "none",
//             opacity: isOpen ? 0 : 1,
//             transition: "all 0.5s ease-in-out",
//           }}
//         ></div>
//         <div
//           style={{
//             width: "35px",
//             minWidth: "35px",
//             height: "5px",
//             zIndex: "100",
//             backgroundColor: isOpen ? "#FFFFFF" : "#029491",
//             transform: isOpen ? "rotate(-45deg) translate(5px, -7px)" : "none",
//             transition: "all 0.5s ease-in-out",
//           }}
//         ></div>
//       </div>

//       {isOpen &&
//         createPortal(
//           <div
//             className="burgerMenu"
//             style={{
//               height: "491px",
//               width: "100%",
//               boxSizing: "border-box",
//               backgroundColor: "#029491",
//               color: "white",
//               position: "absolute",
//               top: "0",
//               alignItems: "center",
//               opacity: isOpen ? "1" : "0",
//               right: isOpen ? "0" : "-100%", // Анимируем от -100% до 0
//               transition:
//                 "right 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)", // Плавная анимация
//               overflowY: "auto",
//             }}
//           >
//             <img
//               className="BurgerMenuScanLogo"
//               src="../src/icons/FooterLogo.svg"
//               alt="CKAH Logo"
//               style={{
//                 width: "100px",
//                 height: "auto",
//                 marginLeft: "40px",
//                 marginBottom: "93px",
//               }}
//             />

//             <nav>
//               <ul
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   listStyle: "none",
//                   gap: "30px",
//                   alignItems: "center",
//                   boxSizing: "border-box",
//                   padding: "0",
//                 }}
//               >
//                 <li>
//                   <a
//                     href="/"
//                     style={{
//                       textDecoration: "none",
//                       color: "#fff",
//                       fontSize: "16px",
//                     }}
//                   >
//                     Главная
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/"
//                     style={{
//                       textDecoration: "none",
//                       color: "#fff",
//                       fontSize: "16px",
//                     }}
//                   >
//                     Тарифы
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/"
//                     style={{
//                       textDecoration: "none",
//                       color: "#fff",
//                       fontSize: "16px",
//                     }}
//                   >
//                     FAQ
//                   </a>
//                 </li>
//                 {/* Блок для авторизованных пользователей */}
//               </ul>
//             </nav>
//             <div
//               style={{
//                 width: "100%",
//                 gap: "18px",
//                 display: "flex",
//                 boxSizing: "border-box",
//                 flexDirection: "column",
//                 alignItems: "center",
//               }}
//             >
//               <a
//                 href="/register"
//                 style={{
//                   textDecoration: "none",
//                   color: "white",
//                   opacity: "40%",
//                   padding: "8px 0",
//                   borderRadius: "4px",
//                   fontSize: "16px",
//                 }}
//               >
//                 Зарегистрироваться
//               </a>
//               {isAuthenticated ? (
//                 <button
//                   onClick={logout}
//                   style={{
//                     backgroundColor: "transparent",
//                     border: "none",
//                     borderRadius: "4px",
//                     cursor: "pointer",
//                   }}
//                 >
//                   Выйти
//                 </button>
//               ) : (
//                 <Button
//                   onClickFunc={() => {}}
//                   btnText={
//                     <a
//                       href="/login"
//                       style={{ textDecoration: "none", color: "#000000" }}
//                     >
//                       {" "}
//                       Войти
//                     </a>
//                   }
//                   bg="#7CE3E1"
//                   textColor="#000000"
//                 />
//               )}
//             </div>
//           </div>,
//           document.getElementById("portal-root") as HTMLElement
//         )}
//     </>
//   );
// };

// export default HamburgerMenu;

import Button from "../Button/Button";
import { useAuth } from "../../context/AuthContext";
import "./index.css";
import { createPortal } from "react-dom";
import { useState, useEffect } from "react";

const HamburgerMenu = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const portalRoot = document.getElementById("portal-root");

  if (!portalRoot) return null;

  return (
    <>
      <div
        className="burgerMenuIcon"
        onClick={toggleMenu}
        style={{
          height: "25px",
          width: "100%",
          justifyContent: "space-between",
          flexDirection: "column",
          cursor: "pointer",
          zIndex: 1001,
          marginLeft: "20px",
          position: `${!isOpen ?  "relative" : "fixed"}`,
          left: `${!isOpen ? "" :  "82%"}`,

        }}
      >
        <div
          style={{
            width: "35px",
            height: "5px",
            backgroundColor: isOpen ? "#FFFFFF" : "#029491",
            transform: isOpen ? "rotate(45deg) translate(7px, 8px)" : "none",
            transition: "all 0.5s ease",
          }}
        />
        <div
          style={{
            width: "35px",
            height: "5px",
            backgroundColor: isOpen ? "#FFFFFF" : "#029491",
            opacity: isOpen ? 0 : 1,
            transition: "all 0.3s ease",
          }}
        />
        <div
          style={{
            width: "35px",
            height: "5px",
            backgroundColor: isOpen ? "#FFFFFF" : "#029491",
            transform: isOpen ? "rotate(-45deg) translate(5px, -7px)" : "none",
            transition: "all 0.5s ease",
          }}
        />
      </div>

      {createPortal(
        <>
          <div
            className={`menu-overlay ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              opacity: isOpen ? 1 : 0,
              visibility: isOpen ? "visible" : "hidden",
              transition: "opacity 0.3s ease",
              zIndex: 999,
            }}
          />
          <div
            className={`burger-menu-content ${isOpen ? "open" : ""}`}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "100%",
              maxWidth: "100%",
              height: "100%",
              zIndex: 1000,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                right: isOpen ? "0" : "-100%",
                width: "100%",
                height: "100%",
                backgroundColor: "#029491",
                transition: "right 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />
            <div
              style={{
                position: "relative",
                height: "100%",
                padding: "20px",
                opacity: isOpen ? 1 : 0,
                transition: "opacity 0.4s ease 0.2s", // Задержка для синхронизации с движением
                zIndex: 1001,
              }}
            >
              <img
                className="BurgerMenuScanLogo"
                src="../src/icons/FooterLogo.svg"
                alt="CKAH Logo"
                style={{
                  width: "100px",
                  height: "auto",
                  marginLeft: "0px",
                  marginTop: "-23px",
                  alignSelf: "flex-start",
                }}
              />
              <nav>
                <ul
                  style={{
                    width: "full",
                    display: "flex",
                    flexDirection: "column",
                    listStyle: "none",
                    gap: "30px",
                    alignItems: "center",
                    padding: "0",
                  }}
                >
                  <li>
                    <a
                      href="/"
                      style={{
                        textDecoration: "none",
                        color: "#fff",
                        fontSize: "16px",
                      }}
                    >
                      Главная
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      style={{
                        textDecoration: "none",
                        color: "#fff",
                        fontSize: "16px",
                      }}
                    >
                      Тарифы
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      style={{
                        textDecoration: "none",
                        color: "#fff",
                        fontSize: "16px",
                      }}
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </nav>

              <div
                style={{
                  width: "100%",
                  gap: "18px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <a
                  href="/register"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    opacity: "0.4",
                    padding: "8px 0",
                    borderRadius: "4px",
                    fontSize: "16px",
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
                      color: "white",
                      fontSize: "16px",
                      padding: "8px 16px",
                    }}
                  >
                    Выйти
                  </button>
                ) : (
                  <Button
                    onClickFunc={() => {}}
                    btnText={
                      <a
                        href="/login"
                        style={{ textDecoration: "none", color: "#000000" }}
                      >
                        Войти
                      </a>
                    }
                    bg="#7CE3E1"
                    textColor="#000000"
                  />
                )}
              </div>
            </div>
          </div>
        </>,
        portalRoot
      )}
    </>
  );
};

export default HamburgerMenu;
