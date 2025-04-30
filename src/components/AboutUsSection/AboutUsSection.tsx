import React, { useEffect, useState } from "react";
import CarouselCard from "../cards/CaruselCard/CarouselCard";
import "./index.css";

const AboutUsSection = () => {
  const [currentPosition, setCurrentPosition] = useState<number>(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
  
  const icons = [
    "../../../../src/icons/clock.svg",
    "../../../../src/icons/magnifier.svg",
    "../../../../src/icons/keyHole.svg",
    "../../../../src/icons/clock.svg",
    "../../../../src/icons/magnifier.svg",
    "../../../../src/icons/keyHole.svg",
  ];
  const text = [
    "Высокая и оперативная скорость обработки заявки",
    "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос",
    "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству",
    "Высокая и оперативная скорость обработки заявки",
    "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос",
    "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству",
  ];


  const nextSlide = () => {
    setCurrentPosition(() =>
      currentPosition == -(( screenWidth >= 575 ? 430 : 308) * (text.length - (screenWidth >= 1375 ? 3 : screenWidth >=924 ? 2 : 1 ))) ? 0 : currentPosition - ( screenWidth >= 575 ? 430 : 308)
    );
  };

  const prevSlide = () => {
    setCurrentPosition(() =>
      currentPosition == 0 ? 0 : currentPosition + ( screenWidth >= 575 ? 430 : 308)
    );
  };


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: (screenWidth >=1375 ? '1375px' : screenWidth >= 924 ? '970px': screenWidth >= 575 ? '520px' : '410px'),
        alignItems: "flex-start",
      }}
    >
      <h1
        style={{
          fontWeight: "900",
          fontSize: "45px",
          textDecoration: "uppercase",
        }}
      >
        Почему именно мы
      </h1>
      <div
        className="carousel-container"
        style={{
          display: "flex",
          justifyItems: 'center',
          width: "100%",
          minHeight: ( screenWidth >= 575 ? '280px' : '230px' ),
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div
          className="arrow"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            onClick={prevSlide}
            src="../../../src/icons/shevron.svg"
            style={{
              width: "40px",
              cursor: `${currentPosition == 0 ? "" : "pointer"}`,
            }}
          />
        </div>
        <div
          style={{
            maxWidth: (screenWidth >=1375 ? '1270px' : screenWidth >= 924 ? '840px': screenWidth >= 575 ? '410px' : '308px' ),
            overflowX: "hidden",
          }}
        >
          <div
            className="carousel-track"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              maxWidth:  (screenWidth >=1375 ? '1270px' : screenWidth >= 924 ? '830px': screenWidth >= 575 ? '400px' : '300px' ),
              gap: (screenWidth >= 575 ? '30px': '10px'),
              minHeight: ( screenWidth >= 575 ? '280px' : '230px' ),
              alignItems: "flex-start",
              padding: "5px 5px",
              transform: `translateX(${currentPosition}px)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {text.map((item, ind) => (
              <React.Fragment key={ind}>
                <CarouselCard text={item} svg={`${icons[ind]}`} screen={screenWidth >= 575 ? 'pc' : 'mobile'}  />
              </React.Fragment>
            ))}
          </div>
        </div>
        <div
          className="arrow"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            onClick={nextSlide}
            src="../../../src/icons/shevron.svg"
            style={{
              transform: "rotate(180deg)",
              cursor: `${
                currentPosition == -(( screenWidth >= 575 ? 430 : 298) * (text.length - (screenWidth >= 1375 ? 3 : screenWidth >=924 ? 2 : 1 ))) ? "" : "pointer"
              }`,
              backgroundColor: `${
                currentPosition == -(( screenWidth >= 575 ? 430 : 298) * (text.length - (screenWidth >= 1375 ? 3 : screenWidth >=924 ? 2 : 1 ))) ? "" : ""
              }`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
